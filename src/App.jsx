import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Womens from "./components/Womens";
import Mens from "./components/Mens";
import Kids from "./components/Kids";
import Home from "./components/Home";
import Cart from "./components/Cart";
import IndividualShoe from "./components/IndividualShoe";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/womens" element={<Womens />}></Route>
        <Route path="/womens/:id" element={<IndividualShoe />}></Route>
        <Route path="/mens" element={<Mens />}></Route>
        <Route path="/mens/:id" element={<IndividualShoe />}></Route>
        <Route path="/kids" element={<Kids />}></Route>
        <Route path="/kids/:id" element={<IndividualShoe />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
