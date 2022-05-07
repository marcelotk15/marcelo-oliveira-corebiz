import React from "react";

import { Product } from "@/store/Products/Products.types";

export default function DiscountFlag({ product }: { product: Product }) {
  const discountPercent = product.listPrice && Math.floor(((product.listPrice - product.price) / product.listPrice) * 100);

  return(
    <>
      {discountPercent &&
        <div className="absolute right-0 top-0 w-20 h-20 overflow-hidden inline-block">
          <div className="h-28 w-16 bg-brand-red -rotate-45 transform origin-top-left absolute"></div>

          <div className="absolute top-0 right-0 text-white font-black flex flex-col">
            <p className="mr-4">{discountPercent}%</p>

            <p className="text-right mr-1">OFF</p>
          </div>
        </div>
      }
    </>
  );
}