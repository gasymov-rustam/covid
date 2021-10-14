import cn from "./Lang.module.css";
import { useData } from "../../hooks/useData";
import translate from "../../translate/translations";
import { useState } from "react";
import cl from "classnames";

export default function Lang() {
  const [, dispatch] = useData();
  const [count, setCount] = useState(0);
  const languages = Object.keys(translate);
  function changeLanguage(language, idx) {
    dispatch({ type: "CHANGE_LANG", payload: language });
    setCount(idx);
  }
  return (
    <div className={cn.wrapper}>
      {languages.map((language, idx) => (
        <button
          key={language}
          className={count === idx ? cl(cn.btn, cn.active) : cn.btn}
          onClick={() => changeLanguage(language, idx)}
        >
          {language}
        </button>
      ))}
    </div>
  );
}
