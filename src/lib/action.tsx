"use server";

import { AuthError } from "next-auth";
import { signIn, signOut } from "../app/auth";

const defaultValues = {
  email: "",
  password: "",
};

export async function login(prevState: any, formData: FormData) {
  try {
    const email = formData.get("email");
    const password = formData.get("password");

    await signIn("credentials", formData);

    return {
      message: "success",
      errors: {},
    };
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return {
            message: "credentials error",
            errors: {
              ...defaultValues,
              credentials: "incorrect email or password",
            },
          };
        default:
          return {
            message: "unknown error",
            errors: {
              ...defaultValues,
              unknown: "unknown error",
            },
          };
      }
    }
    throw error;
  }
}

export async function logout() {
  await signOut();
}

// libs/action.tsx

interface RegisterData {
  email: string;
  password: string;
}

export async function register(data: RegisterData): Promise<void> {
  try {
    // Implement registration logic here, for example, sending a request to the server
    console.log("Registration data:", data);
    // Example: Send registration data to the server using fetch or axios
    // const response = await fetch("/api/register", {
    //   method: "POST",
    //   body: JSON.stringify(data),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    // if (!response.ok) {
    //   throw new Error("Registration failed");
    // }
    // const responseData = await response.json();
    // console.log("Registration successful:", responseData);
  } catch (error) {
    console.error("Registration error:", error);
    throw new Error("Registration failed");
  }
}
