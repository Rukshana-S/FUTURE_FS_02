import React from 'react';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();
  const navigate = useNavigate();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handlePayment = () => {
    navigate('/payment');
  };

  return (
    <div className="max-w-3xl mx-auto p-4 mt-20">
      <h2 className="text-3xl font-bold mb-6">Your Cart 🛒</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-600">Cart is empty</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item, idx) => (
            <div
              key={idx}
              className="flex justify-between items-center border-b pb-3"
            >
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-600">
                  ₹{item.price} × {item.quantity} = ₹
                  {item.price * item.quantity}
                </p>
                <p className="text-sm text-gray-500">Size: {item.size}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-600 hover:underline"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="text-xl font-bold mt-4">Total: ₹{total}</div>
          <button
            onClick={handlePayment}
            className="mt-4 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Proceed to Payment 💳
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
