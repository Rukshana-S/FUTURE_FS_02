import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ gender, category, products }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {products.map(product => (
    <ProductCard
  key={product.id}
  product={product}
  gender={gender}
  category={category}
/>
    ))}
  </div>
);

export default ProductList;
