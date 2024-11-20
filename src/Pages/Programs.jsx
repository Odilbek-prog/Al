import React, { useState } from "react";
import rasm from "../assets/tick-double-03.png";
import rasm2 from "../assets/Ellipse 207.png";
import oka from "../assets/image 1.png";
import foto1 from "../assets/Ellipse (1).png";
import foto2 from "../assets/Ellipse.png";

const Programs = () => {
  const [isVideodarslarOpen, setVideodarslarOpen] = useState(true);
  const [isTasksOpen, setTasksOpen] = useState(true);

  const toggleVideodarslar = () => {
    setVideodarslarOpen(!isVideodarslarOpen);
  };

  const toggleTasks = () => {
    setTasksOpen(!isTasksOpen);
  };

  const services = Array(6).fill({
    title: "Islamic Fund Management",
    description:
      "We assist retail and institutional clients in managing their funds in accordance with Islamic principles, providing practical advice for making halal investments.",
    price: 250,
    oldPrice: 300,
    startDate: "21 December 2024",
    students: 40,
    image: oka,
  });

  return (
    <div className="inter">
      <div className="inter_wrapper">
        <h2 className="inter_title">International educational programs</h2>
        <p className="inter_text">
          Al Muamalat Education's international study programs offer an in-depth
          learning experience at leading Islamic financial institutions around
          the world.
        </p>
        <div className="inter_cards">
          <div className="inter_card">
            <h4 className="inter_card_title">What you’ll learn</h4>
            <div className="inter_box">
              <img src={rasm} alt="" className="inter_img" />
              Gain a comprehensive understanding of Islamic finance principles
              and ethics.
            </div>
            <div className="inter_box">
              <img src={rasm} alt="" className="inter_img" />
              Build a portfolio with 10+ real-world projects in Islamic
              financial services.
            </div>
            <div className="inter_box">
              <img src={rasm} alt="" className="inter_img" />
              Learn to develop and manage Sharia-compliant financial products.
            </div>
            <div className="inter_box">
              <img src={rasm} alt="" className="inter_img" />
              Master key concepts in Islamic banking, investment, and wealth
              management.
            </div>
            <div className="inter_box">
              <img src={rasm} alt="" className="inter_img" />
              Understand the fundamentals of risk management in Islamic finance.
            </div>
            <div className="inter_box">
              <img src={rasm} alt="" className="inter_img" />
              Develop skills to work as an Islamic finance consultant.
            </div>
          </div>
          <div className="inter_card">
            <h4 className="inter_card_title">
              Why should you study at "AL-MUAMALAT"?
            </h4>
            <div className="inter_box">
              <img src={rasm2} alt="" className="inter_img" />
              Lifetime access
            </div>
            <div className="inter_box">
              <img src={rasm2} alt="" className="inter_img" />
              Video lessons
            </div>
            <div className="inter_box">
              <img src={rasm2} alt="" className="inter_img" />
              Tests
            </div>
            <div className="inter_box">
              <img src={rasm2} alt="" className="inter_img" />
              Projects
            </div>
            <div className="inter_box">
              <img src={rasm2} alt="" className="inter_img" />
              Downloadable resources
            </div>
            <div className="inter_box">
              <img src={rasm2} alt="" className="inter_img" />
              Access via mobile device
            </div>
          </div>
        </div>
        <div className="course-info">
          <h2>Brief information about the course</h2>
          <div className="acardion_items">
            {" "}
            <div className="accordion-item">
              <button onClick={toggleVideodarslar} className="accordion-header">
                Videodarslar ▾
              </button>
              <div
                className={`accordion-content ${
                  isVideodarslarOpen ? "open" : ""
                }`}
              >
                <p>
                  Lessons are posted on the platform in the form of videos,
                  which can be viewed anytime and anywhere. Video lessons are
                  updated.
                </p>
              </div>
            </div>
            <div className="accordion-item">
              <button onClick={toggleTasks} className="accordion-header">
                Tasks ▾
              </button>
              <div className={`accordion-content ${isTasksOpen ? "open" : ""}`}>
                <p>
                  Test tasks are given at the end of the module. Only students
                  who successfully pass the test will be able to access the
                  lessons in the next module.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="pro-services">
          <h2 className="pro-services__title">Our services</h2>
          <p className="pro-services__description">
            Expert guidance for managing funds in alignment with Islamic
            principles, helping you make informed, halal investment decisions.
          </p>
          <div className="pro-services__grid">
            {services.map((service, index) => (
              <div className="pro-services__card" key={index}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="pro-services__card-image"
                />
                <span className="pro-services__card-students">
                  <img src={foto1} alt="" className="pro-services-img" />
                  <img src={foto2} alt="" className="pro-services-img" />+{" "}
                  {service.students} students
                </span>
                <div className="pro-services__card-content">
                  <span className="pro-services__card-date">
                    Start date: {service.startDate}
                  </span>
                  <h3 className="pro-services__card-title">{service.title}</h3>
                  <p className="pro-services__card-description">
                    {service.description}
                  </p>
                  <div className="pro-services__card-pricing">
                    <span className="pro-services__card-price">
                      ${service.price}
                    </span>
                    <span className="pro-services__card-old-price">
                      ${service.oldPrice}
                    </span>
                    <button className="pro-services__card-button">
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;
