import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import { Dbconnection } from "@/lib/dbconnection";
import USER from "@/lib/models/User";

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials;
        Dbconnection();
        const user = await USER.findOne({ email });
        if (!user) {
          const newUser = await USER.create({
            email,
            password,
            username: "test",
          });
          return newUser;
        }

        // Check if the user is an admin
        const isAdmin = user.isAdmin || false; // Assuming isAdmin is a boolean field in the USER model

        return {
          ...user.toJSON(),
          isAdmin,
        };
      },
    }),
  ],
});
