"use client";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Rating from "./Rating";
import { CartContext } from "@/utils/CartContext";
import { products } from "@/utils/Products";

interface Products {
  id: number;
  title: string;
  image: string;
  price: number;
  category: string;
  description: string;
  rating: { rate: number; count: number };
}
function Itemcard({
  id,
  title,
  image,
  price,
  category,
  description,
  rating: { rate, count },
}: Products) {
  const { state, dispatch }: any = React.useContext(CartContext);
  const { cartitems } = state;
  // effect (loading)
  const [loading, isloading] = useState(true);

  useEffect(() => {
    isloading(false);
  }, [image]);

  return (
    <div className=" bg-zinc-50 shadow-xl px-2 w-56 h-96 m-2  rounded-lg relative duration-300">
      <div
        className=" h-8 w-8 absolute
         right-5 top-4 rounded-full
         duration-300
         bg-zinc-300 flex justify-center items-center
         active:bg-zinc-800 active:text-white"
      >
        <FontAwesomeIcon icon={faHeart} />
      </div>
      <div className=" h-3/5 overflow-hidden flex justify-center items-center">
        {!loading ? (
          <Link href={`/products/${id}`}>
            <Image src={image} alt={title} width={150} height={150} />
          </Link>
        ) : (
          <div className=" h-[100%] w-[100%]  ">
            <div
              className=" bg-gradient-to-br
             from-neutral-200
              to-neutral-500
               animate-pulse 
               h-[100vh] w-[70rem]"
            ></div>
          </div>
        )}
      </div>

      <section>
        <div className="itemcardInfo ">
          <span>
            {loading ? (
              <span className=" animate-pulse pt-7 opacity-10 ">
                please wait..
              </span>
            ) : (
              title
            )}
          </span>
        </div>
        <div>
          {loading ? (
            <span className=" animate-pulse pt-7 opacity-10 ">loading...</span>
          ) : (
            <Rating numofrate={rate} />
          )}
        </div>
        <div>
          <button
            onClick={() => {
              const item = products.find((product) => product.id === id);
              const exiting = cartitems.find((item: any) => item.id === id);
              const quantity = exiting ? exiting.quantity + 1 : 1;
              dispatch({ type: "ADD", payload: { ...item, quantity } });
            }}
            className=" text-white bg-[#3D3E43] p-3 w-[80%] duration-200 my-3 flex justify-between rounded-md active:bg-blue-950 hover:bg-blue-800"
          >
            <span>add to cart</span> <span>(${price})</span>
          </button>
        </div>
      </section>
    </div>
  );
}

export default Itemcard;
