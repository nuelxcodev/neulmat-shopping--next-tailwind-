"use client";
import { logout } from "@/lib/action";
import React from "react";
import { auth } from "../auth";
import Nav from "@/app/component/Nav";

async function index() {
  const session = await auth();

  // session?.user?.email;
  return (
    <div>
      <Nav />
      <form
        action={logout}
        className="h-screen w-screen flex flex-col justify-center items-center gap-10 "
      >
        <div className=" flex flex-col justify-center items-center  bg-zinc-50 shadow-lg p-5">
          <div className=" flex flex-col m-5">
            <p>{session?.user?.name}</p>
            <p>{session?.user?.email}</p>
          </div>

          <button
            type="submit"
            className="w-40 bg-yellow-300 rounded-lg text-white p-3"
          >
            logout
          </button>
        </div>
      </form>
    </div>
  );
}

export default index;
