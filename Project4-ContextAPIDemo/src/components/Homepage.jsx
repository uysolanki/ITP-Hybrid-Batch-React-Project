import React, { useContext } from 'react'
import UserContext from '../contexts/UserContext'

const Homepage = () => {
     const {user}=useContext(UserContext)
  return (
    <>
        Welcome ,  {user}  
    </>
  )
}

export default Homepage