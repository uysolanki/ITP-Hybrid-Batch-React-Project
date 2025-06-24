import React from 'react'

const AddProduct = () => {

  function handleSubmit()
  {
    alert ('Form Submitted')
  }
  return (
   <>
    <form onSubmit={handleSubmit}>

        <div>
          <label htmlFor="title">Product Title</label>
          <input
            type="text"
            name="title"
            id="title"/>
        </div>

        <div>
          <label htmlFor="price">Product Price</label>
          <input
            type="text"
            name="price"
            id="price"/>
        </div>

        <div>
          <label htmlFor="description">Product Description</label>
          <input
            type="text"
            name="description"
            id="description"/>
        </div>

        <div>
          <label htmlFor="category">Product Category</label>
          <input
            type="text"
            name="category"
            id="category"/>
        </div>

        <div>
          <label htmlFor="image">Product Image</label>
          <input
            type="text"
            name="image"
            id="image"/>
        </div>
        <div className="button-group">
          <button type="submit">Register</button>
          <button type="button">Cancel</button>
        </div>
    </form>
   </>
  )
}

export default AddProduct