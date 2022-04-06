import React from "react";
import "./loginForm.scss";

const LoginForm = () => {
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
            Have a corporate username?{" "}
            <a className="click" href="#">
              Click here
            </a>
          </p>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              className="form-control-submit"
              type="email"
              name="email"
              placeholder="Email I'd"
              id="email"
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
            />
          </div>
          <button className="btn-signin">Sign In</button>
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
