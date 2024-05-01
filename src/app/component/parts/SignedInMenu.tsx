"use client";
import { logout } from "@/lib/action";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

function SignedInMenu() {
  const [dropdown, setdropdown] = useState(false);
  return (
    <div className=" relative">
      <div
        className="w-[7vw] bg-blue-900 text-white p-3 rounded-3xl 
      flex justify-around items-center
       active:bg-indigo-950"
        onClick={() =>
          setdropdown((dropdown) => (dropdown === false ? true : false))
        }
      >
        <FontAwesomeIcon icon={faBars} /> menu
      </div>
      <div
        className={`absolute bg-white w-[22vw] -left-[11rem] top-[5rem] shadow-lg p-4 z-50 rounded-lg ${
          dropdown ? "block" : "hidden"
        }`}
      >
        {/* profile */}
        <section>profile</section>

        {/* theme */}

        {/* logOut */}
        <section>
          <form action={logout}>
            <button type="submit">SIGN OUT</button>
          </form>
        </section>
      </div>
    </div>
  );
}

export default SignedInMenu;
