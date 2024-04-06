import { useState } from 'react';
import { Login_Endpoint } from '../constants';

export function Login(props) {

   const [username,setUsername] = useState('');
   const [password,setPassword] = useState('');
   const [errorMsg,setErrorMsg] = useState('');

   const handlePassword = (event) => {
        setPassword(event.target.value);
   }
   const handleUsername = (event) => {
        setUsername(event.target.value);
   }

   const handleLogin = () => {
        setErrorMsg('');
        fetch(Login_Endpoint).then(
            (res) => res.json()
        ).then((data) => {
            if(data.login === 'success') {
                props.handleLogin(true,data.username);
            }
        }
        ).catch( (e) => {
            setErrorMsg('unable to login');
        } )
   }
   
    return <div>
        <div><input type='text' onChange={handleUsername} placeholder="username"/></div>
        <div><input type='password' onChange={handlePassword} placeholder="password"/></div>
        <div><input type='button' value='login' onClick={handleLogin}/></div>
        <div>{errorMsg}</div>
    </div>
}

