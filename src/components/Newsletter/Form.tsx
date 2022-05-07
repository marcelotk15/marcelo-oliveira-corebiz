import React from "react";
import { useForm } from "react-hook-form";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import { useAppDispatch, useAppSelector } from "@/hooks/redux-typed-hooks";

import { sendNewsletter } from "@/store/Newsletter/Newsletter.store";
import { NewsletterSend } from "@/store/Newsletter/Newsletter.types";

export default function Form () {
  const { register, handleSubmit, formState: { errors } } = useForm<NewsletterSend>();

  const dispatch = useAppDispatch();

  const isLoading = useAppSelector((store) => store.newsletter.isLoading); 

  const onSubmit = (data: NewsletterSend) => dispatch(sendNewsletter(data));

  return (
    <div className="flex flex-col pt-6 pb-4 md:pb-9 gap-2 items-center">
      <h2 className="font-bold text-2xl">
        Participe de nossas news com promoções e novidades!
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center md:flex-row md:gap-2 w-full"
      >

        <label className="flex flex-col gap-1 mt-2 md:mt-0 md:w-72">
          <input
            placeholder={"Digite seu nome"}
            {...register("name", { required: true })}
            className={`w-100 text-xs p-4 rounded border border-transparent ${errors.name && 'border-brand-danger'}`}
          />
          {errors.name &&
            <span className="text-brand-danger text-xs">
              Preencha com seu nome completo
            </span>
          }
        </label>
        
        <label className="flex flex-col gap-1 mt-2 md:mt-0 md:w-72">
          <input
            placeholder={"Digite seu e-mail"}
            type="email"
            {...register("email", { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })}
            className={`w-100 text-xs p-4 rounded border border-transparent ${errors.email && 'border-brand-danger'}`}
          />
          {errors.email &&
            <span className="text-brand-danger text-xs">
              {errors.email?.type === 'required' && "E-mail é requirido."}
              {errors.email?.type === 'pattern' && "Preencha com um e-mail válido."}
            </span>
          }
        </label>      

        <button
          type="submit"
          className="bg-black text-white rounded py-4 md:py-0 mt-2 md:mt-0 font-bold md:h-12 md:px-8 flex gap-2 items-center justify-center"
        >
          {isLoading
           ? <><AiOutlineLoading3Quarters className="animate-spin" /> Enviando</>
           : "Eu quero!"
          }
        </button>
      </form>
    </div>
  );
}
