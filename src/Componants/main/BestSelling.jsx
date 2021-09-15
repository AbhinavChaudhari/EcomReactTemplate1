import React from 'react'
import Product from './Product'

const BestSelling = () => {
    return (
        <>
<section className="section-margin calc-60px">
  <div className="container">
    <div className="section-intro pb-60px">
      <p>Popular Item in the market</p>
      <h2>Best <span className="section-intro__style">Sellers</span></h2>
    </div>
    <div className="owl-carousel owl-theme" id="bestSellerCarousel">
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
    </div>
  </div>
</section>

        </>
    )
}

export default BestSelling
