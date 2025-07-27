import React, { useState, useEffect } from 'react';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const [paymentDone, setPaymentDone] = useState(false);
  const { clearCart } = useCart();
  const navigate = useNavigate();

  const handleConfirm = () => {
    setPaymentDone(true);
    clearCart();

    setTimeout(() => {
      navigate('/');
    }, 3000); // Redirect after 3 seconds
  };

  return (
    <div className="max-w-2xl mx-auto p-6 mt-10 text-center">
      {!paymentDone ? (
        <>
          <h1 className="text-3xl font-bold mb-6">Payment Gateway</h1>
          <p className="mb-4">This is a mock payment page. Click below to complete your order.</p>
          <button
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={handleConfirm}
          >
            Confirm Payment
          </button>
        </>
      ) : (
        <div className="text-green-600 text-2xl font-semibold">
          ✅ Payment Successful! Redirecting to Home...
        </div>
      )}
    </div>
  );
};

export default Payment;
