import NextAuth from "next-auth";
import { authConfig } from "./app/auth.config";
import { NextResponse } from "next/server";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const { nextUrl } = req;
  const isAuthenticated = !!req.auth;
  const isAdmin = true;
  const isDashboard = nextUrl.pathname.startsWith("/dashboard");
  const ischeckoutpage = nextUrl.pathname.startsWith("/checkout");

  if (
    (!isAuthenticated && isDashboard) ||
    (!isAuthenticated && ischeckoutpage)
  ) {
    return Response.redirect(new URL("/auth/signin", nextUrl));
  }

  if (!isDashboard && !ischeckoutpage) {
    return Response.redirect("/");
  }
 
});

export const config = {
  matcher: ["/dashboard", "/checkout"],
};
