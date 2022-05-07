import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { AiOutlineClose } from "react-icons/ai";
import { IoMdTrash } from "react-icons/io";
import { FiInbox } from "react-icons/fi";

import { useAppDispatch, useAppSelector } from "@/hooks/redux-typed-hooks";
import FormatPrice from "@/helpers/price";

import miniCart from "@/assets/icons/cart.svg";
import { orderFormDecrementProduct, orderFormIncrementProduct, orderFormRemoveProduct } from "@/store/OrderForm/OrderForm.store";

export default function MiniCart() {
  const dispatch = useAppDispatch();
  const orderForm = useAppSelector((state) => state.orderForm);

  const [miniCartIsOpen, setMiniCartIsOpen] = useState(false);

  function toogleMiniCart() {
    setMiniCartIsOpen((value) => !value);
  }

  function closeMiniCart() {
    setMiniCartIsOpen(false);
  }

  return(
    <>
      <div
        onClick={toogleMiniCart}
        className="flex items-center gap-1 cursor-pointer"
      >
        <img
          src={miniCart}
          alt="Carrinho"
          className="h-6"
        />

        <div className="rounded-full w-5 h-5 flex justify-center items-center bg-red-500 text-sm font-semibold text-white">
          {orderForm.items.length}
        </div>
      </div>

      <Transition.Root show={miniCartIsOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setMiniCartIsOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity" onClick={closeMiniCart} />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                      <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                        <div className="flex items-start justify-between">
                          <Dialog.Title className="text-lg font-medium text-black"> Carrinho </Dialog.Title>

                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="-m-2 p-2 text-black"
                              onClick={() => closeMiniCart()}
                            >
                              <span className="sr-only">Fechar Carrinho</span>
                              <AiOutlineClose fill="#000000" />
                            </button>
                          </div>
                        </div>

                        <div className="mt-8">
                          <div className="flow-root">
                            {orderForm.items.length ?
                              <ul role="list" className="-my-6 divide-y divide-brand-gray-100">
                                {orderForm.items.map((product, index) => (
                                  <li key={product.productId} className="flex py-6">
                                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-brand-gray-100">
                                      <img
                                        src={product.imageUrl}
                                        alt={product.productName}
                                        className="h-full w-full object-cover object-center"
                                      />
                                    </div>

                                    <div className="ml-4 flex flex-1 flex-col">
                                      <div>
                                        <div className="flex justify-between text-base font-medium text-brand-text-gray-50">
                                          <h3>
                                            {product.productName}
                                          </h3>

                                          <div className="flex flex-col ml-4 items-end">
                                            {product.listPrice &&
                                              <p className="text-sm line-through">{FormatPrice(product.listPrice / 100)}</p>
                                            }
                                            <p className="font-semibold">{FormatPrice(product.price / 100)}</p>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="flex flex-1 items-end justify-between text-sm">
                                        <div className="text-gray-500">
                                          <div className="flex flex-row h-8 w-full rounded-lg relative bg-transparent">
                                            <button
                                              onClick={() => dispatch(orderFormDecrementProduct(index))}
                                              className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-11 rounded-l cursor-pointer outline-none">
                                              <span className="m-auto text-2xl font-thin">−</span>
                                            </button>

                                            <div className="flex items-center justify-center w-11 bg-gray-200">
                                              {product.quantity}
                                            </div>

                                            <button
                                              onClick={() => dispatch(orderFormIncrementProduct(index))}
                                              className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-11 rounded-r cursor-pointer">
                                              <span className="m-auto text-2xl font-thin">+</span>
                                            </button>
                                          </div>
                                        </div>

                                        <div className="flex">
                                          <button
                                            type="button"
                                            className="text-brand-danger hover:text-brand-red"
                                            onClick={() => dispatch(orderFormRemoveProduct(product.productId))}
                                          >
                                            <span className="sr-only">Remove Produto</span>
                                            <IoMdTrash size={20} />
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                ))}
                              </ul> :
                              (
                                <div className="text-brand-gray-150 flex flex-col items-center">
                                  <FiInbox size={64} />
                                  <p className="text-xl">Seu carrinho está vazio.</p>
                                </div>
                              )
                            }
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-brand-gray-100 py-6 px-4 sm:px-6">
                        <div className="flex justify-between text-base font-medium text-black">
                          <p>Subtotal</p>
                          <p>{FormatPrice(orderForm.totalPrice / 100)}</p>
                        </div>

                        <p className="mt-0.5 text-sm text-brand-text-gray-50">Frete e taxas são calculdas no checkout.</p>

                        <div className="mt-6">
                          <a
                            href="#"
                            className="flex items-center justify-center rounded-md border border-transparent bg-gray-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-700"
                          >
                            Finalizar Compra
                          </a>
                        </div>

                        <div className="mt-6 flex justify-center text-center text-sm text-brand-text-gray-50">
                          <p>
                            ou{' '}
                            <button
                              type="button"
                              className="font-medium text-black"
                              onClick={closeMiniCart}
                            >
                              Continue Comprando<span aria-hidden="true"> &rarr;</span>
                            </button>
                          </p>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      {/* <div className="relative z-10" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          onClick={closeMiniCart}
        ></div>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <div className="pointer-events-auto w-screen max-w-md">
                <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                  <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                    <div className="flex items-start justify-between">
                      <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">
                        Carrinho
                      </h2>

                      <div className="ml-3 flex h-7 items-center">
                        <button onClick={closeMiniCart} type="button" className="-m-2 p-2 text-gray-400 hover:text-gray-500">
                          <span className="sr-only">Close panel</span>
                          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    </div>

                    <div className="mt-8">
                      <div className="flow-root">
                        <ul role="list" className="-my-6 divide-y divide-gray-200">
                          {orderForm.items &&
                            orderForm.items.map((product) => (
                              <li className="flex py-6" key={product.productId}>
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img src={product.imageUrl} alt={product.productName} className="h-full w-full object-cover object-center" />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                        {product.productName}
                                      </h3>

                                      <p className="ml-4">{FormatPrice((product.price * product.quantity) / 100)}</p>
                                    </div>
                                  </div>

                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <p className="text-gray-500">Qtd. {product.quantity}</p>

                                    <div className="flex">
                                      <button
                                        type="button"
                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                      >
                                        Remover
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))
                          }
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <p>Subtotal</p>
                      <p>{FormatPrice(orderForm.totalPrice / 100)}</p>
                    </div>

                    <p className="mt-0.5 text-sm text-gray-500">
                      Frete e taxas são calculadas no checkout.
                    </p>

                    <div className="mt-6">
                      <a href="#" className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Checkout</a>
                    </div>

                    <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                      <p>
                        ou
                        <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">Continue Comprando<span aria-hidden="true"> &rarr;</span></button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}