import React from 'react'
import './Menubar.css'
import { Link } from 'react-router-dom'

const Menubar = () => {
  return (
   <ul>
        <Link to="/"><li>Home</li></Link>
        <Link to="/allproducts"><li>Products</li></Link>
        <Link to="/addproduct"><li>Add Product</li></Link>
    </ul>
  )
}

export default Menubar