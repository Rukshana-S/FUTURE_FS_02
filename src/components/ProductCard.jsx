import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, gender, category }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-xl transition bg-white">
      <img
        src={product.image || product.images?.[0]}
        alt={product.name}
        className="w-full h-48 object-contain mb-4 rounded"
      />
      <h4 className="text-lg font-bold">{product.name}</h4>
      <p className="text-sm text-gray-600">{product.specs}</p>
      <p className="font-semibold text-green-700 mt-1">₹{product.price}</p>

      <Link
        to={`/${gender}/${category}/${product.id}`}
        className="mt-3 inline-block w-full text-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-all"
      >
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
