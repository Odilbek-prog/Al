import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../../assets/logo.png";
import "./Navbar.scss";

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (event) => {
    const selectedLang = event.target.value;
    i18n.changeLanguage(selectedLang); // Tilni o'zgartirish
  };

  return (
    <div className="navbar">
      <div className="navbar__wrapper">
        {/* Logotip */}
        <NavLink className="navbar__logolink" to="/">
          <img src={logo} alt="Logo" className="navbar__logo" />
        </NavLink>

        {/* Asosiy menyu */}
        <ul className="navbar__ul">
          <li className="navbar__li">
            <NavLink className="navbar__link" to="/">
              {t("home")}
            </NavLink>
          </li>
          <li className="navbar__li">
            <p className="navbar__link navbar__droplink">
              {t("programs")}{" "}
              <svg
                width="12"
                height="7"
                viewBox="0 0 12 7"
                xmlns="http://www.w3.org/2000/svg"
                className="arrow"
              >
                <path d="M5.57939 6.97499C5.44606 6.97499 5.32106 6.95415 5.20439 6.91249C5.08773 6.87082 4.97939 6.79999 4.87939 6.69999L0.279395 2.09999C0.0960612 1.91665 0.00439453 1.68332 0.00439453 1.39999C0.00439453 1.11665 0.0960612 0.883321 0.279395 0.699988C0.462728 0.516654 0.696061 0.424988 0.979395 0.424988C1.26273 0.424988 1.49606 0.516654 1.67939 0.699988L5.57939 4.59999L9.47939 0.699988C9.66273 0.516654 9.89606 0.424988 10.1794 0.424988C10.4627 0.424988 10.6961 0.516654 10.8794 0.699988C11.0627 0.883321 11.1544 1.11665 11.1544 1.39999C11.1544 1.68332 11.0627 1.91665 10.8794 2.09999L6.27939 6.69999C6.17939 6.79999 6.07106 6.87082 5.95439 6.91249C5.83773 6.95415 5.71273 6.97499 5.57939 6.97499Z" />
              </svg>
              <div className="navbar__dropdown">
                <NavLink className="navbar__link" to="/programs1">
                  {t("international_educational_programs")}
                </NavLink>
                <hr className="navbar__hr" />
                <NavLink className="navbar__link" to="/programs2">
                  {t("specialized_courses")}
                </NavLink>
                <hr className="navbar__hr" />
                <NavLink className="navbar__link" to="/programs3">
                  {t("islamic_finance_literacy_course")}
                </NavLink>
                <hr className="navbar__hr" />
                <NavLink className="navbar__link" to="/programs4">
                  {t("certification_program")}
                </NavLink>
              </div>
            </p>
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

        {/* Tilni tanlash va kirish */}
        <div className="navbar__right">
          <div className="navbar__language">
            {i18n.language == "ru" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 480"
                width="30"
                height="20"
              >
                <rect width="640" height="160" fill="#ffffff" />
                <rect y="160" width="640" height="160" fill="#0039a6" />
                <rect y="320" width="640" height="160" fill="#d52b1e" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 60 30"
                width="30"
                height="20"
              >
                <rect width="60" height="30" fill="#012169" />
                <path
                  d="M0 0 L60 30 M60 0 L0 30"
                  stroke="#fff"
                  stroke-width="6"
                />
                <path
                  d="M0 0 L60 30 M60 0 L0 30"
                  stroke="#C8102E"
                  stroke-width="4"
                />
                <path
                  d="M30 0 L30 30 M0 15 L60 15"
                  stroke="#fff"
                  stroke-width="10"
                />
                <path
                  d="M30 0 L30 30 M0 15 L60 15"
                  stroke="#C8102E"
                  stroke-width="6"
                />
              </svg>
            )}
            <select
              onChange={handleLanguageChange}
              className="navbar__lang"
              value={i18n.language}
            >
              <option value="en">ENG</option>
              <option value="ru">RUS</option>
            </select>
          </div>
          <hr className="navbar__hrbottom" />
          <NavLink to="/login" className="navbar__signin">
            {t("log_in")}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
