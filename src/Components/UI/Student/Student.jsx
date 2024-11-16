import React from "react";
import "./Student.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import student from "../../../assets/student.png";

const Student = () => {
  return (
    <div className="student">
      <div className="student__wrapper">
        <div className="student__desc">
          <h1 className="student__title">What students say</h1>
          <p className="student__text">
            Our team consists of seasoned professionals with extensive
            experience in Islamic finance and management. Each member brings a
            unique set of skills and expertise.
          </p>
        </div>
        <Swiper
          slidesPerView={3}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          spaceBetween={0}
          modules={[Autoplay]}
          className="student__swiper"
        >
          <SwiperSlide>
            <div className="student__card">
              <p className="student__cardtext">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College.
              </p>
              <div className="student__bottom">
                <img src={student} alt="" className="student__img" />
                <div className="student__carddesc">
                  <h4 className="student__title">Finlay Kirk</h4>
                  <p className="student__about">Web designer</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="student__card">
              <p className="student__cardtext">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College.
              </p>
              <div className="student__bottom">
                <img src={student} alt="" className="student__img" />
                <div className="student__carddesc">
                  <h4 className="student__title">Finlay Kirk</h4>
                  <p className="student__about">Web designer</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="student__card">
              <p className="student__cardtext">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College.
              </p>
              <div className="student__bottom">
                <img src={student} alt="" className="student__img" />
                <div className="student__carddesc">
                  <h4 className="student__title">Finlay Kirk</h4>
                  <p className="student__about">Web designer</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="student__card">
              <p className="student__cardtext">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College.
              </p>
              <div className="student__bottom">
                <img src={student} alt="" className="student__img" />
                <div className="student__carddesc">
                  <h4 className="student__title">Finlay Kirk</h4>
                  <p className="student__about">Web designer</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="student__card">
              <p className="student__cardtext">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College.
              </p>
              <div className="student__bottom">
                <img src={student} alt="" className="student__img" />
                <div className="student__carddesc">
                  <h4 className="student__title">Finlay Kirk</h4>
                  <p className="student__about">Web designer</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="student__card">
              <p className="student__cardtext">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College.
              </p>
              <div className="student__bottom">
                <img src={student} alt="" className="student__img" />
                <div className="student__carddesc">
                  <h4 className="student__title">Finlay Kirk</h4>
                  <p className="student__about">Web designer</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Student;
