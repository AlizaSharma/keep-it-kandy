import React from 'react';
import 'bulma/css/bulma.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Navbar() {
  return (
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item">
      <img src="./assets/image5.jpg" width="55" height="600" alt=""/>
    </a>
    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>
  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item" href="#">Explore</a>
      <a class="navbar-item" href="#">Shop</a>
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">More</a>
        <div class="navbar-dropdown">
          <a class="navbar-item" href="#">Candy</a>
          <a class="navbar-item" href="#">Chocolate</a>
          <a class="navbar-item" href="#">Contact Us</a>
        </div>
      </div>
    </div>
    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-info is-light">
            <strong>Sign In</strong>
          </a>
          <a class="button is-light">Log in</a>
        </div>
      </div>
    </div>
  </div>
</nav>

   
  );
}

export default Navbar;


  