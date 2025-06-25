import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({product}) => {
  return (
   <>
                 <div className="card col-3   bg-dark text-white">
                            <Link to="/single">
                            <img className="card-img-top" src={product.image} alt="Card image cap" height='250' width='90' />
                            </Link>
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
   </>
  )
}

export default ProductCard