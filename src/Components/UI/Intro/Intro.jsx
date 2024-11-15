import React from "react";
import "./Intro.scss";
import btn from "../../../assets/introbtn.png";

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
            <img src={btn} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
