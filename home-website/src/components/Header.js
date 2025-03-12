import React from 'react';
// import './Header.css';
import logo from './images/logo.png'

const Header = () => (
  <header>
    <img src={logo} alt="Bakery Logo" />
    
    <h1>Fresh Bakes Bakery</h1>
  </header>
);

export default Header;