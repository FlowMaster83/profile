import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';


import user from '../../src/data/user.json';
import data from '../../src/data/data.json';

export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <Statistics stats={data} title/>
    </div>
  );
};
