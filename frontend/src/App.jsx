import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import AllShoes from "./components/AllShoes";
import Womens from "./components/Womens";
import Mens from "./components/Mens";
import Kids from "./components/Kids";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Payment from "./components/Payment";
import Confirmation from "./components/Confirmation";
import IndividualShoe from "./components/IndividualShoe";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all" element={<AllShoes />} />
          <Route path="/womens" element={<Womens />} />
          <Route path="/womens/:id" element={<IndividualShoe />} />
          <Route path="/mens" element={<Mens />} />
          <Route path="/mens/:id" element={<IndividualShoe />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/kids/:id" element={<IndividualShoe />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cart/payment" element={<Payment />} />
          <Route path="/cart/confirmation" element={<Confirmation />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
