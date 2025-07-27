import React from "react";
import { Link } from "react-router-dom";
import menImg from "../assets/men.png";
import womenImg from "../assets/women.png";

const Home = () => (
  <div className="flex flex-col items-center mt-24 px-4">
    <h1 className="text-4xl font-bold mb-10 text-center text-gray-800">
      WELCOME TO WEARLY
    </h1>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
      {/* Boys Collection */}
      <Link
        to="/men"
        className="relative group rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform h-64"
      >
        <img
          src={menImg}
          alt="Boys Collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-2xl font-bold">
           Boys 
        </div>
      </Link>

      {/* Girls Collection */}
      <Link
        to="/women"
        className="relative group rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform h-64"
      >
        <img
          src={womenImg}
          alt="Girls Collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-2xl font-bold">
           Girls
        </div>
      </Link>
    </div>
  </div>
);

export default Home;
