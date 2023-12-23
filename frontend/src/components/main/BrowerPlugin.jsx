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
              <img src="https://img.freepik.com/premium-vector/e-commerce-product-catalog-web-browser_77235-18.jpg?w=2000" className="card-img-top" alt="" />
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
              <img src="https://img.freepik.com/premium-vector/payment-gateway-flat-illustration-is-up-premium-use_203633-2998.jpg?w=2000" className="my-img card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">PayMent Gate Way</h5>
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
            <div className="card" style={{ width: "18rem" }}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_esrDvnxkgmrbGUO-Y-7mB9cp1wyWjqOX_6aJMX5wLAYGJy5aqPZDuURTdXog3y3vRro&usqp=CAU" className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
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
            <div className="card" style={{ width: "18rem" }}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr7WiXEoi_G3ZYALSjWyH9SHSTVToIdwVKap1oVSHLUZZIlRdIt99FnnsxQLGoeNo1Vmg&usqp=CAU" className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
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
        </div>
      </div>
    </div>

  )
}

export default BrowerPlugin