import React from "react";
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

export default function StarRating({ stars }: { stars: number }) {
  return (
    <>
      {Array(stars).fill(0).map((_, index) =>
        <AiFillStar
          fill="#F8475F"
          key={index} 
        />
      )}

      {Array(5 - stars).fill(0).map((_, index) =>
        <AiOutlineStar
          fill="#F8475F" 
          key={index}
        />
      )}
    </>
  );
}