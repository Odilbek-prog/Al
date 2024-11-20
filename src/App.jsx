import { useState } from "react";
import "./App.scss";
import { Route, Routes, useLocation } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Signin from "./Pages/Signin";
import Programs from "./Pages/Programs";

function App() {
  const location = useLocation(); // `pathname` faqat location orqali olinadi

  // Agar "login" yoki "signin" sahifasida bo'lsa, Navbar va Footer ni ko'rsatmaydi
  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/signin";

  return (
    <>
      {!isAuthPage && <Navbar />}{" "}
      {/* Navbarni faqat asosiy sahifalar uchun ko'rsatadi */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/programs1" element={<Programs />} />
      </Routes>
      {!isAuthPage && <Footer />}{" "}
      {/* Footerni faqat asosiy sahifalar uchun ko'rsatadi */}
    </>
  );
}

export default App;
