import { Elements } from "@stripe/react-stripe-js";
import { ReactNode } from "react";
import LocationForm from "../component/LocationForm";

export default function CheckoutLayout({ children }: { children: ReactNode }) {
  return (
    <div className=" text-wrap flex flex-col md:flex-row">
      <section className=" w-[60%]">
        <LocationForm />
      </section>
      <aside className=" w-[40%]">{children}</aside>
    </div>
  );
}
