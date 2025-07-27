import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import MenCategory from './components/MenCategory';
import WomenCategory from './components/WomenCategory';
import ProductPage from './components/ProductPage';
import Cart from './components/Cart';
import Payment from "./components/Payment";

const App = () => (
  <div className="bg-white min-h-screen text-gray-800">
    <Navbar />
    <div className="pt-20 px-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<MenCategory />} />
        <Route path="/women" element={<WomenCategory />} />
        <Route path="/product/:gender/:category/:id" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </div>
  </div>
);

export default App;
