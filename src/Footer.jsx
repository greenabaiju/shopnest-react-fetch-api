import React from "react";
import "./footer.css";
import {  FaBagShopping } from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div>

      <footer className="footer">

        <div>
          <h2><FaBagShopping/>
             Shop<span>Nest</span>
          </h2>

          <p>
            Your simple destination for quality products, great prices and
            easy shopping.
          </p>

          <div className="social">
            <span><FaFacebookF /></span>
            <span><FaTwitter /></span>
            <span><FaInstagram /></span>
          </div>
        </div>

        <div>
          <h3>CONTACT</h3>

          <p>Email: support@shopnest.com</p>
          <p>Phone: +91 98765 43210</p>
        </div>

      </footer>

      <div className="copyright">
        © 2026 ShopNest. All rights reserved.
      </div>

    </div>
  );
};

export default Footer;