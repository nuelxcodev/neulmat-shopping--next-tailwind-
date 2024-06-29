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
import { StripeError, loadStripe } from "@stripe/stripe-js";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const stripePromise = loadStripe(process.env.STRIPE_PUBLIC_PUBLISHABLE_KEY!);

function page() {
  const { state, dispatch }: any = React.useContext(CartContext);
  const { cartitems } = state;
  const router = useRouter();

  const checkout = async () => {
    try {
      const res = await fetch("/api/checkout_sessions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: cartitems
            .reduce((a: any, b: any) => a + b.price * b.quantity, 0)
            .toFixed(2),
          image: cartitems.map((item: any) => item.image), // Assuming images is an array
          list: cartitems.map((item: any) => item.title), // Assuming name is a string
        }),
      });

      const { session }: any = res.json();
      if (session) {
        const stripe = await stripePromise;
        const { error }: any = await stripe?.redirectToCheckout({
          sessionId: session.id,
        });
        if (error) {
          if (error instanceof Error) throw new Error(error.message);
          else {
            throw error;
          }
        }
      } else {
        console.log(res);
      }
    } catch (error) {
      console.log(error);
    }
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
      <div className=" m-auto md:m-0 w-[95%] md:w-[70%] md:p-4">
        <table className=" md:my-7 w-full">
          <thead className=" bg-neutral-600 text-white ">
            <th className=" p-4 w-[20%]">image</th>
            <th className=" p-4 w-[20%]">name</th>
            <th className=" p-4 w-[20%]">price</th>
            <th className=" p-4 w-[20%]">quantity</th>
            <th className=" p-4 w-[20%]">delete</th>
          </thead>
          <tbody>
            {cartitems.map((cartItem: any, i: any) => (
              <tr key={i} className=" h-24 border-b overflow-hidden">
                <td className=" flex items-center justify-center w-full">
                  <section className="w-16 h-24 overflow-hidden ">
                    <Link href={`/products/${cartItem.id}`}>
                      <Image
                        src={cartItem?.image}
                        alt={cartItem?.title}
                        width={100}
                        height={100}
                      />
                    </Link>
                  </section>{" "}
                </td>
                <td className=" text-center">{cartItem.title}</td>
                <td className=" text-center">${cartItem.price}</td>
                <td className=" ">
                  <Updatebutton data={cartItem} />
                </td>
                <td className=" text-center">
                  <FontAwesomeIcon
                    icon={faTrash}
                    className=" text-red-700"
                    onClick={() => {
                      dispatch({ type: "DELETE", payload: cartItem });
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="md:w-[30%] flex justify-center ">
        <section className=" text-white p-3 py-4 h-max my-16 flex-col  bg-neutral-500 shadow-lg  w-[90%] flex justify-center items-center  ">
          <section className=" flex w-[80%] justify-between my-4 border-b p-3">
            {/* num of items */}
            <b className=" m-0">Total Items In Cart: </b>
            <span>
              {cartitems.reduce((a: any, b: any) => a + b.quantity, 0)}
            </span>
          </section>
          {/* total price */}
          <section className=" flex w-[80%] justify-between my-4 border-b p-3">
            <b className=" m-0">Subtotal: </b>
            <span>
              $
              {cartitems
                .reduce((a: any, b: any) => a + b.price * b.quantity, 0)
                .toFixed(2)}
            </span>
          </section>
          <section className=" flex w-[80%] justify-between my-4 border-b p-2">
            <b className=" m-0">currency: </b>
            <span>USD</span>
          </section>

          <button
            onClick={checkout}
            className=" p-3 my-5 border shadow-xl bg-slate-100 bg-opacity-10 hover:bg-opacity-20 text-white w-[80%] active:bg-neutral-600 rounded-xl"
          >
            checkout
          </button>
        </section>
      </div>
    </div>
  );
}

export default page;
