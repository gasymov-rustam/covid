import { useData } from "../../hooks/useData";
import { createSum } from "../../utilits/utilits";
import Card from "../Card/Card";

export default function CardList() {
  const [{ covid, region, searchQuery, lang }] = useData();

  let formattedArray = [];
  const word = searchQuery
    .trim()
    .toLowerCase()
    .split(" ")
    .filter((word) => !!word)
    .splice(0, 1)
    .join("");
  console.log(word);
  if (covid[region]) {
    formattedArray = covid[region].filter((item) => {
      return String(item.label[lang]).toLowerCase().includes(word);
    });
  }
  console.log(formattedArray);
  return (
    <tbody>
      {covid[region] && covid[region].map((item) => <Card key={item.id} data={item} />)}
    </tbody>
  );
}
