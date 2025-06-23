import React from 'react'
import './Navlist.css'
const Navlist = (props) => {
  return (
   <div>
     <ol>
    {props.list.map(
        (item,index)=><li key={index} onClick={()=>props.handleClick({item})}>{item}</li>
    )}
  </ol>
   </div>
  )
}

export default Navlist