import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, gender, category }) => (
  <div className="bg-white border rounded-lg shadow hover:shadow-lg transition-all">
    <img src={product.images[0]} alt={product.name} className="w-full h-64 object-cover rounded-t-lg" />
    <div className="p-4">
      <h4 className="font-bold text-lg">{product.name}</h4>
      <p className="text-gray-600 mb-2">₹{product.price}</p>
      <Link
        to={`/product/${gender}/${category}/${product.id}`}
        className="inline-block mt-2 px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
      >
        View Details
      </Link>
    </div>
  </div>
);

export default ProductCard;
