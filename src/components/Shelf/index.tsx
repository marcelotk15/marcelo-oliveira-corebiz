import React from "react";

import { Product } from "@/store/Products/Products.types";
import { useAppDispatch } from "@/hooks/redux-typed-hooks";
import { orderFormAdd } from "@/store/OrderForm/OrderForm.store";

import StarRating from "./StarRating ";
import Price from "./Price";
import DiscountFlag from "./DiscountFlag";

export default function Shelf ({ product }: { product: Product }) {
  const dispatch = useAppDispatch();

  return (
    <div className="mx-3 md:mx-11">
      <div className="flex flex-col justify-center md:hover:bg-brand-gray-100 group pb-4">
        <div className="relative">
          <img
            src={product.imageUrl}
            alt={product.productName}
            className="w-full"
          />

          <DiscountFlag product={product} />
        </div>

        <h2 className="text-xs font-semibold text-brand-text-gray-50 text-center mt-1 h-8">
          {product.productName}
        </h2>

        <div className="flex gap-1 mt-2 justify-center">
          <StarRating
            stars={product.stars}
          />
        </div>

        <Price product={product} />

        <div className="flex justify-center">
          <button
            onClick={() => dispatch(orderFormAdd(product))}
            className="bg-black text-white rounded py-2 px-8 md:opacity-0 md:group-hover:opacity-100"
          >
            COMPRAR
          </button>
        </div>
      </div> 
    </div>
  );
};
