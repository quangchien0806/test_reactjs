import React, { useState } from "react";
import "./style/home.scss";
import { accounts } from "./../data";
import LoginForm from "./LoginForm";
import Header from "./Header";
import Animal from "./Animal";
import Footer from "./Footer";

const Home = () => {
  const [user, setUser] = useState({ name: "", email: "" });

  const login = (details) => {
    accounts.forEach((item) => {
      if (details.email === item.email && details.password === item.password) {
        setUser({
          name: details.name,
          email: details.email,
        });
      } else {
        alert("Username or password incorrect");
      }
    });
  };

  const logout = () => {
    setUser({
      name: "",
      email: "",
    });
  };

  return (
    <div>
      {user.email !== "" ? (
        <div className="wrapper">
          <Header user={user} logout={logout} />
          <Animal />
          <Footer />
        </div>
      ) : (
        <LoginForm login={login} />
      )}
    </div>
  );
};

export default Home;
