import React from 'react'

const Viewproduct = () => {
  return (
    <div><>
    
    <p />
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61SEbQm6zUL.jpg"
            className="img-fluid"
            alt="Product Image"
          />
        </div>
        <div className="col-md-6">
          <h2>Product Name</h2>
          <p className="text-muted">Product Description goes here.</p>
          <h3 className="text-primary">Brand</h3>
          <h3 className="text-danger">Model</h3>
          <h3 className="text-primary">Price</h3>
          <h3 className="text-primary">Color</h3>
          <h3 className="text-primary">Rating</h3>
          <hr />
          <div className="form-group">
            <label htmlFor="quantity">Quantity:</label>
            <input
              type="number"
              className="form-control"
              id="quantity"
              min={1}
              defaultValue={1}
            />
          </div>
          <button className="btn btn-primary btn-lg">Add to Cart</button>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col">
          <h3>Product Details</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            condimentum tortor odio, at venenatis velit ultricies in.
          </p>
          <p>More details...</p>
        </div>
      </div>
    </div>
    <p />
  </>
  </div>
  )
}

export default Viewproduct