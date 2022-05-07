import React from "react";

import { Product } from "@/store/Products/Products.types";
import FormatPrice from "@/helpers/price";

export default function Price({ product }: { product: Product }) {
  return (
    <>
      <div className="text-brand-text-gray-50 line-through text-sm h-5 text-center mt-1">
        {product.listPrice &&
          <>
            de {FormatPrice(product.listPrice / 100)}
          </>
        }
      </div>

      <div className="font-bold text-lg text-center">
        por {FormatPrice(product.price / 100)}
      </div>

      <div className="text-brand-text-gray-50 text-sm h-5 text-center mt-1">
        {product?.installments?.[0] &&
          <>
            ou em {product.installments[0]?.quantity} de {FormatPrice(product.installments[0].value / 100)}
          </>
        }
      </div>
    </>
  );
}