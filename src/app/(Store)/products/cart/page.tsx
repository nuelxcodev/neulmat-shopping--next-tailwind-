"use client";
import Updatebutton from "@/app/component/parts/Updatebutton";
/* eslint-disable react-hooks/rules-of-hooks */
import { CartContext } from "@/utils/CartContext";
import {
  faPlus,
  faShoppingBasket,
  faTrash,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons/faMinus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function page() {
  const [isloading, setisloading] = useState(false);
  const { state, dispatch }: any = React.useContext(CartContext);
  const { cartitems } = state;

  const loadpage = () => {
    setisloading(true);
    setInterval(() => {
      setisloading(false);
    }, 5000);
  };

  if (cartitems.length === 0) {
    return (
      <div className=" flex justify-center items-center h-[90vh] flex-col">
        <FontAwesomeIcon
          icon={faShoppingBasket}
          className=" text-red-700 h-16 w-16"
        />
        <h1 className=" text-3xl font-bold">no item added</h1>
        <Link href="/products" className=" text-blue-600">
          Shop Now
        </Link>
      </div>
    );
  }
  return (
    <div className=" flex flex-col md:flex-row">
      <div className="cart">
        <div>
          {cartitems.map((cartItem: any, i: any) => (
            <div
              key={cartItem.id}
              className=" flex justify-between items-center
               bg-neutral-100 shadow-lg m-2 px-4 h-[6rem] overflow-hidden continfo"
            >
              <section className="mx-3">
                <Link href={`/products/${cartItem.id}`}>
                  <Image
                    src={cartItem?.image}
                    alt={cartItem?.title}
                    width={100}
                    height={100}
                  />
                </Link>
              </section>

              <span>{cartItem.title}</span>
              <span>${cartItem.price}</span>

              <Updatebutton data={cartItem} />

              <span>
                <FontAwesomeIcon
                  icon={faTrash}
                  className=" text-red-700"
                  onClick={() => {
                    dispatch({ type: "DELETE", payload: cartItem });
                  }}
                />
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="w-[30%] flex justify-center ">
        <section className=" rounded-lg py-4 h-max my-16 flex-col bg-yellow-500 shadow-lg  w-[80%] flex justify-center items-center  ">
          <section className=" flex flex-col">
            <section>
              {/* num of items */}
              <b>Total Items In Cart: </b>
              {cartitems.reduce((a: any, b: any) => a + b.quantity, 0)}
            </section>
            {/* total price */}
            <section>
              <b>Subtotal: </b>
              {cartitems.reduce(
                (a: any, b: any) => a + b.price * b.quantity,
                0
              )}
            </section>
          </section>
          <button
            onClick={loadpage}
            className=" p-3 my-5 bg-neutral-700 text-white w-[80%] active:bg-neutral-600 rounded-xl"
          >
            {isloading ? (
              <div className=" flex justify-around items-center">
                <span>loading</span>
                <div
                  className=" h-4 w-4 border-2 border-neutral-400 rounded-full border-l-neutral-100
               animate-spin"
                ></div>
              </div>
            ) : (
              "checkout"
            )}
          </button>
        </section>
      </div>
    </div>
  );
}

export default page;
