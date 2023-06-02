import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <div className="distinct-component">
      <div className="container">
        <div className="header-top">
          <img className="header-top_logo" src={Logo} alt="" />

          <ul className="header-menu">
            <Link className="header-menu_link" to="/trips">
              Trips
            </Link>
            <Link className="header-menu_link" to="/services">
              Services
            </Link>
            <Link className="header-menu_link" to="/booking">
              Booking
            </Link>
            <Link className="header-menu_link" to="/about">
              About Us
            </Link>
            <Link className="header-menu_link" to="/signin">
              Sign In
            </Link>
            <Link className="orange-btn" to="/signup">
              Sign Up
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
