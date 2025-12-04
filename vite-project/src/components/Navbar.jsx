import React from "react";
import "./Navbar.css";
import { FiShoppingBag } from "react-icons/fi"; 

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img
          src="/images/logo.png" 
          alt="Harley Davidson"
        />
      </div>

      <ul className="nav-links">
        <li>Hotwheels</li>
        <li>Shop</li>
        <li>Events</li>
        <li>About</li>
      </ul>

      <div className="bag">
        <FiShoppingBag  size={24} color="white"/>
      </div>
    </div>
  );
};

export default Navbar;