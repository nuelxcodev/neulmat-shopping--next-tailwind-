"use client";

import { login } from "../../lib/action";
import { useFormState } from "react-dom";

const loginInitialState = {
  message: "",
  errors: {
    email: "",
    password: "",
    credentials: "",
    unknown: "",
  },
};

const Form = () => {
  const [formState, formAction] = useFormState(login, loginInitialState);

  return (
    <form
      action={formAction}
      className="flex justify-center items-center flex-col border"
    >
      <h1>LOG IN</h1>
      <input
        required
        name="email"
        placeholder="email"
        className="w-full p-3 my-3 shadow-md outline-none"
      />
      <input
        required
        name="password"
        type="password"
        placeholder="password"
        className="w-[90%] p-3 my-3 shadow-md outline-none"
      />
      <button
        className="w-max text-white bg-blue-800 py-3 px-7 rounded-lg my-6 shadow-md active:bg-blue-900"
        type="submit"
      >
        submit
      </button>
    </form>
  );
};

export default Form;
