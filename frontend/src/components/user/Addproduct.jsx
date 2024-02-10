import React from 'react'

const Addproduct = () => {
  return (
    <div><>
    *
    <p />
    <div className="addpro">
      <h2>Add Product</h2>
      <form action="#" method="POST">
        <label htmlFor="productName">Product Name:</label>
        <input type="text" id="productName" name="productName" required="" />

        <label htmlFor="productImage">Brand:</label>
        <input type="text" id="productColor" name="productModel" required="" />

        <label htmlFor="productDescription">Product Description:</label>
        <textarea
          id="productDescription"
          name="productDescription"
          rows={4}
          required=""
          defaultValue={""}
        />
        <label htmlFor="productPrice">Price:</label>
        <input
          type="number"
          id="productPrice"
          name="productPrice"
          step="0.01"
          required=""
        />
        <label htmlFor="productImage">model:</label>
        <input type="text" id="productModel" name="productModel" required="" />

        <label htmlFor="productImage">Color:</label>
        <input type="text" id="productColor" name="productModel" required="" />

        <label htmlFor="productPrice">Rating:</label>
        <input
          type="number"
          id="productPrice"
          name="productPrice"
          step="1-10"
          required=""
        />
        <label htmlFor="productImage">Image:</label>
        <input type="file" id="productColor" name="productModel" required="" className=' md-4 bg-warning' />

        <input type="submit" defaultValue="Add Product" />
      </form>
    </div>
    <p />
  </>
  </div>
  )
}

export default Addproduct