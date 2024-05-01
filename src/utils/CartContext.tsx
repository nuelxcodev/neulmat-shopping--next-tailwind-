"use client";
import { createContext, useReducer } from "react";
import Cookies from "js-cookie";

export const CartContext = createContext([]);
const initialState = {
  cartitems: Cookies.get("cartitems")
    ? JSON.parse(Cookies.get("cartitems"))
    : [],
};

function Reduce(state: any, action: any) {
  switch (action.type) {
    case "ADD": {
      const newitem = action.payload;
      const exiting = state.cartitems.find((x: any) => x.id === newitem.id);
      const cartitem = exiting
        ? state.cartitems.map((x: any) => (x.id === exiting.id ? newitem : x))
        : [...state.cartitems, newitem];
      Cookies.set("cartitems", JSON.stringify(cartitem));
      return { ...state, cartitems: cartitem };
    }
    case "DELETE": {
      const itemTOdelete = action.payload;
      const deleted = state.cartitems.filter(
        (x: any) => x.id !== itemTOdelete.id
      );
      Cookies.set("cartitems", JSON.stringify(deleted));
      return { ...state, cartitems: deleted };
    }

    default:
      return state;
  }
}

export function CartProvider({ children }: any) {
  const [state, dispatch]: any = useReducer(Reduce, initialState);
  const value: any = { state, dispatch };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
