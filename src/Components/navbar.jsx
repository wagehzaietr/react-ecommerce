import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import NavLinks from "./NavLinks"


export const Navbar = () => {
  return (
      <NavLinks/>
  );
};


{/* <Link to="/"> Shop </Link>
<Link to="/contact"> Contact </Link>
<Link to="/cart">
  <ShoppingCart size={32} />
</Link> */}