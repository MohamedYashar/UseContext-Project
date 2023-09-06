import { useState } from 'react';
import './App.css';
import Login from './components/Login';
import Profile from './components/Profile';
import {LoginContext} from './context/LoginContext'

function App() {

  const [showProfile, setShowProfile] = useState(false);
  const [username, setUsername] = useState("");

  return (
    <div className="App">
      
      <h1> Welcome to React App</h1>
      <LoginContext.Provider  value = {{username, setUsername, setShowProfile}} >
      { showProfile ? <Profile/> : <Login/>}
      </LoginContext.Provider>  
  
    </div>
  );
}

export default App;
