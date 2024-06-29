import NextAuth from "next-auth";
import { authConfig } from "./app/auth.config";
import { NextResponse } from "next/server";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const { nextUrl } = req;
  const isAuthenticated = !!req.auth;
  const isAdmin = true;

  console.log(req.nextUrl.href);

  const isDashboard = nextUrl.pathname.startsWith("/dashboard");
  const ischeckoutpage = nextUrl.pathname.startsWith("/checkout");

  if (
    (!isAuthenticated && isDashboard) ||
    (!isAuthenticated && ischeckoutpage)
  ) {
    return NextResponse.redirect(new URL("/signin", nextUrl));
  }

  if (!isDashboard && !ischeckoutpage) {
    return NextResponse.redirect("/");
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    "/dashboard",
    "/dashboard/profile",
    "/dashboard/messages",
    "/dashboard/messages/[user]",
    "/dashboard/settings",
    "/dashboard/notifications",
    "/checkout",
    "/checkout/shipping",
    "/checkout/history",
    "/checkout/success",
  ],
};
