function ProductCard({ product }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-xs">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded-md mb-4"
      />
      <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
      <p className="text-gray-700 mb-4">₹{product.price}</p>
      <button className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800">
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
