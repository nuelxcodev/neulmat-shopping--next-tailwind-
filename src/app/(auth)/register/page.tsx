/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React from "react";
import Link from "next/link";

function page() {
  
  return (
    <div className=" w-full flex flex-col justify-center items-center ">
      <h1 className=" font-bold text-2xl">Sign up</h1>
      <form action="" className="authform">
        <label>username:</label>
        <input required />

        <label>email:</label>
        <input />

        <label>password:</label>
        <input />

        <button
          className=" bg-blue-800 text-white p-3 mt-7 rounded-md
 active:bg-blue-900"
        >
          sign up
        </button>
      </form>

      <div className=" w-[90%] mt-7 text-center">
        <p>or</p>
        <button
          className=" bg-zinc-500 text-white p-3 my-2 rounded-md w-full
             active:bg-zinc-800"
        >
          google
        </button>
      </div>

      <span>
        {" "}
        already have an account?{""}
        <Link href="/signin">sign In</Link>
      </span>
    </div>
  );
}

export default page;
