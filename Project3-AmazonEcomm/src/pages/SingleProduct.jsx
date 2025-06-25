import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import axios from 'axios'
const SingleProduct = () => {
     const { id } = useParams();
     const[product,setProduct]=useState({})
     useEffect(
             ()=>{
             loadData()
             },[]
         )

          async function loadData()
            {
            try
            {
             const jsSingleProductServer= await axios.get(`http://localhost:8087/products/${id}`);
             console.log(jsSingleProductServer.data)
             setProduct(jsSingleProductServer.data)  
            }
            catch(error)
            {
                console.log(error)
            }
    }


  return (
   <>
             <ProductCard product={product}/>
   </>
  )
}

export default SingleProduct