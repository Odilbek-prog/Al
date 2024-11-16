import { useState } from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Signin from "./Pages/Signin";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
