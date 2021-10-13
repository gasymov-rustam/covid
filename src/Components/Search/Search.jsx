import cl from "./Search.module.css";
import { useState } from "react";
import { useData } from "../../hooks/useData";

export default function Search() {
  const [value, setValue] = useState("");
  const [{ covid, region, lang, searchQuery }, dispatch] = useData();
  const filterField = ["en", "uk"];
  let formattedArray = [];
  // console.log(searchQuery);
  const word = value
    .trim()
    .toLowerCase()
    .split(" ")
    .filter((word) => !!word)
    .splice(0, 1)
    .join("");

  if (covid[region]) {
    // word = String(word);
    // console.log(word);
    // const data = covid[region];
    // formattedArray = covid[region].filter((item) => {
    //   return String(item.label[lang]).toLowerCase().includes(word);
    // });
    // formattedArray = covid[region].filter((country) => {
    //   return filterField.some((field) => {
    //     return String(country.label[field]).toLowerCase().includes(word);
    //   });
    // });
    // dispatch({ type: "SEARCH", payload: formattedArray });
    // console.log(formattedArray);
    // console.log(formattedArray);
    // console.log(formattedArray);
    // console.log(data);
    // formattedArray = covid[region].map((item) => console.log(item.label[lang].includes(value)));
    // formattedArray = covid[region].map((item) => {
    //   return item.label[lang].filter((item) => console.log(item));
    // });
  }

  // console.log(value);
  // console.log(word);
  // console.log(formattedArray);
  // const [one, setOne] = useState([...array]);
  // const filterField = ["en", "uk"];
  // let word = "";
  // let formattedArray = [];
  // (function () {
  //   word = value
  //     .trim()
  //     .toLowerCase()
  //     .split(" ")
  //     .filter((word) => !!word)
  //     .splice(0, 1);
  //   formattedArray = array.filter((country) => {
  //     return filterField.some((field) => {
  //       return String(country.label[field]).toLowerCase().includes(word);
  //     });
  //   });
  //   // arraySet(formattedArray);
  // })();
  // console.log(formattedArray);

  //   useEffect(() => {
  //     word = value
  //       .trim()
  //       .toLowerCase()
  //       .split(" ")
  //       .filter((word) => !!word)
  //       .splice(0, 1);
  //     formattedArray = array.filter((country) => {
  //       return filterField.some((field) => {
  //         return String(country.label[field]).toLowerCase().includes(word);
  //       });
  //     }, []);
  //     // console.log(formattedArray);
  //     arraySet(formattedArray);
  // console.log(array);
  // console.log(formattedArray);
  // arraySet((prev) => console.log(prev));
  // arraySet((prev) => [...prev, ...formattedArray]);
  // console.log(array);

  // return arraySet((prev) => [...prev, ...formattedArray]);
  //   }, [value]);
  //   //   console.log(array);
  // const handler = (e) => {
  //   setValue(e.target.value);
  //   status(!one);
  //   arraySet(formattedArray);
  //   return handler();
  // };

  function handler(e) {
    // const word = value
    //   .trim()
    //   .toLowerCase()
    //   .split(" ")
    //   .filter((word) => !!word)
    //   .splice(0, 1)
    //   .join("");
    formattedArray = covid[region].filter((country) => {
      return filterField.some((field) => {
        return String(country.label[field]).toLowerCase().includes(word);
      });
    });
    setValue(e.target.value);
    dispatch({ type: "SEARCH", payload: formattedArray });
    console.log(formattedArray);
    console.log(searchQuery);
  }
  return (
    <div>
      <form method="get" onChange={(e) => handler(e)} className={cl.searchForm}>
        <button type="submit" className={cl.button} disabled>
          &#128269;
        </button>
        <input
          type="text"
          className={cl.input}
          name="searchPlace"
          placeholder="search by region"
          id="searchPlaceEl"
          value={value}
        />
      </form>
    </div>
  );
}
