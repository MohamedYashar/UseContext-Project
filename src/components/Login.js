import React, {  useContext} from 'react'

import {LoginContext} from '../context/LoginContext'


export default function Login() {

    const {setUsername, setShowProfile} = useContext(LoginContext)
     
  return (
    <div>
        <label>User Name </label>
        <input type='text' onChange={(e)=> setUsername (e.target.value)} placeholder='username..'/> <br/><br/>

        <label>Password </label>
        <input type='password' placeholder='Password...'/><br/>
        {/* <button >Login</button> */}

   {/* SetShowProfile to be changed here as true to get the outpu */}
        <button onClick={()=> {setShowProfile (true)}}>Login</button>
        {/* { showProfile && <h1> {username}</h1>} */}
      
    </div>
  )
}
