import React from "react";
import "./Serv.scss";
import img1 from "../../../assets/img1.png";
import img2 from "../../../assets/img2.png";
import img3 from "../../../assets/img3.png";
import img4 from "../../../assets/img4.png";
import img5 from "../../../assets/img5.png";
import img6 from "../../../assets/img6.png";
import { useTranslation } from "react-i18next";

const Serv = () => {
  const { t } = useTranslation();
  return (
    <div className="serv">
      <div className="serv__wrapper">
        <div className="serv__desc">
          <h1 className="serv__title">{t("our_services")}</h1>
          <p className="serv__text">{t("services_description")}</p>
        </div>
        <div className="serv__cards">
          <div className="serv__card">
            <div className="serv__top">
              <div className="serv__imgtitle">
                <img src={img1} alt="" className="serv__img" />
                <h2 className="serv__cardtitle">
                  {t("islamic_fund_management")}
                </h2>
              </div>
              <p className="serv__cardtext">
                {t("fund_management_description")}
              </p>
            </div>
            <button className="serv__btn">{t("learn_more")}</button>
          </div>
          <div className="serv__card">
            <div className="serv__top">
              <div className="serv__imgtitle">
                <img src={img2} alt="" className="serv__img" />
                <h2 className="serv__cardtitle">
                  {t("islamic_fund_management")}
                </h2>
              </div>
              <p className="serv__cardtext">
                {t("fund_management_description")}
              </p>
            </div>
            <button className="serv__btn">{t("learn_more")}</button>
          </div>
          <div className="serv__card">
            <div className="serv__top">
              <div className="serv__imgtitle">
                <img src={img3} alt="" className="serv__img" />
                <h2 className="serv__cardtitle">
                  {t("islamic_fund_management")}
                </h2>
              </div>
              <p className="serv__cardtext">
                {t("fund_management_description")}
              </p>
            </div>
            <button className="serv__btn">{t("learn_more")}</button>
          </div>
          <div className="serv__card">
            <div className="serv__top">
              <div className="serv__imgtitle">
                <img src={img4} alt="" className="serv__img" />
                <h2 className="serv__cardtitle">
                  {t("islamic_fund_management")}
                </h2>
              </div>
              <p className="serv__cardtext">
                {t("fund_management_description")}
              </p>
            </div>
            <button className="serv__btn">{t("learn_more")}</button>
          </div>
          <div className="serv__card">
            <div className="serv__top">
              <div className="serv__imgtitle">
                <img src={img5} alt="" className="serv__img" />
                <h2 className="serv__cardtitle">
                  {t("islamic_fund_management")}
                </h2>
              </div>
              <p className="serv__cardtext">
                {t("fund_management_description")}
              </p>
            </div>
            <button className="serv__btn">{t("learn_more")}</button>
          </div>
          <div className="serv__card">
            <div className="serv__top">
              <div className="serv__imgtitle">
                <img src={img6} alt="" className="serv__img" />
                <h2 className="serv__cardtitle">
                  {t("islamic_fund_management")}
                </h2>
              </div>
              <p className="serv__cardtext">
                {t("fund_management_description")}
              </p>
            </div>
            <button className="serv__btn">{t("learn_more")}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Serv;
