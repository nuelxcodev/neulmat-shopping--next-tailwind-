"use client";
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Charts from "@/app/component/parts/Charts";
import PieChart from "@/app/component/parts/PieChart";

async function index() {
  const sales = [
    { month: "january", sale: 100 },
    { month: "february", sale: 122 },
    { month: "march", sale: 28 },
    { month: "april", sale: 71 },
    { month: "may", sale: 64 },
    { month: "june", sale: 30 },
    { month: "july", sale: 40 },
    { month: "august", sale: 65 },
    { month: "sept", sale: 90 },
    { month: "oct", sale: 20 },
    { month: "nov", sale: 100 },
    { month: "dec", sale: 110 },
  ];
  const colors = ["yellow-500", "gray-800", "blue-800", "red-800", "lime-00"];

  return (
    <div>
      <div className=" font-bold text-3xl w-full flex">
        dashboard
        <div className=" flex items-center text-green-500 bg-white bg-opacity-30 px-3 rounded-2xl text-xs w-max">
          <FontAwesomeIcon icon={faCheck} className=" w-[20px] h-[20px]" />
          verified
        </div>
      </div>

      <div className="flex flex-wrap mt-10">
        {[
          { price: "50,000", description: "total asset" },
          { price: "100,000", description: "investment" },
          { price: "9,000", description: "product status" },
          { price: "20,000", description: "profit made" },
          { price: "10,000", description: "used asset" },
        ].map((check, index) => (
          <div
            key={index}
            className={`p-4 shadow-xl m-2 max-w-52 bg-stone-500 text-white rounded-lg
             hover:bg-blue-800 duration-700 hover:translate-y-2 relative `}
          >
            <span className=" text-2xl font-bold">{check.description}</span>
            <h1 className=" font-mono">${check.price}</h1>
            <span className=" font-thin text-xs">
              Lorem ipsum dolor, sit amet
            </span>
            <p className=" hidden absolute bg-white  active:block top-14 text-black">
              fkjfakjfkajfkjkafjafk
            </p>
          </div>
        ))}
      </div>
      <div className=" mt-9 ">
        <div className=" flex items-center  overflow-x-scroll w-full">
          <section >
            <Charts data={sales} />
          </section>
          <section >
            <PieChart progress={100} />
          </section>
        </div>
        <section className=" p-4 mt-11">
          <b>NB:</b>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui quia
          dolor error odit amet tempora! Qui, cupiditate nesciunt. Iure qui
          earum sed officia maxime unde asperiores ipsa iste! Ea, accusamus?
        </section>
      </div>
    </div>
  );
}

export default index;
