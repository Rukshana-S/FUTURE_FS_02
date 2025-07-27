import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Optional: add form validation here
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill all fields");
      return;
    }

    console.log("Form submitted:", formData);
    setSubmitted(true);

    // Clear form
    setFormData({ name: "", email: "", message: "" });

    // In real apps, send to server or API here
  };

  return (
    <div className="max-w-2xl mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Us 📩</h2>
      {submitted && (
        <div className="bg-green-100 text-green-700 p-4 rounded mb-4">
          Thank you! Your message has been sent.
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded h-32 resize-none"
        ></textarea>
        <button
          type="submit"
          className="bg-black text-white py-3 px-6 rounded hover:bg-gray-800 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
