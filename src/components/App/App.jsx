import Description from '../Description/description';
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';
import Test from '../Test/Test';
import Profile from '../Profile/Profile';
import FriendList from '../FriendList/FriendList';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import option from '../../option.json';
import userData from '../../userData.json';
import friends from '../../friends.json';
import transactions from '../../transactions.json';

export default function App() {
  return (
    <div>
      <Description />
      <Options 
        good={option.good}
        neutral={option.neutral}
        bad={option.bad}
      />
      <Feedback />
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
      <Test />
    </div>
  )
}
