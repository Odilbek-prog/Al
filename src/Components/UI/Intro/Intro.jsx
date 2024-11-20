import React from "react";
import "./Intro.scss";
import btn from "../../../assets/introbtn.png";
import introimg from "../../../assets/introimg.png";
import intrstudent from "../../../assets/introstudent.png";
import intrstar from "../../../assets/introstar.png";
import { useTranslation } from "react-i18next";

const Intro = () => {
  const { t } = useTranslation();

  return (
    <div className="intro">
      <div className="intro__wrapper">
        <div className="intro__left">
          <div className="intro__title">{t("seeking_knowledge")}</div>
          <h1 className="intro__text">{t("enhance_understanding")}</h1>
          <div className="intro__btn">
            <div className="intro__opinion">{t("students_opinion")}</div>
            <img className="intro__btnimg" src={btn} alt="Button" />
          </div>
        </div>
        <div className="intro__right">
          <img className="intro__student" src={intrstudent} alt="Student" />
          <img className="intro__img" src={introimg} alt="Intro" />
          {[...Array(12)].map((_, index) => (
            <img
              key={index}
              className={`intro__star${index + 1}`}
              src={intrstar}
              alt={`Star ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Intro;
