"use client";
import React from "react";

export default function Charts({ data }: any) {
  return (
    <div className="  flex justify-center">
      <div className="  flex md:overflow-y-hidden ">
        <div>
          <ul className=" flex flex-col-reverse h-72 justify-around">
            <li>100</li>
            <li>200</li>
            <li>300</li>
            <li>400</li>
            <li>500</li>
          </ul>
        </div>
        {data.map((stamp: any, index: any) => (
          <div
            key={index}
            className=" flex h-72 flex-col justify-center items-center  "
          >
            <div className=" border-b h-full border-black">
              <div className=" flex flex-row-reverse mx-[0.2vw] rotate-180 h-full justify-center border-l ">
                <div
                  style={{
                    transition: "5s",
                    width: 15,
                    backgroundColor: "red",
                    height: stamp.sale * 2,
                  }}
                ></div>
                <div
                  style={{
                    width: 15,
                    backgroundColor: "lawngreen",
                    height: stamp.sale - 5,
                  }}
                ></div>
                <div
                  style={{
                    width: 15,
                    backgroundColor: "blue",
                    height: stamp.sale / 2,
                  }}
                ></div>
              </div>
            </div>
            <div className=" mt-1">
              <p className=" text-wrap text-xs  -rotate-6">{stamp.month}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
