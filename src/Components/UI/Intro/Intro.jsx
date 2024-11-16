import React from "react";
import "./Intro.scss";
import btn from "../../../assets/introbtn.png";
import introimg from "../../../assets/introimg.png";
import intrstudent from "../../../assets/introstudent.png";
import intrstar from "../../../assets/introstar.png";

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro__wrapper">
        <div className="intro__left">
          <div className="intro__title">
            Seeking Knowledge is an Obligation in Islam
          </div>
          <h1 className="intro__text">
            Enhance Your Understanding of Islamic Ethics with Al-Muamalat
          </h1>
          <div className="intro__btn">
            <div className="intro__opinion">Students’ opnion </div>
            <img className="intro__btnimg" src={btn} alt="" />
          </div>
        </div>
        <div className="intro__right">
          <img className="intro__student" src={intrstudent} alt="" />
          <img className="intro__img" src={introimg} alt="" />
          <img className="intro__star1" src={intrstar} alt="" />
          <img className="intro__star2" src={intrstar} alt="" />
          <img className="intro__star3" src={intrstar} alt="" />
          <img className="intro__star4" src={intrstar} alt="" />
          <img className="intro__star5" src={intrstar} alt="" />
          <img className="intro__star6" src={intrstar} alt="" />
          <img className="intro__star7" src={intrstar} alt="" />
          <img className="intro__star8" src={intrstar} alt="" />
          <img className="intro__star9" src={intrstar} alt="" />
          <img className="intro__star10" src={intrstar} alt="" />
          <img className="intro__star11" src={intrstar} alt="" />
          <img className="intro__star12" src={intrstar} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
