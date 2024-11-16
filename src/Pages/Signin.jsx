import React from "react";
import { NavLink } from "react-router-dom";

const Signin = () => {
  return (
    <div className="signin">
      <div className="signin__wrapper">
        <div className="signin__left">
          <h1 className="signin__title">Get started</h1>
          <div className="signin__desc">
            <p>Dont have account?</p>
            <NavLink style={{ color: "#009688" }} to={"/login"}>
              Log in
            </NavLink>
          </div>
          <form className="signin__form">
            <input
              className="signin__input"
              required
              type="text"
              placeholder="Enter your name"
            />
            <input
              className="signin__input"
              required
              type="password"
              placeholder="Enter your password"
            />
            <button type="submit" className="signin__btn">
              Sign in
            </button>
          </form>
        </div>
        <div className="signin__right">
          <div className="signin__info">
            <h3>
              Welcome to Al Muamalat – Empowering Your Journey in Islamic
              Finance
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
