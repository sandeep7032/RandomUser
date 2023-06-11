import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="title">
        <h2>Geekster</h2>
      </div>
      <div className="menu flexC">
        <a href="/home">Home</a>
        <a href="/products">Products</a>
        <a href="/users">Users</a>
        <a href="/contact">Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
