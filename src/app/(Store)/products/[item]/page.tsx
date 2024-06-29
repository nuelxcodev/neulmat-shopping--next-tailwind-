"use client";
/* eslint-disable react-hooks/rules-of-hooks */

import Rating from "@/app/component/Rating";
import Updatebutton from "@/app/component/parts/Updatebutton";
import { CartContext } from "@/utils/CartContext";

import { products } from "@/utils/Products";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

function page() {
  const { state, dispatch }: any = React.useContext(CartContext);
  const { cartitems } = state;

  const param = useParams();
  const item = products.find((product) => product.id.toString() === param.item);

  const [remainder, setremainder] = useState(30);
  const [reset, setreset] = useState(false);

  const [totalquantity, setTotalquantity]: any = useState();

  function getquantityFrombutton(count: any) {
    setTotalquantity(count);
  }
  const existing = cartitems.find((item: any) => item.id === item.id);

  useEffect(() => {
    setreset(false);
  }, [totalquantity]);

  useEffect(() => {
    setreset(true);
  }, []);

  useEffect(() => {
    setremainder(
      existing ? (existing.quantity !== 30 ? 30 - existing.quantity : 0) : 30
    );
  }, [state]);

  const quantity = existing ? existing.quantity + totalquantity : totalquantity;

  // buy now button styling(loading effect)
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    // Simulate loading process
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Change 2000 to the time your loading process takes in milliseconds
  };

  return (
    <div className="flex flex-col md:flex-row md:justify-center -z-10 ">
      <div className="w-[100vw] max-h-[60vh] md:w-[40%] md:max-h-[90vh] md:items-center flex justify-center items-start overflow-scroll mt-3 itemdisimage">
        <Image
          src={item?.image || ""}
          alt={item?.title || ""}
          width={400}
          height={400}
        />
      </div>

      <div className="flex flex-col justify-center items-center md:w-[60%] px-7  ">
        <div className="border-b-2">
          <h1 className="text-2xl md:text-4xl font-bold mb-9">{item?.title}</h1>

          <div className=" my-2">
            <Rating numofrate={item?.rating.rate} />
          </div>

          <div className="pb-9">{item?.description}</div>
        </div>

        <div className=" w-full border-b-2 py-4">
          <h1 className="text-2xl md:text-3xl font-bold mb-3">
            ${item?.price}
          </h1>{" "}
          <span className=" text-xs font-thin ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit,
          </span>
        </div>

        <div className=" w-full">
          <div className=" flex items-center gap-16">
            <Updatebutton
              sendquantity={getquantityFrombutton}
              data={item}
              reset={reset}
            />

            <div>
              {remainder > 0 ? (
                <p className=" text-xs font-thin ">
                  there is still{" "}
                  <span className=" font-bold text-green-600">
                    {remainder} items
                  </span>{" "}
                  available for purchase
                </p>
              ) : (
                "outofStock"
              )}
            </div>
          </div>

          <div className=" w-[80%] flex justify-center my-9 gap-4">
            {/* button to buy directly without adding to cart */}
            <button
              onClick={handleClick}
              disabled={isLoading}
              className={`p-3 rounded-3xl w-[50%] duration-300 text-white bg-zinc-800 active:bg-zinc-500 ${
                isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isLoading ? (
                <div className=" flex justify-between items-center">
                  loading
                  <div
                    className="w-4 h-4 rounded-full
            border-2 border-gray-300
            border-t-2 border-t-blue-800 animate-spin"
                  ></div>
                </div>
              ) : (
                "Buy now"
              )}
            </button>

            {/* add to cart button */}
            <button
              disabled={remainder === 0 ? true : false}
              className={`border-2 p-3 duration-300 rounded-3xl w-[50%] active:bg-zinc-300 ${
                remainder === 0 ? "text-red-500 line-through" : "text-base"
              } `}
              onClick={() => {
                setreset(true);
                dispatch({ type: "ADD", payload: { ...item, quantity } });
              }}
            >
              {remainder === 0 ? "outofStock" : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
