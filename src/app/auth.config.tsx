import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  secret: "fdrtfyghuijouytrdeswrtyuiytre",
  session: {
    strategy: "jwt",
  },
  pages: {
    error: "/",
    signIn: "/auth/signin",
  },
  callbacks: {
    authorized({ auth }) {
      const isAuthenticated = !!auth?.user;
      console.log(isAuthenticated)
      return isAuthenticated;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
