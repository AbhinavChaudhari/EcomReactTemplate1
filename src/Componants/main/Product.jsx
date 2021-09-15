import React from 'react'
import product1 from "../../img/product/product1.png"
const Product = () => {
    return (
        <>
            
        <div className="card text-center card-product">
          <div className="card-product__img">
            <img className="card-img" src={product1}alt />
            <ul className="card-product__imgOverlay">
              <li><button><i className="ti-search" /></button></li>
              <li><button><i className="ti-shopping-cart" /></button></li>
              <li><button><i className="ti-heart" /></button></li>
            </ul>
          </div>
          <div className="card-body">
            <p>Accessories</p>
            <h4 className="card-product__title"><a href="single-product.html">Quartz Belt Watch</a></h4>
            <p className="card-product__price">$150.00</p>
          </div>
        </div>
    
        </>
    )
}

export default Product
