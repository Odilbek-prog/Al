import React, { useState } from "react";
import "./Partner.scss";
import client1 from "../../../assets/AmericanExpress.png";
import client2 from "../../../assets/AmazonPay.png";
import client3 from "../../../assets/Stripe.png";
import client4 from "../../../assets/westernunion.png";
import client5 from "../../../assets/Klarna.png";
import client6 from "../../../assets/Skrill.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import { Autoplay, Grid } from "swiper/modules";

const Partner = () => {
  return (
    <div className="partner">
      <h1 className="partner__title">Our Partners and Clients</h1>
      <Swiper
        slidesPerView={5}
        autoplay={{
          delay: 200,
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
            <img src={client1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="partner__card">
            <img src={client1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="partner__card first__row">
            <img
              className="partner__img"
              style={{ paddingTop: "20px" }}
              src={client2}
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="partner__card">
            <img
              className="partner__img"
              style={{ paddingTop: "20px" }}
              src={client2}
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="partner__card first__row">
            <img src={client3} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="partner__card">
            <img src={client3} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="partner__card first__row">
            <img src={client4} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="partner__card">
            <img src={client4} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="partner__card first__row">
            <img src={client5} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="partner__card">
            <img src={client5} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="partner__card first__row">
            <img src={client6} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="partner__card">
            <img src={client6} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Partner;
