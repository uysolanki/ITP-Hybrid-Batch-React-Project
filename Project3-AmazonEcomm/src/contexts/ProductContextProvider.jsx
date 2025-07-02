import React, { useState } from "react"
import ProductContext from "./ProductContext"
import { useEffect } from "react"
import axios from "axios"



function ProductContextProvider({children}) 
{
     const[products,setProducts]=useState([])
     const[loading,setLoading]=useState(true)
 
     useEffect(
             ()=>{
             loadData()
             },[]
         )

          async function loadData()
            {
            try
            {
             const jsObjectsFetchFromBeServer= await axios.get('http://localhost:8087/products/getAllProducts');
             console.log(jsObjectsFetchFromBeServer.data)
             setProducts(jsObjectsFetchFromBeServer.data)
             setLoading(false)
            }
            catch(error)
            {
                console.log(error)
            }
    }

    let fruit="Apple"
    let car="Audi"
    function greet()
    {
        alert('Hello')
    }
   
    const contextValue = {
    products,
    loading
    };

  return (
   
   <ProductContext.Provider value={contextValue}>
    {children}
   </ProductContext.Provider>
  )
}


export default ProductContextProvider