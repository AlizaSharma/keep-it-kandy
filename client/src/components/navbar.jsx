import React, { Component } from 'react';
import './navbar.css';

export default class Navbar extends Component {
  state = {
    activeItem: 'home'
  };

  handleItemClick = (name) => {
    this.setState({ activeItem: name });
  };

  render() {
    const { activeItem } = this.state;

    return (
      <div className="navbar">
        <div className="navbar-item">
          <img className="navbar-logo" alt="logo" src="https://fedandfit.com/wp-content/uploads/2019/10/Halloween-Candy-Fed-and-Fit-3.jpg" />
        </div>

        <div className="navbar-item" onClick={() => this.handleItemClick('home')}>
          <a href="/" className='link'>Home</a>
        </div>

        <div className="navbar-item" onClick={() => this.handleItemClick('store')}><a href="/store" className='link'>Store</a>
        </div>

        <div className="navbar-item" onClick={() => this.handleItemClick('sign-in')}><a href="/signin" className='link'>Sign-in</a>
        </div>

        <div className="navbar-item" onClick={() => this.handleItemClick('sign-up')}><a href="/signup" className='link'>Sign-up</a>
        </div>

        <div className="navbar-item" onClick={() => this.handleItemClick('cart')}><a href="/cart" className='link'>Cart    </a>
        </div>
    
        </div>
      );
    }
  }
