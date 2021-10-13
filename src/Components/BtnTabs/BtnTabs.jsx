import { useData } from "../../hooks/useData";
import { useState } from "react";
import translate from "../../translate/translations";
import cn from "./BtnTabs.module.css";
import cl from "classnames";

export default function Lang() {
  const [count, setCount] = useState(0);
  const [{ covid, region, lang }, dispatch] = useData();
  const { regionW, regionUA } = translate[lang];
  const buttons = [regionUA, regionW];

  function changeRegion(idx) {
    setCount(idx);
    dispatch({ type: "CHANGE_REGION", payload: Object.keys(covid)[idx] });
  }
  return (
    <div className={cn.wrapper}>
      {buttons.map((button, idx) => (
        <button
          key={button}
          className={count === idx ? cl(cn.tabs, cn.active) : cn.tabs}
          onClick={() => changeRegion(idx)}
        >
          {button}
        </button>
      ))}
    </div>
  );
}
