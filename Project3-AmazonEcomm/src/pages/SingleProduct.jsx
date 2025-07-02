import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import axios from 'axios'
import { useContext } from 'react';
import ProductContext from '../contexts/ProductContext';
const SingleProduct = () => {
     const { id } = useParams();

    const {products, loading} = useContext(ProductContext);

     const[product,setProduct]=useState({})
     useEffect(
             ()=>{
             loadData()
             },[id]
         )

          function loadData()
            {
              const singleProduct=products.find((prod)=>prod.id==id)
              setProduct(singleProduct)
            }

  return (
   <>
             <ProductCard product={product}/>
   </>
  )
}

export default SingleProduct