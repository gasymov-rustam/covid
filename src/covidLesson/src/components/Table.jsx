import { useData } from '../hooks/useData';
import TableHead from './TableHead';
import TableRow from './TableRow';

export default function Table() {
  const [{ covid, region }] = useData();

  return (
    <table>
      <TableHead />
      <tbody>{covid[region] && covid[region].map(item => <TableRow key={item.id} region={item}/>)}</tbody>
    </table>
  );
}
