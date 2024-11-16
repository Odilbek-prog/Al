import React from "react";
import "./Serv.scss";
import img1 from "../../../assets/img1.png";
import img2 from "../../../assets/img2.png";
import img3 from "../../../assets/img3.png";
import img4 from "../../../assets/img4.png";
import img5 from "../../../assets/img5.png";
import img6 from "../../../assets/img6.png";

const Serv = () => {
  return (
    <div className="serv">
      <div className="serv__wrapper">
        <div className="serv__desc">
          <h1 className="serv__title">Our services</h1>
          <p className="serv__text">
            Expert guidance for managing funds in alignment with Islamic
            principles, helping you make informed, halal investment decisions.
          </p>
        </div>
        <div className="serv__cards">
          <div className="serv__card">
            <div className="serv__top">
              <div className="serv__imgtitle">
                <img src={img1} alt="" className="serv__img" />
                <h2 className="serv__cardtitle">Islamic Fund Management</h2>
              </div>
              <p className="serv__cardtext">
                We assist retail and institutional clients in managing their
                funds in accordance with Islamic principles, providing practical
                advice for making halal investments.
              </p>
            </div>
            <button className="serv__btn">Learn more</button>
          </div>
          <div className="serv__card">
            <div className="serv__top">
              <div className="serv__imgtitle">
                <img src={img2} alt="" className="serv__img" />
                <h2 className="serv__cardtitle">Islamic Fund Management</h2>
              </div>
              <p className="serv__cardtext">
                We assist retail and institutional clients in managing their
                funds in accordance with Islamic principles, providing practical
                advice for making halal investments.
              </p>
            </div>
            <button className="serv__btn">Learn more</button>
          </div>
          <div className="serv__card">
            <div className="serv__top">
              <div className="serv__imgtitle">
                <img src={img3} alt="" className="serv__img" />
                <h2 className="serv__cardtitle">Islamic Fund Management</h2>
              </div>
              <p className="serv__cardtext">
                We assist retail and institutional clients in managing their
                funds in accordance with Islamic principles, providing practical
                advice for making halal investments.
              </p>
            </div>
            <button className="serv__btn">Learn more</button>
          </div>
          <div className="serv__card">
            <div className="serv__top">
              <div className="serv__imgtitle">
                <img src={img4} alt="" className="serv__img" />
                <h2 className="serv__cardtitle">Islamic Fund Management</h2>
              </div>
              <p className="serv__cardtext">
                We assist retail and institutional clients in managing their
                funds in accordance with Islamic principles, providing practical
                advice for making halal investments.
              </p>
            </div>
            <button className="serv__btn">Learn more</button>
          </div>{" "}
          <div className="serv__card">
            <div className="serv__top">
              <div className="serv__imgtitle">
                <img src={img5} alt="" className="serv__img" />
                <h2 className="serv__cardtitle">Islamic Fund Management</h2>
              </div>
              <p className="serv__cardtext">
                We assist retail and institutional clients in managing their
                funds in accordance with Islamic principles, providing practical
                advice for making halal investments.
              </p>
            </div>
            <button className="serv__btn">Learn more</button>
          </div>{" "}
          <div className="serv__card">
            <div className="serv__top">
              <div className="serv__imgtitle">
                <img src={img6} alt="" className="serv__img" />
                <h2 className="serv__cardtitle">Islamic Fund Management</h2>
              </div>
              <p className="serv__cardtext">
                We assist retail and institutional clients in managing their
                funds in accordance with Islamic principles, providing practical
                advice for making halal investments.
              </p>
            </div>
            <button className="serv__btn">Learn more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Serv;
