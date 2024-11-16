import React from "react";
import Slider from "react-slick";

import rasm1 from "../../../assets/telegram.png";
import rasm2 from "../../../assets/instagram.png";
import rasm3 from "../../../assets/facebook.png";
import rasm4 from "../../../assets/twitter.png";

import leftimg from "../../../assets/team.png";

import "./Team.scss";

const Team = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="team">
      <div className="team__wrapper">
        <h2 className="team__title">Our Expert Team </h2>
        <p className="team__text">
          Our team consists of seasoned professionals with extensive experience
          in Islamic finance and management. Each member brings a unique set of
          skills and expertise.
        </p>
        <div className="slider-container">
          <Slider className="team__cards" {...settings}>
            <div className="team__card">
              <div className="team__left">
                <img src={leftimg} alt="" />
              </div>
              <div className="team__right">
                <h4 className="team__card__title">Dr. Mezbah Uddin Ahmed</h4>
                <p className="team__card__text">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters.
                </p>
                <div className="team__contact">
                  <a
                    href="https://t.me/yourusername"
                    target="__blank"
                    rel="noopener noreferrer"
                  >
                    <img src={rasm1} alt="Telegram" className="team__img" />
                  </a>
                  <a
                    href="https://instagram.com/yourusername"
                    target="__blank"
                    rel="noopener noreferrer"
                  >
                    <img src={rasm2} alt="Instagram" className="team__img" />
                  </a>
                  <a
                    href="https://facebook.com/yourusername"
                    target="__blank"
                    rel="noopener noreferrer"
                  >
                    <img src={rasm3} alt="Facebook" className="team__img" />
                  </a>
                  <a
                    href="https://twitter.com/yourusername"
                    target="__blank"
                    rel="noopener noreferrer"
                  >
                    <img src={rasm4} alt="Twitter" className="team__img" />
                  </a>
                </div>
              </div>
            </div>
            <div className="team__card">
              <div className="team__left">
                <img src={leftimg} alt="" />
              </div>
              <div className="team__right">
                <h4 className="team__card__title">Dr. Mezbah Uddin Ahmed</h4>
                <p className="team__card__text">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters.
                </p>
                <div className="team__contact">
                  <a
                    href="https://t.me/yourusername"
                    target="__blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <img src={rasm1} alt="Telegram" className="team__img" />
                  </a>
                  <a
                    href="https://instagram.com/yourusername"
                    target="__blank"
                    rel="noopener noreferrer"
                  >
                    <img src={rasm2} alt="Instagram" className="team__img" />
                  </a>
                  <a
                    href="https://facebook.com/yourusername"
                    target="__blank"
                    rel="noopener noreferrer"
                  >
                    <img src={rasm3} alt="Facebook" className="team__img" />
                  </a>
                  <a
                    href="https://twitter.com/yourusername"
                    target="__blank"
                    rel="noopener noreferrer"
                  >
                    <img src={rasm4} alt="Twitter" className="team__img" />
                  </a>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Team;
