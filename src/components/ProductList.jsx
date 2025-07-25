// src/components/ProductList.jsx
import ProductCard from './ProductCard'

const products = [
  {
    id: 1,
    name: 'T-Shirt',
    price: 499,
    image: 'https://i.pinimg.com/originals/1a/98/d7/1a98d70d0fd95a21835d4aa43615527d.jpg',
  },
  {
    id: 2,
    name: 'Denim Jacket',
    price: 1299,
    image: 'https://cdna.lystit.com/photos/nordstrom/beddc379/wrangler-Mid-Wash-Heritage-Pleated-Denim-Jacket.jpeg',
  },
  {
    id: 3,
    name: 'Sneakers',
    price: 1999,
    image: 'https://img.freepik.com/free-photo/full-white-sneakers-isolated-white-background_250899-620.jpg?w=2000',
  },
  {
    id: 4,
    name: 'Hoodie',
    price: 899,
    image: 'https://images-na.ssl-images-amazon.com/images/I/61FA5tEHq%2BL._UY879_.jpg',
  },
];

function ProductList() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;