"use client";
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import Itemcard from "../../component/Itemcard";
import { products } from "@/utils/Products";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import Pagination from "../../component/Pagination";
import { useSearchParams } from "next/navigation";

function page() {
  const categoryquery = useSearchParams().get("category");
  const searchquery: any = useSearchParams().get("search");

  const [result, setresult] = useState([]);

  useEffect(() => {
    if (searchquery) {
      const searchfilter = products;
      const searchText: string = searchquery.toLocaleLowerCase();
      const finalresult: any = searchfilter.filter((search) => {
        return (search.title + search.category + search.description)
          .toLocaleLowerCase()
          .includes(searchText);
      });
      setresult(finalresult);
    }
  }, [searchquery]);

  const items: any = products.filter(
    (product) => product.category === categoryquery
  );
  const filterproduct = categoryquery ? items : searchquery ? result : products;

  return (
    <>
      <div className=" flex flex-col md:flex-row w-full">
        <aside className=" md:w-[20%] flex flex-row md:flex-col py-5 items-center justify-center md:justify-start gap-9">
          <span>
            filter
            <FontAwesomeIcon icon={faFilter} scale={20} />
          </span>
          <div className="md:flex md:flex-col md:gap-7 md:w-full md:justify-center md:items-center">
            <input
              type="text"
              className=" bg-neutral-200 md:w-[90%] p-3 outline-none"
            />
            <button className=" bg-zinc-800 text-white py-3 px-12  md:w-[90%]">
              filter
            </button>
          </div>
        </aside>
        <section className="md:w-[80%]  ">
          <Pagination data={filterproduct} />
        </section>
      </div>
    </>
  );
}

export default page;
