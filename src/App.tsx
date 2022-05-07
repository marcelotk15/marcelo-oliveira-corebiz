import React, { useEffect } from "react";
import Slider, { Settings } from "react-slick";

import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';
import Shelf from "@/components/Shelf";

import { useAppDispatch, useAppSelector } from '@/hooks/redux-typed-hooks';
import { fetchProducts } from "./store/Products/Products.store";

import './App.css';
import MainSlider from "./components/MainSlider";

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
      <section className="_main-slider">
        <MainSlider>
          {Array(4).fill(0).map((_, index) =>
            <picture key={index}>
              <source 
                srcSet={`https://picsum.photos/1920/430?random=${index}`}
                media="(min-width: 768px)"
              />

              <img
                src={`https://picsum.photos/320/190?random=${index}`}
                alt={`${index}`}
                className="w-full"
              />
            </picture>
          )}
        </MainSlider>
      </section>

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
