import { useData } from "../../hooks/useData";
import { createSum } from "../../utilits/utilits";
import Card from "../Card/Card";

export default function CardList() {
  const [{ covid, region, lang }] = useData();
  return (
    <tbody>
      {covid[region] && covid[region].map((item) => <Card key={item.id} data={item} />)}
    </tbody>
  );
}
