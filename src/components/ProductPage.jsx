import React from 'react';
import { useParams } from 'react-router-dom';
import { menData } from '../data/menData';
import { womenData } from '../data/womenData';
import { useCart } from './CartContext';

const ProductPage = () => {
  const { gender, category, id } = useParams();
  const data = gender === 'men' ? menData : womenData;
  const product = data[category]?.find(item => item.id.toString() === id);
  const { addToCart } = useCart();

  if (!product) return <p>Product not found</p>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          {product.images.map((src, index) => (
            <img key={index} src={src} alt={`${product.name} ${index}`} className="w-full rounded-lg" />
          ))}
        </div>
        <div>
          <p className="text-xl font-semibold mb-2">₹{product.price}</p>
          <p className="mb-4">{product.specs}</p>
          <button
            onClick={() => addToCart(product)}
            className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
