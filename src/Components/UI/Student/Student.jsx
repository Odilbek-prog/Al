import React from "react";
import "./Student.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import student from "../../../assets/student.png";
import { useTranslation } from "react-i18next";

const Student = () => {
  const { t } = useTranslation();

  return (
    <div className="student">
      <div className="student__wrapper">
        <div className="student__desc">
          <h1 className="student__title">{t("what_students_say")}</h1>
          <p className="student__text">{t("student_desc")}</p>
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
          {Array(6)
            .fill()
            .map((_, index) => (
              <SwiperSlide key={index}>
                <div className="student__card">
                  <p className="student__cardtext">
                    {t("student_testimonial")}
                  </p>
                  <div className="student__bottom">
                    <img src={student} alt="" className="student__img" />
                    <div className="student__carddesc">
                      <h4 className="student__title">{t("student_name")}</h4>
                      <p className="student__about">
                        {t("student_profession")}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Student;
