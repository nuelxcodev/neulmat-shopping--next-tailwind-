import Nav from "@/app/component/Nav";
import Image from "next/image";
import { products } from "@/utils/Products";
import bg from "../../public/image/brand2.png";
import bg2 from "../../public/image/brand1.png";
import Pagination from "./component/Pagination";
import CategoryMenu from "./component/parts/CategoryMenu";

export default function Home() {
  return (
    <div>
      {/* navigation */}
      <Nav />
      {/* branding design */}
      <div className=" overflow-y-scroll h-screen">
        <div className="h-[60vh] w-full p-11 ">
          <section
            className=" bg-[#51df66]
         bg-opacity-70 h-full shadow-md"
          >
            <section className=" flex w-full h-full items-center ">
              <div
                className="ml-11 md:w-[40%] text-wrap
            flex flex-col justify-center 
            items-center h-full duration-700 overflow-hidden anime show "
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
        <section className=" flex justify-center items-center">
          <Pagination data={products} pattern={false} />
        </section>
        <div className=" bg-black h-[40vh] my-20 w-full flex items-center justify-center">
          <h1 className=" m-0 text-3xl font-extrabold text-white">
            Grab Upto 50% Off On Selected items
          </h1>

          <Image src={bg2} alt="bg" width={700} height={700} className=" m-0" />
        </div>{" "}
        {/*  */}
      </div>

      <section>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic nesciunt
        dolore quaerat veritatis reiciendis enim corporis cum fugiat
        voluptatibus repellendus exercitationem, expedita repudiandae cumque,
        labore possimus eligendi asperiores eaque architecto!
      </section>
    </div>
  );
}
