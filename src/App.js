import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import UserData from './Components/UserData/UserData';
import UserList from './Components/UsersLists/UserList';
import { useState } from 'react';

function App() {
  const [data, setData] = useState(null)

  const getUserInformation = (userInfo) => {
    setData(userInfo)
  }




  return (
    <div className="App">
      <Header />
      <UserData onSaveData={getUserInformation} />
      <UserList data={data} />
    </div>
  );
}

export default App;
