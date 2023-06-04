import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

function CardProductImageLeft({ image, name, price, ratings }) {
  return (
    <div className="w-full max-w-sm flex py-3 mb-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img
        className="h-20 p-2 bg-teal-300 rounded-md mx-2"
        src={image}
        alt="product image"
      />

      <div>
        <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
        <div className="flex items-center gap-x-1">
          {[...Array(Math.floor(ratings))].map((e, index) => (
            <BsStarFill key={index} className="text-yellow-300" size={14} />
          ))}
          {[...Array(Math.ceil(ratings) - Math.floor(ratings))].map(
            (e, index) => (
              <BsStarHalf key={index} className="text-yellow-300" size={14} />
            )
          )}
          {[...Array(5 - Math.ceil(ratings))].map((e, index) => (
            <BsStar key={index} className="text-yellow-300" size={14} />
          ))}
          <span className="bg-blue-100 text-blue-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
            {parseFloat(ratings).toFixed(1)}
          </span>
        </div>
        <span className="font-medium text-gray-900 dark:text-white">
          ${price}
        </span>
      </div>
    </div>
  );
}

export default CardProductImageLeft;
