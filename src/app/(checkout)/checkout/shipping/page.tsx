/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import ShippingForm from "@/app/component/checkout/ShippingForm";
import Checkoutprogessbar from "@/app/component/parts/checkoutprogessbar";
import { checkout } from "@/utils/functions/functions";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

interface Shipping {
  fullName: string;
  email: string;
  address: string;
  city: string;
  zipCode: string;
  country: string;
}
function page() {
  const [isloading, setisLoading] = useState<boolean>(true);
  const [num, setnum] = useState<number>();
  const [method, setmethode] = useState<string>("POST");
  const [drop, setdrop] = useState<boolean>(true);
  const [message, setmassage] = useState<string>(
    "please wait while we fetch your shipping details.."
  );
  const [shipping, setshipping] = useState<Shipping>({
    fullName: "",
    email: "",
    address: "",
    city: "",
    zipCode: "",
    country: "",
  });
  async function getshippings(): Promise<any> {
    fetch("/api/checkoutprocess", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((responseData) => {
        const { detail, message } = responseData;

        setmassage(message);

        if (detail) {
          setshipping({
            fullName: detail.fullName!,
            email: detail.email,
            address: detail.address,
            city: detail.city,
            zipCode: detail.zip_code,
            country: detail.country,
          });
        }

        if (detail === null) {
          setdrop(true);
        } else {
          setdrop(false);
        }
        setisLoading(false);
        setnum(3);
      });
  }

  useEffect(() => {
    getshippings();
  }, [message]);

  function getUpdate(data: any) {
    setmassage(data.massage);
  }

  return (
    <div className=" flex">
      <Checkoutprogessbar activeStep={num || 0} />
      <div className=" m-8 bg-white w-[80%] p-7 shadow-xl">
        <h1 className=" h-9 font-bold text-3xl ">shipping details:</h1>
        <div>{message} </div>

        {isloading ? (
          <div className=" flex justify-center w-full h-48 items-center animate-pulse transition duration-700">
            <div className=" flex flex-col">
              <FontAwesomeIcon
                icon={faDownload}
                className=" h-14 w-14 text-red-600 opacity-80"
              />{" "}
              fetching..
            </div>
          </div>
        ) : (
          <div>
            {drop ? (
              <div className=" mt-9">
                <ShippingForm get={getUpdate} method={method} />
              </div>
            ) : (
              <div>
                <section className="mt-9 mb-2 flex  w-full gap-2 ">
                  <b className=" text-sm text-green-500 ">fullName:</b>
                  <span>{shipping.fullName}</span>
                </section>

                <section className=" my-4 flex  w-full gap-2 ">
                  <b className=" text-sm text-green-500 ">email:</b>
                  <span>{shipping.email}</span>
                </section>
                <section className=" my-4 flex  w-full gap-2 ">
                  <b className=" text-sm text-green-500 ">address:</b>
                  <span>{shipping.address}</span>
                </section>
                <section className=" my-4 flex  w-full gap-2 ">
                  <b className=" text-sm text-green-500 ">city:</b>
                  <span>{shipping.city}</span>
                </section>
                <section className=" my-4 flex  w-full gap-2 ">
                  <b className=" text-sm text-green-500 ">zip_code:</b>
                  <span>{shipping.zipCode}</span>
                </section>
                <section className=" my-4 flex  w-full gap-2 ">
                  <b className=" text-sm text-green-500 ">country:</b>
                  <span>{shipping.country}</span>
                </section>
                <div className=" w-full flex justify-end">
                  <div className=" flex gap-5 my-7">
                    <button
                      className=" bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none
                       focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                      onClick={() => {
                        setdrop(true);
                        setmethode("PUT");
                      }}
                    >
                      edit shipping details
                    </button>
                    <button
                      onClick={() => checkout()}
                      className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2
                     focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                    >
                      checkout items
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default page;
