import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Select from "react-select";
import { useTranslation } from "react-i18next"; // i18next import

const Login = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [error, setError] = useState(null);
  const { t } = useTranslation(); // `t` funksiyasi

  useEffect(() => {
    // API so'rovini yuborish
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => {
        // API javobini tekshirish
        if (!response.ok) {
          throw new Error("Failed to fetch countries");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data); // API ma'lumotlarini tekshirish
        if (data) {
          const formattedCountries = data.map((country) => ({
            value: country.cca2, // Country code
            label: (
              <div>
                {country.flag}
                {country.name.common} {/* Country name */}
              </div>
            ),
          }));
          setCountries(formattedCountries);
          setSelectedCountry(formattedCountries[0]); // Default tanlangan davlat
        } else {
          throw new Error("Invalid data format");
        }
      })
      .catch((error) => {
        console.error("Error fetching countries:", error);
        setError(error.message); // Xatolikni state'ga saqlash
      });
  }, []);

  return (
    <div className="login">
      <div className="login__wrapper">
        <div className="login__left">
          <h1 className="login__title">{t("get_started")}</h1>{" "}
          {/* Tarjima qilingan matn */}
          <div className="login__desc">
            <p>{t("already_have_account")}</p>
            <NavLink style={{ color: "#009688" }} to={"/signin"}>
              {t("sign_in")} {/* Tarjima qilingan matn */}
            </NavLink>
          </div>
          <form className="login__form">
            <input
              className="login__input"
              required
              type="text"
              placeholder={t("enter_name")}
            />
            <input
              className="login__input"
              required
              type="email"
              placeholder={t("enter_email")}
            />
            {/* Agar xato bo'lsa, foydalanuvchiga xabarni ko'rsatish */}
            {error && <p className="error-message">{error}</p>}
            <Select
              options={countries} // Formatlangan mamlakatlar
              value={selectedCountry} // Tanlangan davlat
              onChange={(selectedOption) => setSelectedCountry(selectedOption)} // Tanlovni boshqarish
              placeholder={t("select_country")} // Tarjima qilingan matn
              className="login__select"
            />
            <button type="submit" className="login__btn">
              {t("log_in")}
            </button>
          </form>
        </div>
        <div className="login__right">
          <div className="login__info">
            <h3>{t("welcome_message")}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
