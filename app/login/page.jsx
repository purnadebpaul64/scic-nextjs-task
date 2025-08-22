"use client";

import { signIn } from "next-auth/react";

const page = () => {
  return (
    <div className="flex flex-col items-center mt-20 gap-4">
      <h1 className="text-2xl font-bold">Login</h1>

      {/* Google Login */}
      <button
        onClick={() => signIn("google")}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Sign in with Google
      </button>

      {/* Credential Login */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const email = e.target.email.value;
          const password = e.target.password.value;
          signIn("credentials", { email, password, callbackUrl: "/" });
        }}
        className="flex flex-col gap-2"
      >
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="border px-2 py-1"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="border px-2 py-1"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Sign in with Credentials
        </button>
      </form>
    </div>
  );
};

export default page;
