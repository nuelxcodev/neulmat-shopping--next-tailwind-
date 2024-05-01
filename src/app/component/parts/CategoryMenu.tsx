"use client";
import { products } from "@/utils/Products";
import { faSortAlphaDown } from "@fortawesome/free-solid-svg-icons/faSortAlphaDown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useState } from "react";

function CategoryMenu() {
  const [categorydpdown, setcategorydpdown] = useState(false);

  const productpilloutcategory: any = [];
  const categorytoDisplay: any = [];

  for (let index = 0; index < products.length; index++) {
    const element = products[index];
    productpilloutcategory.push(element.category);
  }

  productpilloutcategory.filter((category: any, index: number) => {
    if (productpilloutcategory.indexOf(category) === index) {
      categorytoDisplay.push(category);
    }
  });

  return (
    <div className=" flex w-full justify-center overflow-x-scroll noScrolldisplay">
      {categorytoDisplay.map((category: any, index: number) => (
        <Link
          href={{ pathname: "/products", query: { category: category } }}
          key={index}
          className=" bg-neutral-200 text-center 
            m-2 p-3 rounded-lg duration-300
            active:bg-neutral-400 cursor-pointer"
        >
          {category}
        </Link>
      ))}
    </div>
  );
}

export default CategoryMenu;
