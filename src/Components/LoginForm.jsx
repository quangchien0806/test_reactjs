import React from "react";
import "../style/loginForm.scss";
import { useState } from "react";
import { accounts } from "../data";
import { Link, useHistory } from "react-router-dom";

const LoginForm = () => {
  let history = useHistory();
  const [details, setDetails] = useState({ name: "", email: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();
    login(details);
  };
  const login = (details) => {
    const account = accounts.find(
      (acc) => acc.email === details.email && acc.password === details.password
    );
    if (account) {
      localStorage.setItem("checkLogin", "true");
      localStorage.setItem("name", account.name);
      history.push("/");
    } else {
      alert("Password or Email is wrong");
    }
  };
  return (
    <div className="form">
      <div className="form__image">
        <img
          src="https://slidesigma.nyc/templatemonster/angular/petco/assets/img/slider.jpg"
          alt=""
          srcset=""
        />
      </div>
      <form className="form__inner" action="">
        <div className="form__inner-group">
          <h2>Sign in with your Ecom account</h2>
          <p>
            Have a corporate username?
            <Link className="click" to="#">
              Click here
            </Link>
          </p>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              className="form-control-submit"
              type="email"
              name="email"
              placeholder="Email I'd"
              id="email"
              onChange={(e) =>
                setDetails({ ...details, email: e.target.value })
              }
              value={details.email}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">PassWord</label>
            <input
              className="form-control-submit"
              type="password"
              name="password"
              placeholder="Password"
              id="password-field"
              onChange={(e) =>
                setDetails({ ...details, password: e.target.value })
              }
              value={details.password}
            />
          </div>
          <button className="btn-signin" onClick={submitHandler}>
            Sign In
          </button>
          <h6>Or</h6>
          <button className="continue">
            <img
              src="https://slidesigma.nyc/templatemonster/angular/petco/assets/img/google-logo.png"
              alt=""
            />
            <p>Continue With Google</p>
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
