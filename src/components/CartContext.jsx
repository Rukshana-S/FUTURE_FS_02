import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // 🛒 Function to add item to cart
  const addToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
  };

  // 🗑️ Function to remove item from cart
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// 👇 Hook to access cart context
export const useCart = () => useContext(CartContext);
