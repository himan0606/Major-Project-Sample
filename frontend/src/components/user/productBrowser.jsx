import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const ProductBrowser = () => {

  const [productList, setProductList] = useState([]);

  const fetchProducts = async () => {
    const res = await fetch('http://localhost:5000/product/getall');
    const data = await res.json();
    console.log(data);
    setProductList(data);
  }

  useEffect(() => {
    fetchProducts();
  }, [])

  const displayProducts = () => {
    return productList.map((product, index) => (
      <div className='col-md-3'>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="https://via.placeholder.com/150"
            className="card-img-top"
            alt={product.model}
          />
          <div className="card-body">
            <h5 className="card-title">{product.brand} {product.model}</h5>
            <p className="card-text">{product.description}</p>
            <Link to={'/main/viewproduct/' + product._id} className="btn btn-primary">
              View Details
            </Link>
          </div>
        </div>
      </div>
    ))
  }


  return (
    <div>
      <header className="bg-dark text-light p-3">
        <div className="container">
          <h1>My Product Page</h1>
        </div>
      </header>
      {/* Search Bar */}
      <div className="container mt-4">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search for products"
            aria-label="Search for products"
            aria-describedby="search-btn"
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              id="search-btn"
            >
              Search
            </button>
          </div>
        </div>
      </div>
      {/* Product Card */}
      <div className="container mt-4">
        <div className="row">
          {displayProducts()}
        </div>
      </div>
    </div>
  )
}

export default ProductBrowser