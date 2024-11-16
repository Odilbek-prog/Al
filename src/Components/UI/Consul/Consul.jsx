import React from "react";
import "./Consul.scss";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Consul = () => {
  return (
    <div className="consul">
      <ToastContainer />
      <div className="consul__wrapper">
        <div className="consul__left">
          <h1 className="consul__title">Workshops and Spiritual Development</h1>
          <p className="consul__text">
            Participate in our weekly workshops focused on Islamic studies and
            spiritual growth. These sessions are designed to help you strengthen
            your connection with faith and acquire essential skills for daily
            life
          </p>
        </div>
        <div className="consul__right">
          <div className="consul__desc">
            <h1 className="consul__title">Free consultation</h1>
            <p className="consul__text">
              Leave your phone number, and we will reach out to provide you with
              complete information about our courses.
            </p>
          </div>
          <form className="consul__form" onSubmit={toast.success("success")}>
            <input
              type="text"
              className="consul__input"
              placeholder="Your Name"
              required
            />
            <input
              type="number"
              className="consul__input"
              placeholder="Your Phone Number"
              required
            />
            <div className="consul__checkbox">
              <input type="checkbox" className="consul__input" required />
              <label htmlFor="checkbox">
                I agree to the use of my personal information for consultation
                purposes.
              </label>
            </div>
            <NavLink type="submit" className="consul__btn" to={"/"}>
              Submit
            </NavLink>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Consul;
