import { CartContext } from "@/utils/CartContext";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

export default function Updatebutton({ data, sendquantity, reset }: any) {
  const router = location.pathname;
  const { state, dispatch }: any = React.useContext(CartContext);
  const { cartitems } = state;

  let totquantity = 30;
  const exiting = cartitems.find((item: any) => item.id === data?.id);

  const [count, setcount] = useState(
    router === "/produts/cart"
      ? data.quantity
        ? data.quantity
        : 1
      : exiting
      ? exiting.quantity
      : 1
  );

  const quantity = exiting
    ? // 1. check if it cart page
      router === "/produts/cart"
      ? //   2. if it is cart page the the existing quantity from cartitem should be same as count
        (exiting.quantity = count)
      : // 3. it is cart page just render count
        count
    : !data.quantity
    ? count
    : 1;

  // function to send number of items(quantity) to /products/[item]
  function send() {
    if (!data?.quantity) {
      sendquantity(count);
    }
  }
  send();

  useEffect(() => {
    if (reset) {
      setcount(1);
    }
  }, [reset]);

  // to update the num of items in the cartContext when button is clicked
  useEffect(() => {
    if (data.quantity) {
      dispatch({ type: "ADD", payload: { ...data, quantity } });
    }
  }, [count]);

  //   decreament function
  const minus = () => {
    setcount((count: number) => (count !== 1 ? count - 1 : 1));
  };

  //   increament function
  const plus = () => {
    setcount((count: number) =>
      count !== totquantity ? count + 1 : totquantity
    );
  };

  return (
    <div className=" bg-zinc-200 w-max p-3 rounded-3xl my-4 flex items-center gap-11">
      <FontAwesomeIcon icon={faMinus} onClick={minus} />
      <span>
        {router === "/produts/cart"
          ? exiting
            ? exiting.quantity
            : count
          : count}
      </span>
      <FontAwesomeIcon icon={faPlus} onClick={plus} />
    </div>
  );
}
