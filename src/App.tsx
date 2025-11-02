import { useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import type { ProductType } from "./types/ProductType";

function App() {
  const [ViewProducts, setViewProducts] = useState<ProductType[]>([]);

  async function fetchProducts() {
    const responce = await fetch("data.json");
    const data = await responce.json();
    setViewProducts(data);
  }

  return (
    <>
      <div>
        <button
          className="bg-amber-900 text-white rounded-md px-3 py-1 "
          onClick={fetchProducts}
        >
          Fetch Data
        </button>
        <ProductList FoodItems={ViewProducts} />
      </div>
    </>
  );
}

export default App;
