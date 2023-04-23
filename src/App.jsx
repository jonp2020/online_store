import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Womens from "./components/Womens";
import Mens from "./components/Mens";
import Kids from "./components/Kids";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/womens" element={<Womens />}></Route>
        <Route path="/mens" element={<Mens />}></Route>
        <Route path="/kids" element={<Kids />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
