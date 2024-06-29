import { timeStamp } from "console";
import mongoose from "mongoose";
import email from "next-auth/providers/email";

const checkoutdetails = new mongoose.Schema(
  {
    name: { type: String },
    price: { type: String },
    quantity: { type: String },
    total_price: { type: String },
    totalQuantity: { type: String },
    email: { type: String },
    address: { type: String },
    phone: { type: String },
    user: { type: String },
  },
  { timestamps: true }
);

const CHECKOUT =
  mongoose.models.CHECKOUT || mongoose.model("Checkout", checkoutdetails);
export default CHECKOUT;
