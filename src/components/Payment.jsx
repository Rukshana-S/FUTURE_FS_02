import React, { useState } from 'react';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Payment = () => {
  const { cartItems, setCartItems } = useCart();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
  });

  const total = cartItems.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);

  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePay = () => {
    if (!form.name || !form.email || !form.address || !form.phone) {
      toast.error('⚠️ Please fill all the details');
      return;
    }

    toast.success('✅ Payment Successful! Redirecting...');
    setCartItems([]); // clear the cart

    setTimeout(() => {
      navigate('/orderconfirmation');
    }, 2000);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 mt-24 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded shadow">
      <h2 className="text-3xl font-bold mb-6 text-center">Payment Details 💳</h2>

      <div className="grid gap-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleInput}
          className="border px-4 py-2 rounded dark:bg-gray-800 dark:text-white"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleInput}
          className="border px-4 py-2 rounded dark:bg-gray-800 dark:text-white"
        />
        <input
          type="text"
          name="address"
          placeholder="Shipping Address"
          value={form.address}
          onChange={handleInput}
          className="border px-4 py-2 rounded dark:bg-gray-800 dark:text-white"
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleInput}
          className="border px-4 py-2 rounded dark:bg-gray-800 dark:text-white"
        />
      </div>

      <div className="mt-6 text-xl font-bold">
        Total Amount: ₹{total}
      </div>

      <button
        onClick={handlePay}
        className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded transition-all"
      >
        Confirm & Pay
      </button>
    </div>
  );
};

export default Payment;
