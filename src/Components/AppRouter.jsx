import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./Home";
import LoginForm from "./LoginForm";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <LoginForm />
        </Route>
        <Route
          path="/"
          render={() => {
            return localStorage.getItem("checkLogin") === "true" ? (
              <Home />
            ) : (
              <Redirect to="/login" />
            );
          }}
        ></Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;
