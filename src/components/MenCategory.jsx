import React from 'react';
import ProductList from './ProductList';
import { menData } from '../data/menData';

const MenCategory = () => (
  <div>
    <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">Boys' Collection</h2>
    {Object.entries(menData).map(([category, products]) => (
      <div key={category} className="mb-8">
        <h3 className="text-2xl font-semibold mb-4 capitalize">{category}</h3>
        <ProductList gender="men" category={category} products={products} />
      </div>
    ))}
  </div>
);

export default MenCategory;
