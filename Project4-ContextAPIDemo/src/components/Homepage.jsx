import React, { useContext } from 'react'
import UserContext from '../contexts/UserContext'

const Homepage = () => {
    const {sachin}=useContext(UserContext)
  return (
    <>
        <h1>Hi {sachin.fruit}</h1>
    </>
  )
}

export default Homepage