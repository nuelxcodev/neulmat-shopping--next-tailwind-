"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faShoppingCart,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "./parts/Logo";
import Searchinput from "./parts/Searchinput";
import Cart from "./parts/Cart";
import { logout } from "@/lib/action";
import { auth } from "../auth";
import { checkSignedIn } from "@/utils/Functions";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [signedin, setSignedIn] = useState<boolean>();

  const user = checkSignedIn();

  useEffect(() => {
    user.then((e) => {
      setSignedIn(e);
    });
  }, [user]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className="bg-neutral-500 p-5 fixed top-0 w-full z-10"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <div className="max-w-7xl mx-auto flex justify-between">
        <div className="flex items-center">
          <Link href="/">
            <span className="text-white text-lg font-semibold hover:text-gray-300">
              NUELMAT
            </span>
          </Link>
        </div>
        <div className="hidden md:flex items-center justify-around md:w-[70vw] lg:w-[50vw]">
          <Link href="/">
            <span className="text-white mr-4 hover:text-gray-300">Home</span>
          </Link>
          <Link href="/products">
            <span className="text-white mr-4 hover:text-gray-300">
              What&apos;s New
            </span>
          </Link>
          <Searchinput />
          <div>
            {signedin ? (
              <button className=" text-white" onClick={() => logout()}>
                SIGN OUT
              </button>
            ) : (
              <Link href="/auth">
                <span className="text-white mt-8 hover:text-gray-700">
                  Sign In
                </span>
              </Link>
            )}
          </div>
          <Link href="/products/cart">
            <Cart />
          </Link>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`md:hidden fixed top-16 right-0 h-full w-64 bg-white z-50 transition-all duration-300 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={closeMenu} className="text-black focus:outline-none">
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.71 6.71a.75.75 0 0 1 1.06 0L12 10.94l4.24-4.24a.75.75 0 1 1 1.06 1.06L13.06 12l4.24 4.24a.75.75 0 1 1-1.06 1.06L12 13.06l-4.24 4.24a.75.75 0 0 1-1.06-1.06L10.94 12 6.71 7.76a.75.75 0 0 1 0-1.05z"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col p-5 gap-5 h-full shadow-lg">
          <Searchinput />
          <Link href="/">
            <span className="text-black mt-8 hover:text-gray-700">
              <FontAwesomeIcon icon={faHome} className="mr-2" /> Home
            </span>
          </Link>
          <Link href="/products">
            <span className="text-black mt-8 hover:text-gray-700">
              <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />{" "}
              What&apos;s New
            </span>
          </Link>

          <Link href="/products/cart">
            <span className="text-black mt-8 hover:text-gray-700">
              <FontAwesomeIcon icon={faShoppingCart} className="mr-2" /> Cart
            </span>
          </Link>

          <div>
            {signedin ? (
              <button onClick={() => logout()}>SIGN OUT</button>
            ) : (
              <Link href="/auth">
                <span className="text-black mt-8 hover:text-gray-700">
                  <FontAwesomeIcon icon={faSignInAlt} className="mr-2" /> Sign
                  In
                </span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
