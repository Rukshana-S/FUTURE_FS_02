import React from 'react';
import { Link } from 'react-router-dom';

const OrderConfirmation = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-4">
      <div className="max-w-xl w-full text-center bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-md">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-green-600">🎉 Order Confirmed!</h1>
        <p className="text-lg mb-6">
          Thank you for shopping with <span className="font-semibold text-blue-600">WEARLY</span>!
        </p>
        <p className="text-md mb-8 text-gray-600 dark:text-gray-300">
          Your order has been successfully placed and is now being processed. A confirmation email will be sent shortly.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
        >
          Back to Home 🏠
        </Link>
      </div>
    </div>
  );
};

export default OrderConfirmation;
