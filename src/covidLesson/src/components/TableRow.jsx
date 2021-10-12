import { useData } from '../hooks/useData';

export default function TableRow({ region }) {
  const [{ lang }] = useData();
  return (
    <tr>
      <td>{region.label[lang]}</td>
      <td>
        <div>{region.confirmed}</div>
        <div>{region.delta_confirmed}</div>
      </td>
      <td>
        <div>{region.deaths}</div>
        <div>{region.delta_deaths}</div>
      </td>
      <td>
        <div>{region.recovered}</div>
        <div>{region.delta_recovered}</div>
      </td>
      <td>
        <div>{region.existing}</div>
        <div>{region.delta_existing}</div>
      </td>
    </tr>
  );
}
