interface ProductListProps {
  FoodItems: ProductType[];
}
import { useState } from "react";
import type { ProductType } from "../types/ProductType";
import ProductItem from "./ProductItem";

const ProductList = ({ FoodItems }: ProductListProps) => {
  const [count, setCount] = useState<number>(0);
  

  const handelIncrement = () => {
    setCount((prev) => prev + 1);
  };

  
  return (
    <div className="flex flex-col">
      <h1 className="bg-purple-600 rounded-xl mb-10 w-60 text-white py-1">
        Number of Products: {count}
      </h1>
      
      <div className="flex gap-4">
        {FoodItems.map((item) => (
          <ProductItem
          product={item}
          key={item.id}
          onIncrement={handelIncrement}          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
