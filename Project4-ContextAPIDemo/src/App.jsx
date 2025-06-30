import React from 'react'
import Homepage from './components/Homepage'
import UserContextProvider from './contexts/UserContextProvider'

const App = () => {
  return (
   <>
   <UserContextProvider>
    <Homepage/>
   </UserContextProvider>
   </>
  )
}

export default App