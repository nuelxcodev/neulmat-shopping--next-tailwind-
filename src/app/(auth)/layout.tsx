import { ReactNode } from "react";
import Image from "next/image";
import bg from "../../../public/image/3d-rendering-customizing-avatar-concept.jpg";

export default function AuthtLayout({ children }: { children: ReactNode }) {
  return (
    <div className=" flex justify-center items-center h-screen ">
      <section className="md:w-[70%] flex flex-col md:flex-row md:h-[80vh]  rounded-md shadow-2xl">
        <aside className=" overflow-hidden md:w-[50%] p-[2px] ">
          <div className=" md:h-full md:w-max">
            <Image src={bg} alt="brand" className=" h-full w-full" />
          </div>
        </aside>

        <aside className="w-[50%] m:auto flex justify-center">
          {children}
        </aside>
      </section>
    </div>
  );
}
