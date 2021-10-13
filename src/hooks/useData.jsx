import { useReducer, useContext, createContext, useMemo, useEffect } from "react";

const initialState = {
  region: "ukraine",
  lang: "uk",
  covid: {},
  sortParams: {
    key: null,
    order: 1,
  },
  searchQuery: "",
};

const DataContext = createContext(initialState);

export function useData() {
  return useContext(DataContext);
}

export function DataProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const memoValue = useMemo(() => [state, dispatch], [state]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const currentData = new Date().toJSON().split("T")[0];
      const response = await fetch(`https://api-covid19.rnbo.gov.ua/data?to=${currentData}`);
      if (response.ok) {
        const data = await response.json();
        dispatch({ type: "GET_COVID_DATA", payload: data });
      } else {
        throw `Bad request! ${response.status}`;
      }
    } catch (error) {
      console.warn(error);
    }
  }
  return <DataContext.Provider value={memoValue}>{children}</DataContext.Provider>;
}

function reducer(state, { type, payload }) {
  switch (type) {
    case "GET_COVID_DATA": {
      return { ...state, covid: payload };
    }
    case "CHANGE_LANG": {
      return { ...state, lang: payload };
    }
    case "CHANGE_REGION": {
      return { ...state, region: payload };
    }
    case "SEARCH": {
      return { ...state, searchQuery: payload };
    }
    default: {
      throw new Error(`Wrong action.type! Received type is-->> ${type}`);
    }
  }
}
