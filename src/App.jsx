// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import MenCategory from './components/MenCategory';
import WomenCategory from './components/WomenCategory';
import ProductPage from './components/ProductPage';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import Payment from "./components/Payment";
import Contact from "./components/Contact";
import OrderConfirmation from './components/OrderConfirmation';

const App = () => (
  <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen transition-colors duration-300">
    <Navbar />
    <div className="pt-20 px-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<MenCategory />} />
        <Route path="/women" element={<WomenCategory />} />
        <Route path="/product/:gender/:category/:id" element={<ProductPage />} />
        <Route path="/:gender/:category/:productId" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/contact" element={<Contact />} />
       <Route path="/orderconfirmation" element={<OrderConfirmation />} />
      </Routes>
    </div>
  </div>
);

export default App;
