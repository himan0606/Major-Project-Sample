import React from 'react'
import { Link } from 'react-router-dom'

const BrowerPlugin = () => {
  return (
    <div>
      <div className="container">
        <div className="row gy-3 my-3">
          <div className="col-md-4">
            <div className="card">
              <img src="https://img.freepik.com/premium-vector/automatic-conveyor-belt-illustration-concept-white-background_701961-1711.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1697673600&semt=ais" className="card-img-top" alt="jghjgj" />
              <div className="card-body">
                <h5 className="card-title">Product Manager Plugin</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </p>
                <Link to="/" className="btn btn-primary">
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="https://cdn.learnwoo.com/wp-content/uploads/2016/11/Adding-Products_Cropped.png" className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">Product Browser</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card" >
              <img src="https://cdni.iconscout.com/illustration/premium/thumb/secured-payment-2245534-1889494.png" className="my-img card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">PayMent Gate Way</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </p>
                <a href="/user/payment" className="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card" style={{ width: "18rem" }}>
              <img src="https://cdn.learnwoo.com/wp-content/uploads/2016/11/Adding-Products_Cropped.png" className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">Add Product</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </p>
                <a href="/user/addproduct" className="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card" style={{ width: "18rem" }}>
              <img src="https://cdn.learnwoo.com/wp-content/uploads/2016/11/Adding-Products_Cropped.png" className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">View Product</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </p>
                <a href="/user/viewproduct" className="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default BrowerPlugin