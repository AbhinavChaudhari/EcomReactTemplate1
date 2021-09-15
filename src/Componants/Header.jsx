import React from 'react'
import logo from '../img/logo.png'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
const Header = () => {
    return (
 
        <header className="header_area">
          <div className="main_menu">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container">
                <Link className="navbar-brand logo_h" to="/"><img src={logo} alt="imgage" /></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
                <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                  <ul className="nav navbar-nav menu_nav ml-auto mr-auto">
                    <li className="nav-item active">
                      <Link className="nav-link" to={"/"}>Home</Link>
                      </li>
                    <li className="nav-item submenu dropdown">
                      <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Shop</a>
                      <ul className="dropdown-menu">
                        <li className="nav-item"><Link className="nav-link" to="/category">Shop Category</Link></li>

                        <li className="nav-item">
                          <Link className="nav-link"
                           to="/single">Product Details</Link>
                          </li>
                        <li className="nav-item">
                          <Link className="nav-link" href="/checkout">Product Checkout</Link>
                          </li>
                        <li className="nav-item"><Link className="nav-link" to="/confirmation">Confirmation</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/cart">Shopping Cart</Link></li>
                      </ul>
                    </li>
                
                    <li className="nav-item submenu dropdown">
                      <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Pages</a>
                      <ul className="dropdown-menu">
                        <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/register">Register</Link></li>
                       
                      </ul>
                    </li>
                    <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
                  </ul>
                  <ul className="nav-shop">
                    <li className="nav-item"><button><i className="ti-search" /></button></li>
                    <li className="nav-item"><Link to="/cart"> <button> <i className="ti-shopping-cart" /><span className="nav-shop__circle">3</span></button></Link> </li>
                    <li className="nav-item"><Link className="button button-header" to="/login">Login</Link></li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </header>
      
    )
}

export default Header
