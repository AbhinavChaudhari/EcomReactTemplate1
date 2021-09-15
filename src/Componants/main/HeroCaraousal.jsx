import React from 'react'
import img  from "../../img/home/hero-slide1.png"
import img2  from "../../img/home/hero-slide2.png"
import img3  from "../../img/home/hero-slide3.png"



const HeroCaraousal = () => {
    return (
    <section className="section-margin mt-0">
  <div className="owl-carousel owl-theme hero-carousel">
    <div className="hero-carousel__slide">
      <img src={img} alt="banner" className="img-fluid" />
      <a href="#" className="hero-carousel__slideOverlay">
        <h3>Wireless Headphone</h3>
        <p>Accessories Item</p>
      </a>
    </div>
    <div className="hero-carousel__slide">
      <img src={img2} alt className="img-fluid" />
      <a href="#" className="hero-carousel__slideOverlay">
        <h3>Wireless Headphone</h3>
        <p>Accessories Item</p>
      </a>
    </div>
    <div className="hero-carousel__slide">
      <img src={img3} alt className="img-fluid" />
      <a href="#" className="hero-carousel__slideOverlay">
        <h3>Wireless Headphone</h3>
        <p>Accessories Item</p>
      </a>
    </div>
  </div>
</section>

    )
}

export default HeroCaraousal
