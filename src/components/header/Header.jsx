import React from "react";
import "./header.css";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  return (
    <header>
      <div className="hogo">
        <h1>
          Trav<span>Good</span>
        </h1>
      </div>
      <ul className="head-navbar">
        <li className={location.pathname === "/" ? "active" : ""}>
          <Link to="/">Home</Link>
        </li>
        <li className={location.pathname === "/destination" ? "active" : ""}>
          <Link to="/destination">Destinations</Link>
        </li>
        <li className={location.pathname === "/services" ? "active" : ""}>
          <Link to="/services">Services</Link>
        </li>
        <li className={location.pathname === "/about" ? "active" : ""}>
          <Link to="/about">About Us</Link>
        </li>
        <li className={location.pathname === "/contact" ? "active" : ""}>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
      <div className="bttn-header">
        <div className="bttn-left">
          <button onClick={() => (window.location.href = "/Login")}>
            Log In
          </button>
        </div>
        <div className="bttn-right">
          <button onClick={() => (window.location.href = "/Signup")}>
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
}
