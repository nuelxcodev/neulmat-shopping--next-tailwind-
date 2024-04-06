import NextAuth from "next-auth";
import { authConfig } from "./app/auth.config";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const { nextUrl } = req;
  const isAuthenticated = !!req.auth;
  const isAdmin = true;
  const isDashboard = nextUrl.pathname.startsWith("/dashboard");
  const checkoutpage = nextUrl.pathname.startsWith("/checkout");

  if (!isAuthenticated) {
    console.log("unauthenticated");
    return Response.redirect(new URL("/auth/signin", nextUrl));
  }
  if (isAuthenticated) {
    console.log("authenticated");
    return Response.redirect(new URL("/dashboard", nextUrl));
    if (isDashboard) {
    }
  }

  if (isDashboard && !isAdmin) {
    return Response.redirect(new URL("/", nextUrl));
  }
});

export const config = {
  matcher: ["/dashboard", "/checkout"],
};
