"use client";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { CartContext } from "@/utils/CartContext";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export default function Cart() {
  const { state, dispatch }: any = React.useContext(CartContext);
  const { cartitems } = state;
  console.log(state);
  return (
    <div className=" relative">
      <div className="text-white hover:text-gray-300">
        <FontAwesomeIcon icon={faShoppingCart} className="mr-2" /> Cart
      </div>

      <span className=" bg-red-800 text-white rounded-full w-5 h-5 absolute -top-2 right-7 flex justify-center items-center">
        {cartitems.reduce((a: any, d: any) => a + d.quantity, 0)}
      </span>
    </div>
  );
}
