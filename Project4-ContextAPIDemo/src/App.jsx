import React from 'react'
import Homepage from './components/Homepage'
import UserContextProvider from './contexts/UserContextProvider'
import Login from './components/Login'

const App = () => {
  return (
   <>
   <UserContextProvider>
    <Login/>
    <Homepage/>
   </UserContextProvider>
   </>
  )
}

export default App