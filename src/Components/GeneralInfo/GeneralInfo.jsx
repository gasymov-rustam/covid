import cl from "./GeneralInfo.module.css";
import { useData } from "../../hooks/useData";
import { createSum, createArrow } from "../../utilits/utilits";

export default function GeneralInfo() {
  const [{ region, covid }] = useData();
  const data = covid[region];
  return (
    <tr className={cl.generalInformation}>
      <td className={cl.confirmed}>
        <div>Підтверджено:</div>
        <div>{data && createSum(data, "confirmed")}</div>
        <div className={cl.differnce}>
          {data && createArrow(createSum(data, "delta_confirmed"))}
        </div>
      </td>
      <td className={cl.deaths}>
        <div>Померло:</div>
        <div>{data && createSum(data, "deaths")}</div>
        <div className={cl.differnce}>{data && createArrow(createSum(data, "delta_deaths"))}</div>
        {/* <div className={}"wrapper-data__delta">
          ${createDataDifference(createGeneralInformation(array, "delta_deaths"))}
        </div> */}
      </td>
      <td className={cl.recovered}>
        <div>Одужало:</div>
        <div>{data && createSum(data, "recovered")}</div>
        <div className={cl.differnce}>
          {data && createArrow(createSum(data, "delta_recovered"))}
        </div>
      </td>
      <td className={cl.existing}>
        <div>Існуючі:</div>
        <div>{data && createSum(data, "existing")}</div>
        <div className={cl.differnce}>{data && createArrow(createSum(data, "delta_existing"))}</div>
      </td>
      ;
    </tr>
  );
}
