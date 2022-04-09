import React from "react";
import "../style/footer.scss";
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__item">
          <h2>About Us</h2>
          <Link to="#" className="logo">
            <img
              src="https://slidesigma.nyc/templatemonster/angular/petco/assets/img/logo.png"
              alt=""
            />
          </Link>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </p>
        </div>
        <div className="footer__item">
          <h2>Useful Links</h2>
          <Link to="#" className="footer__link">
            Home
          </Link>
          <Link to="#" className="footer__link">
            About Us
          </Link>
          <Link to="#" className="footer__link">
            Blog
          </Link>
          <Link to="#" className="footer__link">
            Donation
          </Link>
          <Link to="#" className="footer__link">
            Story
          </Link>
        </div>
        <div className="footer__item">
          <h2>My Account</h2>
          <Link to="#" className="footer__link">
            Login
          </Link>
          <Link to="#" className="footer__link">
            Signup
          </Link>
          <Link to="#" className="footer__link">
            Wishlist
          </Link>
          <Link to="#" className="footer__link">
            Checkout
          </Link>
          <Link to="#" className="footer__link">
            Cart
          </Link>
        </div>
        <div className="footer__item">
          <h2>Other Links</h2>
          <Link to="#" className="footer__link">
            Donation Detail
          </Link>
          <Link to="#" className="footer__link">
            Story Detail
          </Link>
          <Link to="#" className="footer__link">
            Track Order
          </Link>
          <Link to="#" className="footer__link">
            Blog
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
