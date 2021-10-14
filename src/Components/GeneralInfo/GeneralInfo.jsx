import cl from "./GeneralInfo.module.css";
import { useData } from "../../hooks/useData";
import { createSum, createArrow } from "../../utilits/utilits";

export default function GeneralInfo() {
  const [{ region, covid }] = useData();
  const data = covid[region];
  return (
    <dl className={cl.generalInformation}>
      <div className={cl.confirmed}>
        <dt>Підтверджено:</dt>
        <dd>{data && createSum(data, "confirmed")}</dd>
        <dd className={cl.differnce}>{data && createArrow(createSum(data, "delta_confirmed"))}</dd>
      </div>
      <div className={cl.deaths}>
        <dt>Померло:</dt>
        <dd>{data && createSum(data, "deaths")}</dd>
        <dd className={cl.differnce}>{data && createArrow(createSum(data, "delta_deaths"))}</dd>
      </div>
      <div className={cl.recovered}>
        <dt>Одужало:</dt>
        <dd>{data && createSum(data, "recovered")}</dd>
        <dd className={cl.differnce}>{data && createArrow(createSum(data, "delta_recovered"))}</dd>
      </div>
      <div className={cl.existing}>
        <dt>Існуючі:</dt>
        <dd>{data && createSum(data, "existing")}</dd>
        <dd className={cl.differnce}>{data && createArrow(createSum(data, "delta_existing"))}</dd>
      </div>
      ;
    </dl>
  );
}
