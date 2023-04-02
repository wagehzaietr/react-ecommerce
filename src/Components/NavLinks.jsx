import React from 'react'
import Logo from "../../public/logo.png";
import { ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";
import '../Components/navbar.css';

const NavLinks = () => {
  return (
    <>
      <div
        className="navbar navbar-expand-lg navbar-light bg-light"
        id="Navbar"
      >
        <div className="container">
          <img src={Logo} alt="" width="80px" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="#">
              <Link to="/" className='link'> Home </Link>
              </a>
              <a className="nav-link">
              <Link to="/shop" className='link'> Shop </Link>
              </a>
              <a className="nav-link" href="#">
                Pricing
              </a>
            </div>
          </div>
              <Link to='/cart' >
                <ShoppingCart size={28} color="#000000eb" className='cart'/>
              </Link>
        </div>
      </div>
    </>
  );
};

export default NavLinks;

{
  /* <Link to="/"> Shop </Link>
<Link to="/contact"> Contact </Link>
<Link to="/cart">
  <ShoppingCart size={32} />
</Link> */
}