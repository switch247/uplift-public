import React from 'react';
import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <>
      <footer className="section__container footer__container">
        <span className="bg__blur"></span>
        <span className="bg__blur footer__blur"></span>
        <div className="footer__col">
          <div className="footer__logo"><img src={logo} alt="logo" /></div>
          <p>
            Take the first step towards a healthier, stronger mind with our supportive and accessible mental health services. Connect, grow, and thrive with us!
          </p>
          <div className="footer__socials">
            <a href="#"><i className="ri-facebook-fill"></i></a>
            <a href="#"><i className="ri-instagram-line"></i></a>
            <a href="#"><i className="ri-twitter-fill"></i></a>
          </div>
        </div>
        <div className="footer__col">
          <h4>Company</h4>
          <a href="#">Our Mission</a>
          <a href="#">Partnerships</a>
          <a href="#">Network</a>
          <a href="#">Join Us</a>
        </div>
        <div className="footer__col">
          <h4>About Us</h4>
          <a href="#">Blogs</a>
          <a href="#">Security</a>
          <a href="#">Careers</a>
        </div>
        <div className="footer__col">
          <h4>Contact</h4>
          <a href="#">Contact Us</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Support</a>
        </div>
      </footer>
      <div className="footer__bar">
        Copyright © 2023 Uplift Connect. All rights reserved.
      </div>
    </>
  );
};

export default Footer;
