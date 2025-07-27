import React from 'react';
import ProductList from './ProductList';
import { womenData } from '../data/womenData';

const WomenCategory = () => (
  <div>
    <h2 className="text-3xl font-bold mb-6 text-center text-pink-700">Girls' Collection</h2>
    {Object.entries(womenData).map(([category, products]) => (
      <div key={category} className="mb-8">
        <h3 className="text-2xl font-semibold mb-4 capitalize">{category}</h3>
        <ProductList gender="women" category={category} products={products} />
      </div>
    ))}
  </div>
);

export default WomenCategory;
