import React from "react";
import "./Navbar.css";
import {Link} from "react-router-dom"


const Navbar = () => {
 
 
  return (
    <nav className="nav">
    <input type="checkbox" id="nav-check" />
      <Link to="/">
        <div className="logo">
          <img className="img-logo" src="./images/logo/Vector.png" alt="" />
          <img
            className="img-logo-name"
            src="./images/logo/Vector (1).png"
            alt=""
          />
        </div>
        </Link>
        <div className="nav-btn">
        <label htmlFor="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
      <div className="nav-links">
        <ul>
          <li className="active">
            <a href="/">
              Home
            </a>
          </li>
          <li>
            <a href="/#">
              About
            </a>
          </li>
          <li>
            <a href="/#">
              Resume
            </a>
          </li>
          <li>
            <a href="/#">
              Portfolio
            </a>
          </li>
          <li>
            <a href="/#">
              Contact
            </a>
          </li>
        </ul>
      
      </div>
     
    </nav>
  );
};
export default Navbar;