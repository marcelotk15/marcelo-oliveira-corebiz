import React from "react";

import { useAppSelector } from "@/hooks/redux-typed-hooks";
import CartIcon from "@/assets/icons/cart.svg";

export default function MiniCart() {
  const totalItem = useAppSelector((state) => state.orderForm?.items.reduce((acc, act) => acc + act.quantity, 0) || 0);

  return(
    <>
      <div
        className="flex items-center gap-1 cursor-pointer"
      >
        <img
          src={CartIcon}
          alt="Carrinho"
          className="h-6"
        />

        <div className="rounded-full w-5 h-5 flex justify-center items-center bg-red-500 text-sm font-semibold text-white">
          {totalItem}
        </div>
      </div>
    </>
  );
}