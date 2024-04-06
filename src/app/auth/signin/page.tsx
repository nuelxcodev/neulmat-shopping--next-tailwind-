"use client";
/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import Image from "next/image";
import bg from "../../../../public/image/3d-rendering-customizing-avatar-concept.jpg";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useFormState } from "react-dom";
import { login } from "@/lib/action";


function page() {
  const [formState, formAction] = useFormState(login, null);

  return (
    <div className=" flex justify-center items-center h-screen ">
      <section className="md:w-[70%] flex flex-col md:flex-row md:h-[80vh] rounded-md shadow-2xl">
        <aside className=" overflow-hidden md:w-[50%] p-[2px] ">
          <div className=" md:h-full md:w-max">
            <Image src={bg} alt="brand" className=" h-full w-full" />
          </div>
        </aside>

        <aside className=" w-full md:w-[50%] flex flex-col justify-center items-center">
          <h1 className=" font-bold text-2xl">Sign in</h1>

          <form action={formAction} className="authform">
            <label>email:</label>
            <input type="email" required name="email" />

            <label>password:</label>
            <input type="password" required name="password" />

            <button
              type="submit"
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
            dont have an account?{""}
            <Link href="/auth/register"> sign Up</Link>
          </span>
        </aside>
      </section>
    </div>
  );
}

export default page;
