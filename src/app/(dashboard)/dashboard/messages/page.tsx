"use client";
import { Messagedata } from "@/utils/UserMssd";
/* eslint-disable react-hooks/rules-of-hooks */
import { faCheckDouble, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useRouter } from "next/navigation";
import React from "react";

function page() {
  const router = useRouter();
  const data = Messagedata;

  

  return (
    <div>
      <h1 className=" text-2xl font-bold">messages</h1>
      {data.map((mssg, i) => (
        <div
          onClick={() => router.replace(`/dashboard/messages/${mssg.user}`)}
          key={i}
          className=" flex gap-7 items-center bg-neutral-300 shadow-lg my-3 p-4"
        >
          <FontAwesomeIcon icon={faUser} className=" h-5 w-5" />
          <div className=" flex flex-col">
            <b>{mssg.user}</b>
            <section>
              <span className=" text-xs">
                {mssg.message[mssg.message.length - 1]}
              </span>
              <FontAwesomeIcon icon={faCheckDouble} className={`h-3 w-3`} />
            </section>
          </div>
        </div>
      ))}
    </div>
  );
}

export default page;
