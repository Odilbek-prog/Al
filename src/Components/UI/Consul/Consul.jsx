import React from "react";
import "./Consul.scss";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";

const Consul = () => {
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success(t("submit"));
  };

  return (
    <div className="consul">
      <ToastContainer />
      <div className="consul__wrapper">
        <div className="consul__left">
          <h1 className="consul__title">
            {t("workshops_and_spiritual_development")}
          </h1>
          <p className="consul__text">{t("workshops_desc")}</p>
        </div>
        <div className="consul__right">
          <div className="consul__desc">
            <h1 className="consul__title">{t("free_consultation")}</h1>
            <p className="consul__text">{t("free_consultation_desc")}</p>
          </div>
          <form className="consul__form" onSubmit={handleSubmit}>
            <input
              type="text"
              className="consul__input"
              placeholder={t("name_placeholder")}
              required
            />
            <input
              type="number"
              className="consul__input"
              placeholder={t("phone_number_placeholder")}
              required
            />
            <div className="consul__checkbox">
              <input type="checkbox" className="consul__input" required />
              <label htmlFor="checkbox">{t("checkbox_label")}</label>
            </div>
            <NavLink type="submit" className="consul__btn" to={"/"}>
              {t("submit")}
            </NavLink>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Consul;
