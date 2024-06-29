"use client";
import Nav from "@/app/component/Nav";
import Image from "next/image";
import { products } from "@/utils/Products";
import bg from "../../public/image/brand2.png";
import bg2 from "../../public/image/brand1.png";
import bg3 from "../../public/image/bg3.jpg";
import Pagination from "./component/Pagination";
import CategoryMenu from "./component/parts/CategoryMenu";
import Itemcard from "./component/Itemcard";
import { useEffect, useState } from "react";
import Link from "next/link";
import Banner from "./component/parts/Banner";
import Footer from "./component/footer";


export default function Home() {
  const [randnum, setrandnum] = useState(1);

  useEffect(() => {
    setrandnum(Math.floor(Math.random() * 10));
  }, []);

  const rand_start = randnum !== 0 ? 6 : randnum > 6 ? 12 : products.length - 6;
  const rand_end = rand_start + 6;

  return (
    <div>
      {/* navigation */}
      <Nav />
      {/* branding design */}
      <div className=" mt-20">
        <div className=" w-full p-9 ">
          <section
            className=" bg-[#51df66]
         bg-opacity-70 h-full shadow-md"
          >
            <section className=" flex w-full h-full items-center ">
              <div
                className="ml-11 md:w-[40%] text-wrap
            flex flex-col justify-center 
            items-center h-full duration-700 anime show "
              >
                <h1 className=" m-0 text-3xl font-extrabold">
                  Grab Upto 50% Off On Selected items
                </h1>
                <div className=" w-full">
                  <button
                    className=" bg-zinc-800 text-white 
                p-3 w-[80%] rounded-3xl duration-300 my-6 
                shadow-lg active:bg-zinc-500"
                  >
                    Get Started
                  </button>
                </div>
              </div>

              <section className=" w-[60%]">
                <Image
                  src={bg}
                  alt="bg"
                  width={1000}
                  height={1000}
                  className=" m-0"
                />
              </section>
            </section>
          </section>
        </div>
        <section className=" w-full flex justify-center py-7">
          <CategoryMenu />
        </section>
        <hr className=" h-3 my-4" />
        {/* display products */}
        <h1 className=" ml-5 font-bold text-2xl">For you</h1>
        <section className=" flex flex-wrap justify-center items-center  ">
          {products.slice(rand_start, rand_end).map((product) => (
            <Itemcard key={product.id} {...product} />
          ))}
        </section>
        <Link href="/products">
          <button className=" p-3 bg-blue-800 text-white w-[20%] rounded-lg m-7 active:bg-blue-900">
            see more
          </button>
        </Link>
        {/*  */}

        <div className=" my-7">
          <Banner src={bg3} />
        </div>

        <Footer />
      </div>
    </div>
  );
}
