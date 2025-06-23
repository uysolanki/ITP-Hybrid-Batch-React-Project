import React from 'react'

const SearchBar = (props) => {
  return (
   <input type='text' onChange={props.handleOnChange}/>
  )
}

export default SearchBar