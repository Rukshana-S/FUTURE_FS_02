import { useState } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import boysProducts from "./data/boysData";
import girlsProducts from "./data/girlsData";

function App() {
  const [category, setCategory] = useState("boys");

  const products = category === "boys" ? boysProducts : girlsProducts;

  return (
    <div>
      <Navbar setCategory={setCategory} />
      <ProductList products={products} />
    </div>
  );
}

export default App;
