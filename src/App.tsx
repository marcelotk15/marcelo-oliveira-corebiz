import React, { useEffect } from "react";
import Slider, { Settings } from "react-slick";

import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';
import Shelf from "@/components/Shelf";

import { useAppDispatch, useAppSelector } from '@/hooks/redux-typed-hooks';
import { fetchProducts } from "./store/Products/Products.store";

import './App.css';

function App() {
  const dispatch = useAppDispatch();
  
  const products = useAppSelector((state) => state.products.products);

  const shelfSliderSettings: Settings = {
    dots: false,
    arrows: true,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          dots: true,
          arrows: false,
        }
      }
    ]
  }

  useEffect(() => {
    dispatch(fetchProducts());
  }, [])

  return (
    <>
      <section className="_shelfs mt-6">
        <div className="container mx-auto">
          <div>
            <h2 className="text-xl font-black">
              Mais Vendidos
            </h2>

            <div className="bg-brand-gray-150 h-1 w-16"></div>
          </div>

          <div className="mt-4 pb-10">
            <Slider {...shelfSliderSettings}>
              {products.map((product) =>
                <Shelf
                  product={product}
                  key={product.productId}
                />
              )}
            </Slider>
          </div>
        </div>
      </section>

      <Newsletter />
      
      <Footer />
    </>
  );
}

export default App;
