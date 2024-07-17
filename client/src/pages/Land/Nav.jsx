import React from 'react';
import logo from '../../assets/logo.png';

const Nav = () => {
  return (
    <nav className='nav_new'>
      <div className="nav__logo">
        <a href="#"><img src={logo} alt="logo" /></a>
      </div>
      <ul className="nav__links">
        <li className="link"><a href="#">Home</a></li>
        <li className="link"><a href="#">Events</a></li>
        <li className="link"><a href="#">Contact</a></li>
        <li className="link"><a href="#">About</a></li>
      </ul>
      <button className="btn" onClick={(e)=>{window.location = '/auth'}}>Join Now</button>
    </nav>
  );
};

export default Nav;
