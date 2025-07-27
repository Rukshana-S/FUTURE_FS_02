import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { menData } from '../data/menData';
import { womenData } from '../data/womenData';
import { useCart } from './CartContext';
import { toast } from 'react-toastify';

const ProductDetails = () => {
  const { gender, category, productId } = useParams();
  const { addToCart } = useCart();

  const dataMap = {
    men: menData,
    women: womenData,
  };

  const product = dataMap[gender]?.[category]?.find(item => item.id === productId);
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(product?.images?.[0] || product?.image);

  if (!product) return <p className="text-center text-xl mt-10">Product not found</p>;

  const handleAddToCart = () => {
    addToCart({ ...product, size: selectedSize, quantity });
    toast.success('Item added to cart!');
  };

  return (
    <div className="max-w-6xl mx-auto p-6 mt-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded shadow transition-all">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Image + thumbnails */}
        <div>
          <img src={activeImage} alt={product.name} className="w-full h-auto rounded" />
          <div className="flex gap-2 mt-4">
            {product.images?.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`thumb-${idx}`}
                className={`w-16 h-16 object-cover rounded cursor-pointer border ${activeImage === img ? 'border-black dark:border-white' : 'border-gray-300 dark:border-gray-600'}`}
                onClick={() => setActiveImage(img)}
              />
            ))}
          </div>
        </div>

        {/* Product details */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">{product.name}</h2>
          <p className="text-gray-600 dark:text-gray-300">{product.specs}</p>
          <p className="text-xl font-semibold text-green-700 dark:text-green-400">₹{product.price}</p>

          {/* Rating */}
          <div>
            <p className="font-semibold">Rating:</p>
            <div className="text-yellow-500 text-lg">★★★★☆ <span className="text-gray-500 text-sm ml-2">(124 reviews)</span></div>
          </div>

          {/* Size */}
          <div>
            <label className="block font-semibold">Select Size:</label>
            <div className="flex gap-2 mt-1">
              {['S', 'M', 'L', 'XL'].map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-1 border rounded transition-all ${
                    selectedSize === size
                      ? 'bg-black text-white dark:bg-white dark:text-black'
                      : 'bg-gray-200 dark:bg-gray-700 dark:text-white'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div>
            <label className="block font-semibold">Quantity:</label>
            <div className="flex items-center gap-3 mt-1">
              <button
                onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                className="px-3 py-1 bg-gray-300 dark:bg-gray-700 rounded text-xl"
              >–</button>
              <span className="text-xl">{quantity}</span>
              <button
                onClick={() => setQuantity(prev => prev + 1)}
                className="px-3 py-1 bg-gray-300 dark:bg-gray-700 rounded text-xl"
              >+</button>
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className="mt-4 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Related Products */}
      <hr className="my-8 border-gray-300 dark:border-gray-600" />
      <h3 className="text-2xl font-bold mb-4">Related Products</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {dataMap[gender]?.[category]
          ?.filter(p => p.id !== productId)
          .slice(0, 3)
          .map((related) => (
            <div key={related.id} className="border p-3 rounded shadow bg-white dark:bg-gray-800 dark:text-white">
              <img src={related.images?.[0]} alt={related.name} className="w-full h-40 object-cover rounded mb-2" />
              <h4 className="font-semibold">{related.name}</h4>
              <p className="text-sm text-gray-500 dark:text-gray-300">₹{related.price}</p>
              <button
                onClick={() => addToCart({ ...related, size: selectedSize, quantity: 1 })}
                className="mt-2 w-full bg-blue-600 text-white py-1 rounded hover:bg-blue-700"
              >
                Add
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductDetails;
