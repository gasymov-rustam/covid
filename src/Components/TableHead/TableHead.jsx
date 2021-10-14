import cn from "./TableHead.module.css";
import { useData } from "../../hooks/useData";
import { useState } from "react";
import translate from "../../translate/translations";
import cl from "classnames";

export default function TableHead() {
  const [count, setCount] = useState(null);
  const [{ sortParams, region, lang }, dispatch] = useData();
  const {
    confirmed,
    deaths,
    recovered,
    existing,
    region: { world, ukraine },
  } = translate[lang];
  const { key, order } = sortParams;
  const sortFieldsUk = [ukraine, confirmed, deaths, recovered, existing];
  const sortFieldsW = [world, confirmed, deaths, recovered, existing];
  const sortKeys = Object.keys(translate.en).splice(1, 5).fill("label", 0, 1);
  function handler(idx) {
    setCount(idx);
    dispatch({
      type: "SORT",
      payload: { key: sortKeys[idx], order: count === idx ? order * -1 : order },
    });
  }
  return (
    <th className={cn.wrapper}>
      {(region === "ukraine" ? sortFieldsUk : sortFieldsW).map((item, idx) => (
        <td
          className={count === idx ? cl(cn.sortBtn, cn.active) : cn.sortBtn}
          onClick={() => handler(idx)}
          key={item}
        >
          {count !== idx ? (
            item
          ) : key === null ? (
            item
          ) : order === 1 ? (
            <span>
              <i>&#129045;&#32;</i>
              {item}
            </span>
          ) : (
            <span>
              <i>&#129047;&#32;</i>
              {item}
            </span>
          )}
        </td>
      ))}
    </th>
  );
}
