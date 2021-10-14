import { useData } from '../../hooks/useData';
import { sortBy } from '../../utilits/utilits';
import Card from '../Card/Card';

export default function CardList() {
  const [{ sortParams, covid, currentRegion, searchQuery, lang }] = useData();
  const { key, order } = sortParams;

  let formattedArray = [];
  const query = searchQuery
    .toLowerCase()
    .trim()
    .replaceAll(/[\s]{2,}/g, ' ')
    .split(' ');
  if (covid[currentRegion]) {
    formattedArray = covid[currentRegion].filter((region) => {
      return query.every((word) => {
        return region.label[lang].toLowerCase().includes(word);
      });
    });
  }
  return (
    <tbody>
      {formattedArray.sort(sortBy(key, order, lang)).map((item) => (
        <Card key={item.id} data={item} />
      ))}
    </tbody>
  );
}
