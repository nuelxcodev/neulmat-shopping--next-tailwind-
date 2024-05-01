"use client";
import React, { useEffect, useState } from "react";
import Itemcard from "./Itemcard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons/faAngleRight";

interface Prop {
  data: any;
  pattern: boolean;
}

function Pagination({ data, pattern }: Prop) {
  const [isloading, setisloading] = useState(true);
  const [currentpage, setcurrentpage] = useState(1);
  const maxNumofitemsPerPage = pattern ? 10 : 6;

  const lastitem = currentpage * maxNumofitemsPerPage;
  const firstitem = lastitem - maxNumofitemsPerPage;

  const paginationResult = data.slice(firstitem, lastitem);
  const pagindex: number = Math.ceil(data.length / maxNumofitemsPerPage);
  const pageNum = [...Array(pagindex + 1).keys()].slice(1);

  const nextpage = () => {
    setcurrentpage((currentpage) =>
      currentpage !== pagindex ? currentpage + 1 : currentpage
    );
  };
  const prevpage = () => {
    setcurrentpage((currentpage) =>
      currentpage !== 1 ? currentpage - 1 : currentpage
    );
  };

  useEffect(() => {
    setisloading(false);
  }, [paginationResult]);

  return (
    <div className="flex justify-center items-center -z-40  flex-col h-[90vh] ">
      {/* itemscontainer */}
      <section
        className={`flex flex-wrap overflow-y-scroll  justify-center items-center scroproduct ${
          pattern ? "h-[80%]" : "h-max"
        }`}
      >
        {paginationResult.map((product: any) => (
          <div key={product.id}>
            <Itemcard {...product} />
          </div>
        ))}
      </section>

      {/* item pagination buttons */}
      <div
        className={`flex items-center justify-center my-6 gap-3 w-full ${
          isloading
            ? "hidden"
            : pattern
            ? " static"
            : " absolute justify-between"
        }`}
      >
        {/* previous button */}
        <FontAwesomeIcon
          icon={faAngleLeft}
          onClick={prevpage}
          className={`${
            pattern ? "" : "  bg-black text-white p-3 rounded-full opacity-50"
          }`}
        />
        <div className={` ${pattern ? "block" : "hidden"}`}>
          {pageNum.map((p: any, i: number) => (
            <span
              key={i}
              onClick={() => setcurrentpage(p)}
              className={`  text-center p-3 mx-1 ${
                i + 1 === currentpage
                  ? " bg-neutral-700 text-white"
                  : "bg-neutral-300"
              }`}
            >
              {p}
            </span>
          ))}
        </div>
        {/* next button */}
        <FontAwesomeIcon
          icon={faAngleRight}
          onClick={nextpage}
          className={`${
            pattern ? "" : " text-white bg-black p-3 rounded-full opacity-50"
          }`}
        />
      </div>
    </div>
  );
}

export default Pagination;
