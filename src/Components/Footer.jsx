import React from "react";
import "./style/footer.scss";
const Footer = () => {
  return (
    <footer class="footer">
      <div class="container footer__container">
        <div class="footer__item">
          <h2>About Us</h2>
          <a href="index.html" class="logo">
            <img
              src="https://slidesigma.nyc/templatemonster/angular/petco/assets/img/logo.png"
              alt=""
            />
          </a>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </p>
        </div>
        <div class="footer__item">
          <h2>Useful Links</h2>
          <a href="#" class="footer__link">
            Home
          </a>
          <a href="#" class="footer__link">
            About Us
          </a>
          <a href="#" class="footer__link">
            Blog
          </a>
          <a href="#" class="footer__link">
            Donation
          </a>
          <a href="#" class="footer__link">
            Story
          </a>
        </div>
        <div class="footer__item">
          <h2>My Account</h2>
          <a href="#" class="footer__link">
            Login
          </a>
          <a href="#" class="footer__link">
            Signup
          </a>
          <a href="#" class="footer__link">
            Wishlist
          </a>
          <a href="#" class="footer__link">
            Checkout
          </a>
          <a href="#" class="footer__link">
            Cart
          </a>
        </div>
        <div class="footer__item">
          <h2>Other Links</h2>
          <a href="#" class="footer__link">
            Donation Detail
          </a>
          <a href="#" class="footer__link">
            Story Detail
          </a>
          <a href="#" class="footer__link">
            Track Order
          </a>
          <a href="#" class="footer__link">
            Blog
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
