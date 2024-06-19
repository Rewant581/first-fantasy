import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-brand">IPL11</Link>
      </div>
      <div className={`navbar-right ${isOpen ? 'active' : ''}`}>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/Howtoplay" className="nav-link">Features</Link>
        <Link to="/faqs" className="nav-link">Contact Us</Link>
        <Link to="/user-says" className="nav-link">User</Link>
        <a href="#download" className="nav-button download-button">Download App</a>
      </div>
      <div className="navbar-toggle" onClick={toggleNavbar}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
