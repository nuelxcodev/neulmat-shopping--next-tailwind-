import mongoose from "mongoose";

export const Dbconnection = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    console.log("connected to MongoDB");
  } catch (error: any) {
    console.log(error.message);
  }
};
