import React from "react";
import Slider from "react-slick";

import rasm1 from "../../../assets/telegram.png";
import rasm2 from "../../../assets/instagram.png";
import rasm3 from "../../../assets/facebook.png";
import rasm4 from "../../../assets/twitter.png";

import leftimg from "../../../assets/team.png";

import { useTranslation } from "react-i18next";
import "./Team.scss";

const Team = () => {
  const { t } = useTranslation(); // Tarjima funksiyasini olish

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
        <h2 className="team__title">{t("our_expert_team")}</h2>
        <p className="team__text">{t("team_description")}</p>
        <div className="slider-container">
          <Slider className="team__cards" {...settings}>
            {/* Team Member 1 */}
            <div className="team__card">
              <div className="team__left">
                <img src={leftimg} alt={t("team_member_image_alt")} />
              </div>
              <div className="team__right">
                <h4 className="team__card__title">
                  {t("dr_mezbah_uddin_ahmed")}
                </h4>
                <p className="team__card__text">{t("dr_mezbah_description")}</p>
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

            {/* Team Member 2 */}
            <div className="team__card">
              <div className="team__left">
                <img src={leftimg} alt={t("team_member_image_alt")} />
              </div>
              <div className="team__right">
                <h4 className="team__card__title">{t("dr_fatima_zahra")}</h4>
                <p className="team__card__text">{t("dr_fatima_description")}</p>
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

            {/* Team Member 3 */}
            <div className="team__card">
              <div className="team__left">
                <img src={leftimg} alt={t("team_member_image_alt")} />
              </div>
              <div className="team__right">
                <h4 className="team__card__title">
                  {t("dr_omar_al_mansoori")}
                </h4>
                <p className="team__card__text">{t("dr_omar_description")}</p>
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

            {/* Team Member 4 */}
            <div className="team__card">
              <div className="team__left">
                <img src={leftimg} alt={t("team_member_image_alt")} />
              </div>
              <div className="team__right">
                <h4 className="team__card__title">{t("dr_ayesha_noor")}</h4>
                <p className="team__card__text">{t("dr_ayesha_description")}</p>
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
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Team;
