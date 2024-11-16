import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Navbar.scss";

const Navbar = () => {
  const [langrus, setLangrus] = useState(false);
  console.log(langrus);
  const handleToggle = () => {
    setLangrus((prevState) => !prevState); // Toggle the boolean value
  };
  return (
    <div className="navbar">
      <div className="navbar__wrapper">
        <NavLink className={"navbar__logolink"} to={"/"}>
          <img src={logo} alt="" className="navbar__logo" />
        </NavLink>
        <ul className="navbar__ul">
          <li className="navbar__li">
            <NavLink className={"navbar__link"} to={"/"}>
              Home
            </NavLink>
          </li>
          <li className="navbar__li">
            <p className="navbar__link navbar__droplink">
              Programs{" "}
              <svg
                width="12"
                height="7"
                viewBox="0 0 12 7"
                xmlns="http://www.w3.org/2000/svg"
                className="arrow"
              >
                <path d="M5.57939 6.97499C5.44606 6.97499 5.32106 6.95415 5.20439 6.91249C5.08773 6.87082 4.97939 6.79999 4.87939 6.69999L0.279395 2.09999C0.0960612 1.91665 0.00439453 1.68332 0.00439453 1.39999C0.00439453 1.11665 0.0960612 0.883321 0.279395 0.699988C0.462728 0.516654 0.696061 0.424988 0.979395 0.424988C1.26273 0.424988 1.49606 0.516654 1.67939 0.699988L5.57939 4.59999L9.47939 0.699988C9.66273 0.516654 9.89606 0.424988 10.1794 0.424988C10.4627 0.424988 10.6961 0.516654 10.8794 0.699988C11.0627 0.883321 11.1544 1.11665 11.1544 1.39999C11.1544 1.68332 11.0627 1.91665 10.8794 2.09999L6.27939 6.69999C6.17939 6.79999 6.07106 6.87082 5.95439 6.91249C5.83773 6.95415 5.71273 6.97499 5.57939 6.97499Z" />
              </svg>
              <div className="navbar__dropdown">
                <NavLink className={"navbar__link"} to={"/programs1"}>
                  International educational programs
                </NavLink>
                <hr className="navbar__hr" />
                <NavLink className={"navbar__link"} to={"/programs2"}>
                  Specialized courses
                </NavLink>
                <hr className="navbar__hr" />
                <NavLink className={"navbar__link"} to={"/programs3"}>
                  Islamic Finance Literacy Course
                </NavLink>
                <hr className="navbar__hr" />
                <NavLink className={"navbar__link"} to={"/programs4"}>
                  Certification program
                </NavLink>
              </div>
            </p>
          </li>

          <li className="navbar__li">
            <NavLink className={"navbar__link"} to={"/tools"}>
              Finance tools
            </NavLink>
          </li>
          <li className="navbar__li">
            <NavLink className={"navbar__link"} to={"/contact"}>
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="navbar__right">
          <div className="navbar__language">
            {langrus ? (
              <>
                <svg
                  width="29"
                  height="18"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 55.32 38.52"
                  style={{ enableBackground: "new 0 0 55.32 38.52" }}
                  xmlSpace="preserve"
                >
                  <style
                    type="text/css"
                    dangerouslySetInnerHTML={{
                      __html:
                        ".st0{fill:#FFFFFF;} .st1{fill:#D52B1E;} .st2{fill:#0039A6;} .st3{fill:none;stroke:#CCCCCC;stroke-width:0.1199;stroke-miterlimit:2.6131;}",
                    }}
                  />
                  <g>
                    <path
                      className="st0"
                      d="M3.09,0.06h49.13c1.67,0,3.03,1.36,3.03,3.03v16.17H0.06V3.09C0.06,1.42,1.42,0.06,3.09,0.06L3.09,0.06z"
                    />
                    <path
                      className="st1"
                      d="M0.06,19.26h55.2v16.17c0,1.67-1.36,3.03-3.03,3.03H3.09c-1.67,0-3.03-1.37-3.03-3.03V19.26L0.06,19.26z"
                    />
                    <polygon
                      className="st2"
                      points="0.06,12.86 55.26,12.86 55.26,25.66 0.06,25.66 0.06,12.86"
                    />
                    <path
                      className="st3"
                      d="M3.09,0.06h49.13c1.67,0,3.03,1.36,3.03,3.03v32.33c0,1.67-1.36,3.03-3.03,3.03H3.09 c-1.67,0-3.03-1.37-3.03-3.03V3.09C0.06,1.42,1.42,0.06,3.09,0.06L3.09,0.06z"
                    />
                  </g>
                </svg>
              </>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 60 30"
                width="29"
                height="18"
              >
                <clipPath id="t">
                  <path d="M0,0 v30 h60 v-30 z" />
                </clipPath>
                <clipPath id="x">
                  <path d="M30,15 h30 v-15 h-30 v-15 h-30 v15 h-30 v15 h30 v15 h30 z" />
                </clipPath>
                <g clip-path="url(#t)">
                  <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
                  <path
                    d="M0,0 l60,30 m0,-30 l-60,30"
                    stroke="#fff"
                    stroke-width="6"
                  />
                  <path
                    d="M0,0 l60,30 m0,-30 l-60,30"
                    stroke="#C8102E"
                    stroke-width="4"
                    clip-path="url(#x)"
                  />
                  <path
                    d="M30,0 v30 m-30,-15 h60"
                    stroke="#fff"
                    stroke-width="10"
                  />
                  <path
                    d="M30,0 v30 m-30,-15 h60"
                    stroke="#C8102E"
                    stroke-width="6"
                  />
                </g>
              </svg>
            )}
            <select onChange={handleToggle} className="navbar__lang">
              <option value="eng" className="navbar__langoption">
                ENG
              </option>
              <option value="rus" className="navbar__langoption">
                RUS
              </option>
            </select>
          </div>
          <hr className="navbar__hrbottom" />
          <NavLink to={"/login"} className="navbar__signin">
            Log in
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
