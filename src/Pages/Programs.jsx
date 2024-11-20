import React, { useState } from "react";
import rasm from "../assets/tick-double-03.png";
import rasm2 from "../assets/Ellipse 207.png";
import oka from "../assets/image 1.png";
import foto1 from "../assets/Ellipse (1).png";
import foto2 from "../assets/Ellipse.png";
import { useTranslation } from "react-i18next";

const Programs = () => {
  const [isVideodarslarOpen, setVideodarslarOpen] = useState(true);
  const [isTasksOpen, setTasksOpen] = useState(true);
  const { t } = useTranslation();

  const toggleVideodarslar = () => {
    setVideodarslarOpen(!isVideodarslarOpen);
  };

  const toggleTasks = () => {
    setTasksOpen(!isTasksOpen);
  };

  const services = Array(6).fill({
    title: "Islamic Fund Management",
    description:
      "We assist retail and institutional clients in managing their funds in accordance with Islamic principles, providing practical advice for making halal investments.",
    price: 250,
    oldPrice: 300,
    startDate: "21 December 2024",
    students: 40,
    image: oka,
  });

  return (
    <div className="inter">
      <div className="inter_wrapper">
        <h2 className="inter_title">{t("international_programs_title")}</h2>
        <p className="inter_text">{t("international_programs_description")}</p>
        <div className="inter_cards">
          <div className="inter_card">
            <h4 className="inter_card_title">{t("what_youll_learn")}</h4>
            {[
              t("learn_finance_principles"),
              t("build_portfolio"),
              t("sharia_compliant_products"),
              t("master_key_concepts"),
              t("understand_risk_management"),
              t("develop_consulting_skills"),
            ].map((item, index) => (
              <div className="inter_box" key={index}>
                <img src={rasm} alt="" className="inter_img" />
                {item}
              </div>
            ))}
          </div>
          <div className="inter_card">
            <h4 className="inter_card_title">{t("why_study_at_almuamalat")}</h4>
            {[
              t("lifetime_access"),
              t("video_lessons"),
              t("tests"),
              t("projects"),
              t("downloadable_resources"),
              t("access_mobile"),
            ].map((item, index) => (
              <div className="inter_box" key={index}>
                <img src={rasm2} alt="" className="inter_img" />
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="course-info">
          <h2>{t("brief_information")}</h2>
          <div className="acardion_items">
            <div className="accordion-item">
              <button onClick={toggleVideodarslar} className="accordion-header">
                {t("videodarslar")}
              </button>
              <div
                className={`accordion-content ${
                  isVideodarslarOpen ? "open" : ""
                }`}
              >
                <p>{t("videodarslar_desc")}</p>
              </div>
            </div>
            <div className="accordion-item">
              <button onClick={toggleTasks} className="accordion-header">
                {t("tasks")}
              </button>
              <div className={`accordion-content ${isTasksOpen ? "open" : ""}`}>
                <p>{t("tasks_desc")}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="pro-services">
          <h2 className="pro-services__title">{t("our_services")}</h2>
          <p className="pro-services__description">
            {t("services_description")}
          </p>
          <div className="pro-services__grid">
            {services.map((service, index) => (
              <div className="pro-services__card" key={index}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="pro-services__card-image"
                />
                <span className="pro-services__card-students">
                  <img src={foto1} alt="" className="pro-services-img" />
                  <img src={foto2} alt="" className="pro-services-img" />
                  {t("students", { students: service.students })}
                </span>
                <div className="pro-services__card-content">
                  <span className="pro-services__card-date">
                    {t("start_date", { date: service.startDate })}
                  </span>
                  <h3 className="pro-services__card-title">{service.title}</h3>
                  <p className="pro-services__card-description">
                    {service.description}
                  </p>
                  <div className="pro-services__card-pricing">
                    <span className="pro-services__card-price">
                      ${service.price}
                    </span>
                    <span className="pro-services__card-old-price">
                      ${service.oldPrice}
                    </span>
                    <button className="pro-services__card-button">
                      {t("enroll_now")}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;
