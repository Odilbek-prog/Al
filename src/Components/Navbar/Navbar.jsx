import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../../assets/logo.png";
import "./Navbar.scss";

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (event) => {
    const selectedLang = event.target.value;
    i18n.changeLanguage(selectedLang);
  };

  return (
    <div className="navbar">
      <div className="navbar__wrapper">
        <NavLink className="navbar__logolink" to="/">
          <img src={logo} alt="logo" className="navbar__logo" />
        </NavLink>
        <ul className="navbar__ul">
          <li className="navbar__li">
            <NavLink className="navbar__link" to="/">
              {t("home")}
            </NavLink>
          </li>
          <li className="navbar__li">
            <NavLink className="navbar__link" to="/tools">
              {t("finance_tools")}
            </NavLink>
          </li>
          <li className="navbar__li">
            <NavLink className="navbar__link" to="/contact">
              {t("contact")}
            </NavLink>
          </li>
        </ul>
        <div className="navbar__right">
          <select
            onChange={handleLanguageChange}
            className="navbar__lang"
            value={i18n.language} // Tanlangan tilni ko'rsatish
          >
            <option value="en">ENG</option>
            <option value="ru">RUS</option>
          </select>
          <NavLink to="/login" className="navbar__signin">
            {t("log_in")}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
