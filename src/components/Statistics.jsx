import { Stats } from './Stats';
import data from '../../src/data/data.json';

export const Statistics = ({ label, percentage }) => {
  return (
    <ul>
      {data.map(item => (
        <li key={item.id}>
          <Stats stats={label} />
          <Stats stats={percentage} />
        </li>
      ))}
    </ul>
  );
};
