import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => (
  <div className="container">
    <h1>Math Magicians</h1>
    <div className="navbar">
      <div className="nav-item">
        <Link to="/"> Home</Link>
      </div>
      <span className="nav-item">|</span>
      <div className="nav-item">
        <Link to="/calculator">Calculator</Link>
      </div>
      <span className="nav-item">|</span>
      <div className="nav-item">
        <Link to="/quote">Quote</Link>
      </div>
    </div>
  </div>
);

export default Navbar;
