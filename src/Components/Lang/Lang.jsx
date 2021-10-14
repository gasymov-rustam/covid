import cn from "./Lang.module.css";
import { useData } from "../../hooks/useData";
import translate from "../../translate/translations";
import { useState } from "react";
import cl from "classnames";

export default function Lang() {
  const [{lang}, dispatch] = useData();
  const languages = Object.keys(translate);
  function changeLanguage(language) {
    dispatch({ type: "CHANGE_LANG", payload: language });
  }
  return (
    <div className={cn.wrapper}>
      {languages.map((language) => (
        <button
          key={language}
          className={cl(cn.btn, {[cn.active]: lang === language})}
          onClick={() => changeLanguage(language)}
        >
          {language}
        </button>
      ))}
    </div>
  );
}
