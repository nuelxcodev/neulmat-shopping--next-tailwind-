"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

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
  return (
    <div className=" bg-zinc-50 shadow-xl px-2 w-56 h-96 m-2  rounded-lg relative">
      <div className=" h-3/5 overflow-hidden flex justify-center items-center">
        <Link href="/">
          <Image src={image} alt={title} width={150} height={150} />
        </Link>
      </div>
      <section>
        <div className="itemcardInfo">
          <span>{title}</span>
          <span></span>
        </div>
        <div>
          <button className=" text-white bg-zinc-800 p-3 w-[80%] my-3 flex justify-between rounded-md active:bg-zinc-500">
            <span>add to cart</span> <span>(${price})</span>
          </button>
        </div>
      </section>
    </div>
  );
}

export default Itemcard;
