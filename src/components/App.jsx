import user from '../data/user.json';
import StatsData from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import { Profile } from './Profile/Profile';
import { StatsList } from './StatsList/StatsList';
import { Section } from './Section/Section';
import { FriendsList } from './FriendsList/FriendsList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
export const App = () => {
  const { username, tag, location, avatar, stats, id } = user;

  return (
    <>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
        id={id}
      />

      <Section title='Upload stats'>
        <StatsList StatsData={StatsData}/> 
      </Section>

    <FriendsList friends={friends}/>
    <TransactionHistory transactions={transactions}/>
    </>
    
  );
};
