import Nav from "@/app/component/Nav";
import Form from "./component/Form";
import Image from "next/image";
import { products } from "@/utils/Products";
import Itemcard from "./component/Itemcard";


export default function Home() {
  return (
    <div className="  ">
      <Nav />
      <section>Home</section>
      <section className=" flex flex-wrap">
        {products.map((product) => (
          <div key={product.id}>
            <Itemcard {...product} />
          </div>
        ))}
      </section>
    </div>
  );
}
