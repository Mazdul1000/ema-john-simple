import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import './Header.css'


const Header = () => {
  return (
    <nav className='nav'>
      <img src={logo} alt="" />
      <div>
        <Link to='/shop'>Shop</Link>
        <Link to='/orders'>Order Review</Link>
        <Link to='/inventory'>Inventory</Link>

        <Link to='/about'>About</Link>
        <Link to='/login'>Log In</Link>
      </div>
    </nav>
  );
};

export default Header;