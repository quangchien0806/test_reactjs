import React from "react";
import "./style/home.scss";
import Header from "./Header";
import Animal from "./Animal";
import Footer from "./Footer";

const Home = ({ user }) => {
  const logout = () => {
    localStorage.setItem("checkLogin", "false");
  };
  console.log(localStorage.getItem.checkLogin);
  return (
    <div className="wrapper">
      <Header user={user} logout={logout} />
      <Animal />
      <Footer />
    </div>
  );
};

export default Home;
