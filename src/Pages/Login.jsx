import React from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <div className="login__wrapper">
        <div className="login__left">
          <h1 className="login__title">Get started</h1>
          <div className="login__desc">
            <p>Already have an account?</p>
            <NavLink style={{ color: "#009688" }} to={"/signin"}>
              Sign in
            </NavLink>
          </div>
          <form className="login__form">
            <input
              className="login__input"
              required
              type="text"
              placeholder="Enter your name"
            />
            <input
              className="login__input"
              required
              type="email"
              placeholder="Enter your email"
            />
            <input
              className="login__input"
              required
              type="text"
              placeholder="Cuntry"
            />
            <button type="submit" className="login__btn">
              Log in
            </button>
          </form>
        </div>
        <div className="login__right">
          <div className="login__info">
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

export default Login;
