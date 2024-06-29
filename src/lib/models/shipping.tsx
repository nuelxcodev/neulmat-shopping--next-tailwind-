import mongoose from "mongoose";

const ShippingSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: { type: String, unique: true },
  address: { type: String },
  city: { type: String },
  zip_code: { type: String },
  country: { type: String },
});

const SHIPPINGS =
  mongoose.models.SHIPPINGS || mongoose.model("Shipping", ShippingSchema);
export default SHIPPINGS;
