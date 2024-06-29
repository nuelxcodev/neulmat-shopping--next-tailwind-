"use server";
import { auth } from "@/app/auth";

export async function checkSignedIn() {
  const session = await auth();
  if (session?.user) {
    return true;
  } else {
    return false;
  }
}


