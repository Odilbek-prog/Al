import React from "react";
import "./Partner.scss";
import client1 from "../../../assets/AmericanExpress.png";
import client2 from "../../../assets/Amazonpay.png";
import client3 from "../../../assets/Stripe.png";
import client4 from "../../../assets/westernunion.png";
import client5 from "../../../assets/Klarna.png";
import client6 from "../../../assets/Skrill.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import { Autoplay, Grid } from "swiper/modules";
import { useTranslation } from "react-i18next";

const Partner = () => {
  const { t } = useTranslation();

  return (
    <div className="partner">
      <h1 className="partner__title">{t("our_partners_and_clients")}</h1>
      <Swiper
        slidesPerView={5}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        grid={{
          rows: 2,
        }}
        loop={true}
        spaceBetween={0}
        modules={[Autoplay, Grid]}
        className="partner__swiper"
      >
        <SwiperSlide>
          <div className="partner__card first__row">
            <img src={client1} alt={t("client_1")} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="partner__card">
            <img src={client1} alt={t("client_1")} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="partner__card first__row">
            <img
              className="partner__img"
              style={{ paddingTop: "20px" }}
              src={client2}
              alt={t("client_2")}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="partner__card">
            <img
              className="partner__img"
              style={{ paddingTop: "20px" }}
              src={client2}
              alt={t("client_2")}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="partner__card first__row">
            <img src={client3} alt={t("client_3")} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="partner__card">
            <img src={client3} alt={t("client_3")} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="partner__card first__row">
            <img src={client4} alt={t("client_4")} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="partner__card">
            <img src={client4} alt={t("client_4")} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="partner__card first__row">
            <img src={client5} alt={t("client_5")} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="partner__card">
            <img src={client5} alt={t("client_5")} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="partner__card first__row">
            <img src={client6} alt={t("client_6")} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="partner__card">
            <img src={client6} alt={t("client_6")} />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Partner;
