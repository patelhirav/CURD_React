import React from 'react';
import UserList from './components/UserList';
import CreateUser from './components/CreateUser';
import './App.css'

function App() {
  return (
    <div className="App">
      <h1>CURD Operation</h1>
      <CreateUser />
      <UserList />
    </div>
  );
}

export default App;
