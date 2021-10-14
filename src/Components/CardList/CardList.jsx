import { useData } from "../../hooks/useData";
import translate from "../../translate/translations";
import { sortBy } from "../../utilits/utilits";
import Card from "../Card/Card";

export default function CardList() {
  const [{ sortParams, covid, region, searchQuery }] = useData();
  const { key, order } = sortParams;

  let formattedArray = [];
  const word = searchQuery.split(" ")[0];
  if (covid[region]) {
    const filterField = Object.keys(translate);
    formattedArray = covid[region].filter((item) => {
      return filterField.some((field) => {
        return String(item.label[field]).toLowerCase().includes(word);
      });
    });
  }
  return (
    <tr>
      {covid[region] &&
        formattedArray
          .sort(sortBy(formattedArray, key, order))
          .map((item) => <Card key={item.id} data={item} />)}
    </tr>
  );
}
