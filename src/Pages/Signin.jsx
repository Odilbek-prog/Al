import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next"; // i18next import

const Signin = () => {
  const { t } = useTranslation(); // `t` funksiyasi

  return (
    <div className="signin">
      <div className="signin__wrapper">
        <div className="signin__left">
          <h1 className="signin__title">{t("get_started")}</h1>{" "}
          {/* Tarjima qilingan matn */}
          <div className="signin__desc">
            <p>{t("dont_have_account")}</p>
            <NavLink style={{ color: "#009688" }} to={"/login"}>
              {t("log_in")} {/* Tarjima qilingan matn */}
            </NavLink>
          </div>
          <form className="signin__form">
            <input
              className="signin__input"
              required
              type="text"
              placeholder={t("enter_name")}
            />
            <input
              className="signin__input"
              required
              type="password"
              placeholder={t("enter_password")}
            />
            <button type="submit" className="signin__btn">
              {t("sign_in")} {/* Tarjima qilingan matn */}
            </button>
          </form>
        </div>
        <div className="signin__right">
          <div className="signin__info">
            <h3>{t("welcome_message")}</h3> {/* Tarjima qilingan matn */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
