import React from "react";
import { useParams } from "react-router-dom";
import { menData } from "../data/menData"; // your data file path
import ProductCard from "./ProductCard";

const MenProductPage = () => {
  const { category } = useParams();
  const products = menData[category] || [];

  return (
    <div className="min-h-screen bg-white pt-28 px-6">
      <h2 className="text-3xl font-bold mb-6 capitalize">{category}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        {products.length === 0 && (
          <p className="text-red-500">No products found for {category}</p>
        )}
      </div>
    </div>
  );
};

export default MenProductPage;
