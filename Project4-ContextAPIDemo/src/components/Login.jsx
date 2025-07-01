import React, { useContext, useState } from 'react'
import './Login.css'
import UserContext from '../contexts/UserContext'

const Login = () => {
   const[username,setUsername] =useState('')
   const[password,setPassword] =useState('')
  
   console.log('Username' ,username)

    const {setUser}=useContext(UserContext)
    
   function handleSubmit(e)
   {
    e.preventDefault()
    setUser(username)
   }
  return (
    <>
        <form>
            <input type="text"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            ></input>
            <input type="text"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            ></input>
            <input type="submit" value="Login" onClick={handleSubmit}/>
        </form>
    </>
  )
}

export default Login