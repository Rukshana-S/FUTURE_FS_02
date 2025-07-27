// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';
import { useTheme } from './ThemeContext';

const Navbar = () => {
  const { cartItems } = useCart();
  const { toggleTheme, theme } = useTheme();
  const totalItems = cartItems.length;

  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white flex justify-between items-center px-6 py-4 z-50 shadow-lg h-20">
      {/* Left - Logo */}
      <Link to="/" className="text-3xl font-bold hover:text-pink-400 transition-all">
        WEARLY 🛍️
      </Link>

      {/* Right - Links */}
      <div className="flex items-center space-x-6 text-lg font-semibold">
        <Link to="/contact" className="hover:text-yellow-400 transition-all">
          📞 Contact
        </Link>
        <Link to="/cart" className="relative hover:text-yellow-400 transition-all">
          🛒 Cart
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-4 bg-pink-600 text-white text-sm rounded-full px-2 py-0.5">
              {totalItems}
            </span>
          )}
        </Link>
        <button
          onClick={toggleTheme}
          className="hover:text-yellow-400 transition text-xl"
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
