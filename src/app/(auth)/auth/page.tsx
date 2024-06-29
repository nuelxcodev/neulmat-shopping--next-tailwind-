"use client";
import React, { useState } from "react";
import { useFormState } from "react-dom";
import { login, register } from "@/lib/action";

interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
}

interface Props {
  toggleForm: () => void;
}

function LoginForm({ toggleForm }: Props) {
  const [formState, formAction] = useFormState(login, null);

  return (
    <form
      action={formAction}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <h2 className="text-2xl mb-4">Login</h2>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="password"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Password:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Login
      </button>
      <p className="mt-4 text-gray-700 text-sm">
        Dont have an account?{" "}
        <span className="text-blue-500 cursor-pointer" onClick={toggleForm}>
          Register
        </span>
      </p>
    </form>
  );
}

function RegisterForm({ toggleForm }: Props) {
  const [formState, formAction] = useFormState(register, null);

  return (
    <form
      onSubmit={formAction}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <h2 className="text-2xl mb-4">Register</h2>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Password:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="confirmPassword"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Confirm Password:
        </label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Register
      </button>
      <p className="mt-4 text-gray-700 text-sm">
        Already have an account?{" "}
        <span className="text-blue-500 cursor-pointer" onClick={toggleForm}>
          Login
        </span>
      </p>
    </form>
  );
}

function AuthPage() {
  const [showLoginForm, setShowLoginForm] = useState<boolean>(true);

  const toggleForm = () => {
    setShowLoginForm((prev) => !prev);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-xs">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold">Welcome</h1>
          <p className="text-lg text-gray-600">Login or Register</p>
        </div>
        <div
          className={`bg-gray-200 rounded-lg overflow-hidden ${
            showLoginForm ? "slide-right" : "slide-left"
          }`}
        >
          {showLoginForm ? (
            <LoginForm toggleForm={toggleForm} />
          ) : (
            <RegisterForm toggleForm={toggleForm} />
          )}
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
