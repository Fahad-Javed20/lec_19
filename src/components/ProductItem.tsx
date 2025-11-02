import type { ProductType } from "../types/ProductType";

type ProductItemProps = {
  product: ProductType;
  onIncrement: () => void;
};

const ProductItem = ({ product, onIncrement }: ProductItemProps) => {

  return (
    <div className="bg-white shadow-md w-1/4 rounded-md flex flex-col gap-4">
      <div className="relative">
        <img
          className="rounded-md h-72 w-full object-cover"
          src={product.image}
          alt={product.description}
        />
        {product.isNew && (
          <p className="bg-green-600 text-white w-10 h-6 absolute top-4 right-4 flex items-center justify-center rounded">
            New
          </p>
        )}
      </div>

      <a className="text-left mt-10 pl-4" href="#">
        {product.description}
      </a>

      <p className="text-left font-bold pl-4">Price: {product.price}</p>

      <button
        onClick={onIncrement}
        className="bg-amber-900 w-full rounded-2xl mt-6 mb-4 py-1 text-white"
      >
        ADD TO CART
      </button>
    </div>
  );
};

export default ProductItem;
