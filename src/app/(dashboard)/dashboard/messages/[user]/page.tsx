/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { Messagedata } from "@/utils/UserMssd";
import { faArrowRight, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "next/navigation";
import React, { useState } from "react";

function pages() {
  const [message, setmessage] = useState<string>("");
  const [recieved, setrecieved]: any = useState({});

  const param = useParams();
  const Usermssg = Messagedata.find((mss) => mss.user === param.user);

  function handleSubmit() {
    fetch("/api/messages", {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify({ message: message, isAdmin: true }),
    })
      .then((response) => response.json())
      .then((response) => {
        const { user } = response;
        console.log(response);
        setrecieved(user);
      });
  }

  return (
    <div className="  w-full p-5 m-0 ">
      <div className=" border-b p-5">
        <FontAwesomeIcon icon={faUser} className=" h-6 w-6" />
        <b>{Usermssg?.user}</b>
      </div>

      <div className=" flex flex-col w-full p-4 bg-neutral-200 h-[70vh]">
        {Usermssg?.message.map((message, i) => (
          <span
            key={i}
            className={` bg-white my-3 w-max p-3 rounded-md ${message}`}
          >
            {message}
          </span>
        ))}

        {recieved.message}
      </div>

      <div className=" p-6">
        <input
          type="text"
          className=" w-[80%]  p-3 rounded-l-xl outline-none"
          onChange={(e: any) => setmessage(e.target.value)}
        />
        <button
          className=" bg-blue-600 p-3 text-white rounded-r-xl w-[20%]"
          onClick={handleSubmit}
        >
          send
        </button>
      </div>
    </div>
  );
}

export default pages;
