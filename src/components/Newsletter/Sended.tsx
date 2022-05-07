import React from "react";

import { useAppDispatch } from "@/hooks/redux-typed-hooks";
import { canResendNewsletter } from "@/store/Newsletter/Newsletter.store";

export default function Sended() {
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col items-center pt-8 pb-6">
      <p className="text-lg font-bold">
        Seu e-mail foi cadastrado com sucesso!
      </p>

      <p className="text-center">
        A partir de agora você receberá as novidade e ofertas exclusivas.
      </p>

      <button
        onClick={() => dispatch(canResendNewsletter())}
        className="bg-black rounded text-white mt-4 py-4 px-10 md:px-24"
      >
        Cadastrar novo e-mail
      </button>
    </div>
  );
}