import React from "react";
import "./home.scss";
import { dataAnimal } from "./../data";

const Home = () => {
  return (
    <div className="wrapper">
      <header className="header">
        <div className="container">
          <div className="navbar">
            <div className="navbar__logo">
              <img
                src="https://slidesigma.nyc/templatemonster/angular/petco/assets/img/logo1.png"
                alt=""
              />
            </div>
            <div className="navbar__menu">
              <ul className="main-menu">
                <li className="menu-item">
                  <a href="#" className="text-item">
                    Home
                  </a>
                </li>
                <li className="menu-item">
                  <a href="#" className="text-item">
                    About
                  </a>
                </li>
                <li className="menu-item">
                  <a href="#" className="text-item">
                    Shop
                  </a>
                </li>
                <li className="menu-item">
                  <a href="#" className="text-item">
                    Pages
                  </a>
                </li>
                <li className="menu-item">
                  <a href="#" className="text-item">
                    Blog
                  </a>
                </li>
                <li className="menu-item">
                  <a href="#" className="text-item">
                    Story
                  </a>
                </li>
              </ul>
            </div>
            <div className="navbar__user">
              <a className="user-item" href="#">
                <i class="fa-solid fa-user"></i>
                <span>Hi, Auto</span>
              </a>
            </div>
          </div>
        </div>
      </header>
      <div className="animal__list">
        <div className="container">
          <div className="animal">
            {dataAnimal.map((item) => (
              <div className="animal__details">
                <img src={item.img} alt={item.name} srcset="" />
                <div className="name-animal">
                  <h6>{item.name}</h6>
                </div>
                <div className="title-animal">
                  <h3>{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
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
    </div>
  );
};

export default Home;
