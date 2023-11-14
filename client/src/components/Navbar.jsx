import React from "react";
import "bulma/css/bulma.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";

import auth from "../utils/auth";

function Navbar() {
  const loggedIn = auth.loggedIn();
  const logout = (event) => {
    event.preventDefault();
    auth.logout();
  };
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item">
          <span className="icon is-large">
            <i className="fas fa-flag-checkered"></i>
          </span>
        </a>
        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" href="/Shop">
            Shop
          </a>
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">More</a>
            <div className="navbar-dropdown">
              <a className="navbar-item" href="/Contact">
                Contact Us
              </a>
            </div>
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            {loggedIn ? (
              <div className="buttons">
                <button className="button is-light" onClick={logout}>
                  Log Out
                </button>
              </div>
            ) : (
              <div className="buttons">
                <Link to="/login">
                  <button className="button is-light">Log in</button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
