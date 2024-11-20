import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Select from "react-select";

const Login = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    fetch(
      "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
    )
      .then((response) => response.json())
      .then((data) => {
        // Agar API'dan kelgan ma'lumot formati boshqacha bo'lsa, moslashuv o'rnatiladi
        if (data && data.countries) {
          const formattedCountries = data.countries.map((country) => ({
            value: country.value, // API-dan kelgan "value" ni oling
            label: country.label, // API-dan kelgan "label" ni oling
          }));
          setCountries(formattedCountries);
          setSelectedCountry(formattedCountries[0]); // Default bo'lib birinchi davlatni tanlang
        }
      })
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);
  return (
    <div className="login">
      <div className="login__wrapper">
        <div className="login__left">
          <h1 className="login__title">Get started</h1>
          <div className="login__desc">
            <p>Already have an account?</p>
            <NavLink style={{ color: "#009688" }} to={"/signin"}>
              Sign in
            </NavLink>
          </div>
          <form className="login__form">
            <input
              className="login__input"
              required
              type="text"
              placeholder="Enter your name"
            />
            <input
              className="login__input"
              required
              type="email"
              placeholder="Enter your email"
            />
            <Select
              options={countries} // Formatlangan mamlakatlar
              value={selectedCountry} // Tanlangan davlat
              onChange={(selectedOption) => setSelectedCountry(selectedOption)} // Tanlovni boshqarish
              placeholder="Select a country"
              className="login__select"
            />
            <button type="submit" className="login__btn">
              Log in
            </button>
          </form>
        </div>
        <div className="login__right">
          <div className="login__info">
            <h3>
              Welcome to Al Muamalat – Empowering Your Journey in Islamic
              Finance
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
