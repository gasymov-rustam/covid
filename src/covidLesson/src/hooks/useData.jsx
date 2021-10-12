import { useReducer, useContext, createContext, useMemo, useEffect } from 'react';

const initialState = {
  region: 'world',
  lang: 'en',
  covid: {},
  sortParams: {
    key: null,
    order: 1,
  },
  searchQuery: '',
};

const DataContext = createContext(initialState);

export function useData() {
  return useContext(DataContext);
}

export function DataProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const memoValue = useMemo(() => [state, dispatch], [state]);

  useEffect(() => {
    getData()
  }, []);
  useEffect(() => {
    console.log('CONTEXT DATA ->>', state);
  }, [state]);

  async function getData() {
    try {
      const now = new Date().toJSON().split('T')[0]
      const response = await fetch(`https://api-covid19.rnbo.gov.ua/data?to=${now}`);
      if (response.ok) {
        const data = await response.json();
        dispatch({ type: 'GET_COVID_DATA', payload: data });
      } else{
        throw `Bad request! ${response.status}`
      }
    } catch (error) {
      console.warn(error);
    }
  };
  return <DataContext.Provider value={memoValue}>{children}</DataContext.Provider>;
}

function reducer(state, {type, payload}) {
  switch (type) {
    case 'GET_COVID_DATA': {
      return {...state, covid: payload};
    }
    case 'CHANGE_LANG': {
      return {...state, lang: payload};
    }
    default: {
      throw new Error(`Wrong action.type! Received type is-->> ${type}`);
    }
  }
}
