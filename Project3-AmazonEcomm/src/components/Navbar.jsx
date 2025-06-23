import React from 'react'
import './Navbar.css'
const Navbar = (props) => {
  return (
    <>
   
  <ul>
    {props.list.map(
        (item,index)=><li key={index} onClick={()=>props.handleClick({item})}>{item}</li>
    )}
  </ul>
  </>
  )
}

export default Navbar