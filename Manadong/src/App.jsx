import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/AboutUs";
import GoFood from "./pages/GoFood";
import OrderPage from "./pages/OrderPage";
import GrabFood from "./pages/GrabFood";
import ShopeeFood from "./pages/ShopeeFood";
import "tailwindcss/tailwind.css";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/gofood" element={<GoFood />} />
          <Route path="/grabfood" element={<GrabFood />} />
          <Route path="/shopeefood" element={<ShopeeFood />} />
          <Route path="*" element={<Homepage />} />
        </Routes>
    </Router>
  );
}

export default App;
