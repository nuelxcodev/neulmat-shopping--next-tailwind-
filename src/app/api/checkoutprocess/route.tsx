import { auth } from "@/app/auth";
import { Dbconnection } from "@/lib/dbconnection";
import SHIPPINGS from "@/lib/models/shipping";

import mongoose from "mongoose";
import { NextRequest } from "next/server";

export async function handler(req: NextRequest) {
  console.log(req.method, req.url);

  const session = await auth();
  const email = session?.user?.email;

  console.log(!!session?.user);

  if (!!session?.user) {
    // handling the post request
    if (req.method === "POST") {
      const data = await req.json();
      const { fullName, address, city, zipCode, country } = data;
      try {
        Dbconnection();
        const newshipping = await SHIPPINGS.create({
          fullName,
          address,
          email,
          city,
          zip_code: zipCode,
          country,
        });
        return Response.json({ message: " sucessfull added shipping details" });
      } catch (error: any) {
        return Response.json({ message: error.message });
      }
    }

    if (req.method === "PUT") {
      const data = await req.json();
      const { fullName, address, city, zipCode, country } = data;

      try {
        const newshipping = await SHIPPINGS.updateOne({
          fullName,
          email,
          address,
          city,
          country,
          zip_code: zipCode,
        });
        return Response.json({
          message: " sucessfull updated shipping details",
        });
      } catch (error: any) {
        return Response.json({ message: error.message });
      }
    }
    // handling the get request
    try {
      Dbconnection();
      const checkshipping = await SHIPPINGS.findOne({ email });
      if (checkshipping) {
        return Response.json({ message: "Success", detail: checkshipping });
      }
      return Response.json({ message: "no shipping details ", detail: null });
    } catch (error: any) {
      return Response.json({ message: error.message });
    }
  }
  return Response.json({ message: "you are not logged in" });
}

export { handler as GET, handler as POST, handler as PUT, handler as DELETE };
