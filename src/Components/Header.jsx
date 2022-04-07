import React from "react";
import "./style/header.scss";
const Header = ({ logout, user }) => {
  return (
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
            <a className="user-item" href="#" onClick={logout}>
              <i class="fa-solid fa-user"></i>
              <span>{user.name}</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
