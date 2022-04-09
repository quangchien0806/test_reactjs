import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/header.scss";
const Header = ({ logout }) => {
  const [menu, setMenu] = useState(false);

  const showMenu = () => setMenu(!menu);
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
                <Link to="#" className="text-item">
                  Home
                </Link>
              </li>
              <li className="menu-item">
                <Link to="#" className="text-item">
                  About
                </Link>
              </li>
              <li className="menu-item">
                <Link to="#" className="text-item">
                  Shop
                </Link>
              </li>
              <li className="menu-item">
                <Link to="#" className="text-item">
                  Pages
                </Link>
              </li>
              <li className="menu-item">
                <Link to="#" className="text-item">
                  Blog
                </Link>
              </li>
              <li className="menu-item">
                <Link to="#" className="text-item">
                  Story
                </Link>
              </li>
            </ul>
          </div>
          <div className="navbar__user">
            <Link className="user-item" to="#" onClick={logout}>
              <i className="fa-solid fa-user"></i>
              <span>{localStorage.getItem("name")}</span>
            </Link>
            <button
              className={menu ? "menu-btn active" : "menu-btn"}
              onClick={showMenu}
            >
              <span className="icon-menu"></span>
              <span className="icon-menu"></span>
              <span className="icon-menu"></span>
            </button>
          </div>

          <div
            className={
              menu ? "navbar__menu-mobile active" : "navbar__menu-mobile"
            }
          >
            <ul className="main-menu">
              <li className="menu-item">
                <Link to="#" className="text-item">
                  Home
                </Link>
              </li>
              <li className="menu-item">
                <Link to="#" className="text-item">
                  About
                </Link>
              </li>
              <li className="menu-item">
                <Link to="#" className="text-item">
                  Shop
                </Link>
              </li>
              <li className="menu-item">
                <Link to="#" className="text-item">
                  Pages
                </Link>
              </li>
              <li className="menu-item">
                <Link to="#" className="text-item">
                  Blog
                </Link>
              </li>
              <li className="menu-item">
                <Link to="#" className="text-item">
                  Story
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
