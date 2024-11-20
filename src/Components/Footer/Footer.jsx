import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Footer.scss";
import logo from "../../assets/logo2.png";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="footer">
      <div className="footer__wrapper">
        <img className="footer__logo" src={logo} alt="logo" />
        <ul className="footer__ul">
          <li className="footer__li">
            <NavLink className="footer__link" to={"/"}>
              {t("home")}
            </NavLink>
          </li>
          <li className="footer__li">
            <NavLink className="footer__link" to={"/about"}>
              {t("about")}
            </NavLink>
          </li>
          <li className="footer__li">
            <NavLink className="footer__link" to={"/service"}>
              {t("service")}
            </NavLink>
          </li>
          <li className="footer__li">
            <NavLink className="footer__link" to={"/contact"}>
              {t("contact")}
            </NavLink>
          </li>
        </ul>
        <div className="footer__icons">
          <a className="footer__icon" href="https://www.youtube.com/">
            <i
              className="fa-brands fa-youtube fa-lg"
              style={{ color: "#fff" }}
            ></i>
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
        <p className="footer__copy">{t("copyright")}</p>
      </div>
    </div>
  );
};

export default Footer;
