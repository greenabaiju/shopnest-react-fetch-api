import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import {  FaBagShopping } from "react-icons/fa6";


const Navbar = () => {
  return (
    <section className="shopmenu">

      <h1>
        <FaBagShopping/>
       Shop<span>Nest</span>
      </h1>

      <nav>
        <Link className="links" to="/">Home</Link>
        <Link className="links" to="/product">Product</Link>
        <Link className="links" to="/contact">Contact</Link>
      </nav>
      <Link to="/product">
        <button>Shop Now</button>
      </Link>

    </section>
  );
};

export default Navbar;