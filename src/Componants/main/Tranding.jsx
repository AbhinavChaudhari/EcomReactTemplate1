import React from 'react'
import Product from './Product'



const Tranding = () => {
  return (
    <section className="section-margin calc-60px">
      <div className="container">
        <div className="section-intro pb-60px">
          <p>Popular Item in the market</p>
          <h2>Trending <span className="section-intro__style">Product</span></h2>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-4 col-xl-3">
            <Product />
          </div>   <div className="col-md-6 col-lg-4 col-xl-3">
            <Product />
          </div>   <div className="col-md-6 col-lg-4 col-xl-3">
            <Product />
          </div>   <div className="col-md-6 col-lg-4 col-xl-3">
            <Product />
          </div>   <div className="col-md-6 col-lg-4 col-xl-3">
            <Product />
          </div>   <div className="col-md-6 col-lg-4 col-xl-3">
            <Product />
          </div>   <div className="col-md-6 col-lg-4 col-xl-3">
            <Product />
          </div>   <div className="col-md-6 col-lg-4 col-xl-3">
            <Product />
      
          </div>
        </div>
      </div>
    </section>

  )
}

export default Tranding
