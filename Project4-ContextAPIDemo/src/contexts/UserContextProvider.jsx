import React, { useState } from 'react'
import UserContext from './UserContext';

function UserContextProvider({children}) {
    const[user,setUser]=useState( { sname:'Alice'} )
    let fruit="Apple";
    let car="Audi"

    let sachin={user,fruit,car}
  return (
   
   <UserContext.Provider value={{sachin}}>
    {children}
   </UserContext.Provider>
  )
}

export default UserContextProvider
