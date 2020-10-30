import React from "react";
import Profile from "./Components/Profile/Profile";
import Statistics from "./Components/Statistics/Statistics";
import FriendList from "./Components/FriendList/FriendList";
import TransactionHistory from "./Components/TransactionHistory/TransactionHistory";
import user from "./db/user.json";
import stats from "./db/statistical-data.json";
import friends from "./db/friends.json";
import transactions from "./db/transactions.json";
import "./App.css";

function App() {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={stats} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
