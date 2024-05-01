"use client";
import { Filtereditem } from "@/utils/Functions";
import { products } from "@/utils/Products";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Link from "next/link";

function Searchinput() {
  const [search, searchText] = useState("");

  return (
    <div >
      <div className=" flex  w-max border rounded-xl py-3 px-2">
        <input
          onChange={(e) => searchText(e.target.value)}
          type="text"
          placeholder="search products..."
          className="outline-none bg-transparent text-white w-[20vw] "
        />
        <div>
          <Link href={{ pathname: "/products", query: { search: search } }}>
            <FontAwesomeIcon icon={faSearch} className=" text-neutral-400 " />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Searchinput;
