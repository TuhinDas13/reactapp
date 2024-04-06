import './App.css';
import { Login } from './login/login';
import { Home } from './home/home';
import { useState } from 'react';

function App() {

  const [isSessionAuthenticated,setIsSessionAuthenticated] = useState(false);
  const [username,setUsername] = useState('');

  const handleLogin = (isAuth, username) => {
    setIsSessionAuthenticated(isAuth);
    setUsername(username);
  }
  return (
    <div className="App">
      {!isSessionAuthenticated ? 
      <Login handleLogin={handleLogin}/> : 
      <Home handleLogin={handleLogin} username={username}/>}
    </div>
  );
}

export default App;
