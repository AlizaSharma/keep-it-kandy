import React from 'react';
import 'bulma/css/bulma.min.css';

function Navbar() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div id="navbar" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" href="#explore">
            <span className="icon">
              <i className="fas fa-user"></i>
            </span>
            <span>Explore</span>
          </a>
          <a className="navbar-item" href="#candy">
            <span className="icon">
              <i className="fas fa-briefcase"></i>
            </span>
            <span>Candy</span>
          </a>
          <a className="navbar-item" href="#chocolate">
            <span className="icon">
              <i className="fas fa-briefcase"></i>
            </span>
            <span>Chocolate</span>
          </a>
          <a className="navbar-item" href="#create">
            <span className="icon">
              <i className="fas fa-envelope"></i>
            </span>
            <span>Create Account</span>
          </a>
          <a className="navbar-item" href="#logt">
            <span className="icon">
              <i className="fas fa-envelope"></i>
            </span>
            <span>Log In</span>
          </a>
          <a className="navbar-item" href="#contact">
            <span className="icon">
              <i className="fas fa-envelope"></i>
            </span>
            <span>Contact Us</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;