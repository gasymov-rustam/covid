import cn from "./Card.module.css";
import { useData } from "../../hooks/useData";

export default function Card({ array }) {
  const [{ lang }] = useData();
  return (
    <tr className="wrapper-data">
      <td className="wrapper-data__country">${array?.label?.[lang]}</td>
      <td className="wrapper-data__confirmed">
        <div>${array?.confirmed}</div>
        {/* <div className="wrapper-data__delta">${createDataDifference(array["delta_confirmed"])}</div> */}
      </td>
      <td className="wrapper-data__deaths">
        <div>${array?.deaths}</div>
        {/* <div className="wrapper-data__delta">${createDataDifference(array["delta_deaths"])}</div> */}
      </td>
      <td className="wrapper-data__recovered">
        <div>${array?.recovered}</div>
        {/* <div className="wrapper-data__delta">${createDataDifference(array["delta_recovered"])}</div> */}
      </td>
      <td className="wrapper-data__existing">
        <div>${array?.existing}</div>
        {/* <div className="wrapper-data__delta">${createDataDifference(array["delta_existing"])}</div> */}
      </td>
    </tr>
  );
}
