import React from "react";
import "./Media.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const Media = () => {
  return (
    <div className="media">
      <div className="media__wrapper">
        <h1 className="media__title">Our Media</h1>
        <div className="media__bottom">
          <h2 className="media__cardtitle">Our media showcase</h2>
          <Swiper
            slidesPerView={3}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            spaceBetween={20}
            modules={[Autoplay]}
            className="media__swiper"
          >
            <SwiperSlide>
              <div className="media__card">
                <p className="media__text">Why Islamic finance?</p>
                <div className="media__play">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="icon-play"
                  >
                    <polygon points="5 3, 19 12, 5 21"></polygon>
                  </svg>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="media__card media__card2">
                <p className="media__text">
                  What makes Islamic finance unique?
                </p>
                <div className="media__play">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="icon-play"
                  >
                    <polygon points="5 3, 19 12, 5 21"></polygon>
                  </svg>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="media__card media__card3">
                <p className="media__text">
                  How is risk managed in Islamic finance?
                </p>
                <div className="media__play">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="icon-play"
                  >
                    <polygon points="5 3, 19 12, 5 21"></polygon>
                  </svg>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="media__card">
                <p className="media__text">Why Islamic finance?</p>
                <div className="media__play">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="icon-play"
                  >
                    <polygon points="5 3, 19 12, 5 21"></polygon>
                  </svg>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="media__card media__card2">
                <p className="media__text">
                  What makes Islamic finance unique?
                </p>
                <div className="media__play">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="icon-play"
                  >
                    <polygon points="5 3, 19 12, 5 21"></polygon>
                  </svg>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="media__card media__card3">
                <p className="media__text">
                  How is risk managed in Islamic finance?
                </p>
                <div className="media__play">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="icon-play"
                  >
                    <polygon points="5 3, 19 12, 5 21"></polygon>
                  </svg>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Media;
