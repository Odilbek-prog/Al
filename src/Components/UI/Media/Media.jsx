import React, { useState } from "react";
import "./Media.scss";

import { FaPlay, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import rasm1 from "../../../assets/media1.png";
import rasm2 from "../../../assets/media2.png";
import rasm3 from "../../../assets/media3.png";
import rasm4 from "../../../assets/media1.png";

const mediaData = [
  { image: rasm1, title: "Why Islamic finance?" },
  { image: rasm2, title: "What makes Islamic finance unique?" },
  { image: rasm3, title: "How is risk managed in Islamic?" },
  { image: rasm4, title: "How is risk managed in Islamic?" },
];

const Ourmedia = () => {
  const itemsPerPage = 3; // Ekranda ko'rsatiladigan kartalar soni
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sahifalar sonini hisoblash
  const totalPages = Math.ceil(mediaData.length / itemsPerPage);

  // Oldingi sahifaga o'tish
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalPages - 1 : prevIndex - 1
    );
  };

  // Keyingi sahifaga o'tish
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalPages - 1 ? 0 : prevIndex + 1
    );
  };

  // Ko'rsatiladigan elementlarni olish
  const currentItems = mediaData.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  return (
    <div className="ourmedia">
      <div className="container">
        <div className="ourmedia__container">
          <h1 className="ourmedia__title">Our Media</h1>
          <div className="ourmedia__slider">
            <div className="ourmedia__flex">
              <h3 className="ourmedia__slider__title">Our media showcase</h3>
              <div className="ourmedia__controls">
                <button className="ourmedia__control left" onClick={handlePrev}>
                  <FaArrowLeft />
                </button>
                <button
                  className="ourmedia__control right"
                  onClick={handleNext}
                >
                  <FaArrowRight />
                </button>
              </div>
            </div>
            <div className="ourmedia__cards">
              {/* Ekranda 3 ta karta va animatsiya bilan o'zgarishni ta'minlash */}
              <div
                className="ourmedia__cards__wrapper"
                style={{
                  transform: `translateX(-${
                    (currentIndex * 100) / itemsPerPage
                  }%)`,
                  transition: "transform 0.5s ease",
                }}
              >
                {mediaData.map((item, index) => (
                  <div className="ourmedia__card" key={index}>
                    <img src={item.image} alt={item.title} />
                    <div className="ourmedia__card__overlay">
                      <p>{item.title}</p>
                      <button className="ourmedia__playButton">
                        <FaPlay />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourmedia;
