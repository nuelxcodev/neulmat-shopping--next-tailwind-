import mongoose, { Mongoose } from "mongoose";

const User = new mongoose.Schema(
  {
    username: { type: "string", required: true },
    email: { type: "string", required: true, unique: true },
    password: { type: "string", required: true },
    image: { type: "string" },
    isAdmin: { type: "boolean", default: false },
  },
  {
    timestamps: true,
  }
);

const USER = mongoose.models.User || mongoose.model("User", User);
export default USER;
