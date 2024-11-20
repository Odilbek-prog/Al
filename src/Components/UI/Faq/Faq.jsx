import React from "react";
import "./Faq.scss";
import { useTranslation } from "react-i18next";

const Faq = () => {
  const { t } = useTranslation();

  return (
    <div className="faq">
      <div className="faq__wrapper">
        <div className="faq__desc">
          <h1 className="faq__title">{t("frequently_asked_questions")}</h1>
          <p className="faq__text">{t("faq_desc")}</p>
        </div>
        <div className="faq__accor">
          <div className="c">
            <input type="checkbox" id="faq-1" />
            <h3 className="faq__accortitle">
              <label htmlFor="faq-1">{t("faq_1_question")}</label>
            </h3>
            <div className="p">
              <p>{t("faq_1_answer")}</p>
            </div>
          </div>
          <div className="c">
            <input type="checkbox" id="faq-2" />
            <h3 className="faq__accortitle">
              <label htmlFor="faq-2">{t("faq_2_question")}</label>
            </h3>
            <div className="p">
              <p>{t("faq_2_answer")}</p>
            </div>
          </div>
          <div className="c">
            <input type="checkbox" id="faq-3" />
            <h3 className="faq__accortitle">
              <label htmlFor="faq-3">{t("faq_3_question")}</label>
            </h3>
            <div className="p">
              <p>{t("faq_3_answer")}</p>
            </div>
          </div>
          <div className="c">
            <input type="checkbox" id="faq-4" />
            <h3 className="faq__accortitle">
              <label htmlFor="faq-4">{t("faq_4_question")}</label>
            </h3>
            <div className="p">
              <p>{t("faq_4_answer")}</p>
            </div>
          </div>
          <div className="c">
            <input type="checkbox" id="faq-5" />
            <h3 className="faq__accortitle">
              <label htmlFor="faq-5">{t("faq_5_question")}</label>
            </h3>
            <div className="p">
              <p>{t("faq_5_answer")}</p>
            </div>
          </div>
          <div className="c">
            <input type="checkbox" id="faq-6" />
            <h3 className="faq__accortitle">
              <label htmlFor="faq-6">{t("faq_6_question")}</label>
            </h3>
            <div className="p">
              <p>{t("faq_6_answer")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
