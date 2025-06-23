import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SearchBar from '../components/SearchBar'
import Navlist from '../components/Navlist'
import Navbar from '../components/Navbar'

const ShowProducts = () => {

    const [products,setProducts]=useState([])
    const [buproducts,setBuproducts]=useState([])
    async function loadData()
    {
            try
            {
             const jsObjectsFetchFromBeServer= await axios.get('http://localhost:8087/products/getAllProducts');
             console.log(jsObjectsFetchFromBeServer.data)
             setProducts(jsObjectsFetchFromBeServer.data)
             setBuproducts(jsObjectsFetchFromBeServer.data)

             
            }
            catch(error)
            {
                console.log(error)
            }
    }

    const allCats=buproducts.map(
             (product)=>product.category
             )
            // console.log(allCats)
            const uniqueCats=new Set(allCats)
     const allDisplayCategoreis=[...uniqueCats,'All']
    useEffect(
        ()=>{
        loadData()
        },[]
    )

    

    function filterProductsByTitle(event){
               let value=event.target.value;
               console.log(value);
                // if(value!='')
                // {
                    const searchedProduct=buproducts.filter(
                        (prod)=>prod.title.toLowerCase().includes(value.toLowerCase())
                    )
                    setProducts(searchedProduct)
                // }
                // else{
                //     setProducts(buproducts)
                // }
            }
        function filterProductsByCategory(categoryValue)
            {
              //console.log('Category Value ' ,categoryValue)
              const filteredProds=buproducts.filter(
                (prod)=>prod.category==categoryValue.item
              )
               //console.log(filteredProds)
               if(categoryValue.item==='All')
                setProducts(buproducts)
               else
               setProducts(filteredProds)
            }

  return (
   <>
    <SearchBar handleOnChange={filterProductsByTitle}/>
    <Navlist list={allDisplayCategoreis} handleClick={filterProductsByCategory}/>
    <Navbar list={allDisplayCategoreis} handleClick={filterProductsByCategory}/>
    <div className='row m-2  0-0 justify-content-evenly gap-3 '>
            {
                products.map(
                    (product,index) => {
                        return <div key={index} className="card col-3   bg-dark text-white">
                            <img className="card-img-top" src={product.image} alt="Card image cap" height='250' width='90' />
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text">{product.description}</p>
                                <p className="card-text">{product.category}</p>
                                <p className="card-text">{product.price}</p>
                                {/* <p className="card-text">{product.rating.rate}</p> */}
                                <div className="d-flex justify-content-center"> 
                                <a href="#" className="btn btn-primary">Shop Now</a>
                                </div>
                            </div>
                        </div>

                    }
                )
            }




        </div>
    </>
  )
}

export default ShowProducts