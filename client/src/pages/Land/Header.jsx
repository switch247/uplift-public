import React from 'react';
import headerImg from '../../assets/header.png';
const Header = () => {
  return (
    <header className="section__container header__container">
      <div className="header__content">
        <span className="bg__blur"></span>
        <span className="bg__blur header__blur"></span>
        <h4>UPLIFT YOUR MENTAL HEALTH</h4>
        <h1><span>MAKE</span> YOUR FUTURE TODAY</h1>
        <p>
          Unlock your potential and embark on a journey towards mental wellness and resilience. Sign up for 'Uplift' now and experience the profound transformation that professional guidance and support can bring to your life!
        </p>
        <button className="btn">Get Started</button>
      </div>
      <div className="header__image">
        <img src={headerImg} alt="header" />
      </div>
    </header>
  );
};

export default Header;
