import React from "react";
import { Link } from "react-router-dom";
import menImg from "../assets/men.png";
import womenImg from "../assets/women.png";

const Home = () => (
  <div className="flex flex-col items-center mt-24 px-4">
    {/* Heading */}
    <h1 className="text-4xl font-bold mb-10 text-center text-gray-900 dark:text-white">
      <span className="text-blue-600 dark:text-blue-400">
        WELCOME TO WEARLY
      </span>
    </h1>

    {/* Men & Women Categories */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
      <Link
        to="/men"
        className="relative group rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform h-64"
      >
        <img
          src={menImg}
          alt="Boys Collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white text-2xl font-bold">
          Boys
        </div>
      </Link>

      <Link
        to="/women"
        className="relative group rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform h-64"
      >
        <img
          src={womenImg}
          alt="Girls Collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white text-2xl font-bold">
          Girls
        </div>
      </Link>
    </div>

    {/* 🎁 Surprise Deal */}
    <div className="bg-black text-white text-center p-6 mt-10 mx-4 rounded-xl shadow-lg w-full max-w-4xl">
      <h2 className="text-2xl font-bold mb-2">🎁 Today’s Surprise Deal</h2>
      <p className="text-sm">
        Use Code <span className="text-blue-400 font-bold">WEARLY50</span> to get ₹50 OFF
      </p>
      <p className="text-sm mt-1">Only valid till midnight 🕛</p>
      <Link
        to="/men"
        className="inline-block mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Shop Now
      </Link>
    </div>

    {/* 🔥 Trending */}
    <div className="bg-blue-500 text-white w-full py-2 mt-6 overflow-hidden whitespace-nowrap text-center text-lg font-semibold shadow-md">
      <span className="inline-block animate-marquee px-4">
        🛍️ Trending: Oversized Hoodies • Summer Frocks • Cotton Sarees • Sneakers • Flat 50% OFF!
      </span>
    </div>
  </div>
);

export default Home;
