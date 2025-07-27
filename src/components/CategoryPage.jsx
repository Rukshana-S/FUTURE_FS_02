// CategoryPage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { menData } from "../data/menData";
import womenData from "../data/womenData";
import ProductList from "./ProductList";

const CategoryPage = () => {
  const { gender, category } = useParams();
  const products = gender === "men" ? menData[category] : womenData[category];

  if (!products) return <p className="p-6">No products found for {category}</p>;

  return (
    <div>
      <h2 className="text-2xl font-bold p-6 capitalize text-center text-pink-600">
        {gender} - {category}
      </h2>
      <ProductList products={products} />
    </div>
  );
};

export default CategoryPage;