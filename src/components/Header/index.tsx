import React from "react";

import MiniCart from "./MiniCart";

import logoCorebiz from "@/assets/logo_corebiz.svg";
import BurgerMenuIcon from "@/assets/icons/burguer-menu.svg";
import SearchIcon from "@/assets/icons/search.svg";
import UserIcon from "@/assets/icons/user.svg";

export default function Header() {
  return (
    <header className="bg-white">
      <div className="container mx-auto pt-2 md:pt-4 pb-3 md:pb-6 flex items-baseline flex-wrap md:flex-nowrap md:items-end md:gap-10">
        <div className="md:hidden">
          <img
            src={BurgerMenuIcon}
            alt="Menu"
            className="h6"
          />
        </div>

        <a
          href="/"
          className="mx-auto md:order-1 md:mx-0"
        >
          <img
            src={logoCorebiz}
            alt="Corebiz"
            className="h-8 md:h-12"
          />
        </a>

        <nav className="md:order-3 flex gap-5">
          <div className="hidden md:flex gap-2 items-center text-gray-400 cursor-pointer">
            <img src={UserIcon} alt="Minha Conta" className="h-6" />

            Minha Conta
          </div>

          <MiniCart />
        </nav>

        <div className="w-full mt-5 relative md:order-2 md:w-3/5 md:ml-auto md:mt-0">
          <input
            type="text"
            placeholder="O que está procurando?"
            className="w-full py-2 border-b border-gray-500 mb:pb-1"
          />

          <img
            src={SearchIcon}
            alt="Bucar"
            className="w-5 absolute right-1 top-1/2 -translate-y-1/2"
          />
        </div>
      </div>
    </header>
  );
}