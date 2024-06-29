import React from "react";
import Image, { StaticImageData } from "next/image";

interface BannerProps {
  src: StaticImageData;
}

const Banner: React.FC<BannerProps> = ({ src }) => {
  return (
    <div className="relative w-full h-[50vh]">
      <Image src={src} alt="Banner Image" layout="fill" objectFit="cover" />
      <div className="absolute inset-0 flex flex-col items-start justify-center text-left px-8">
        <div className=" md:w-[40%] p-3">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Grab Upto 50% Off On Selected items
          </h1>
          <p className="text-white font-thin ">
            Unleash the savings frenzy with our exclusive discount sale! From
            fashion essentials to tech gadgets, grab unbeatable deals on a wide
            range of products. Hurry, stock is limited! Shop now and save big!
          </p>
          <button className="mt-8 px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 focus:outline-none">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
