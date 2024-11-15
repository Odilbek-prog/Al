import React from "react";
import "./Footer.scss";
import logo from "../../assets/logo2.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__wrapper">
        <img className="footer__logo" src={logo} alt="" />
        <ul className="footer__ul">
          <li className="footer__li">
            <NavLink className={"footer__link"} to={"/"}>
              Home
            </NavLink>
          </li>
          <li className="footer__li">
            <NavLink className={"footer__link"} to={"/about"}>
              About
            </NavLink>
          </li>
          <li className="footer__li">
            <NavLink className={"footer__link"} to={"/service"}>
              Service
            </NavLink>
          </li>
          <li className="footer__li">
            <NavLink className={"footer__link"} to={"/contact"}>
              Contact Us
            </NavLink>
          </li>
        </ul>
        <div className="footer__icons">
          <a className="footer__icon" href="https://www.youtube.com/">
            <i class="fa-brands fa-youtube fa-lg" style={{ color: "#fff" }}></i>
          </a>
          <a className="footer__icon" href="https://www.facebook.com/">
            <i className="fab fa-facebook fa-lg" style={{ color: "#fff" }}></i>
          </a>
          <a className="footer__icon" href="https://www.twitter.com/">
            <i className="fab fa-twitter fa-lg" style={{ color: "#fff" }}></i>
          </a>
          <a className="footer__icon" href="https://www.instagram.com/">
            <i className="fab fa-instagram fa-lg" style={{ color: "#fff" }}></i>
          </a>
        </div>
        <hr className="footer__hr" />
        <p className="footer__copy">Copyright Satyam Studio</p>
      </div>
    </div>
  );
};

export default Footer;
