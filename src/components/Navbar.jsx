import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';

const Navbar = () => {
  const { cartItems } = useCart();
  const totalItems = cartItems.length;

  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white flex justify-between items-center px-6 py-4 z-50 shadow-lg h-20">
      <Link to="/" className="text-3xl font-bold hover:text-pink-400 transition-all">
        WEARLY 🛍️
      </Link>
      <Link
        to="/cart"
        className="relative text-lg font-semibold hover:text-yellow-400 transition-all"
      >
        🛒 Cart
        {totalItems > 0 && (
          <span className="ml-1 bg-pink-600 text-white text-sm rounded-full px-2 py-0.5 absolute -top-2 -right-4">
            {totalItems}
          </span>
        )}
      </Link>
    </nav>
  );
};

export default Navbar;
