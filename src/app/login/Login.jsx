"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const loginFormSubmitted = (event) => {
    event.preventDefault();
    console.log(loginData);
    if (loginData.email.trim() === "" || loginData.password.trim()) {
      toast.info("invalid data", {
        position: "top-center",
      });
    }
  };
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-4 col-start-5">
        <div className="py-5">
          <h1 className="text-3xl text-center">Login Here</h1>
          <form onSubmit={loginFormSubmitted}>
            <div className="mt-3">
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="user_email"
              >
                Email
              </label>
              <input
                type="email"
                className="w-full p-2 rounded-3xl bg-gray-400 focus:ring-gray-200 border border-gray-700  mt-2"
                placeholder="Enter here"
                id="user_email"
                name="user_email"
                onChange={(event) => {
                  setLoginData({
                    ...loginData,
                    email: event.target.value,
                  });
                }}
                value={loginData.email}
              />
            </div>
            <div className="mt-3">
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="user_password"
              >
                Password
              </label>
              <input
                type="password"
                className="w-full p-2 rounded-3xl bg-gray-400 focus:ring-gray-200 border border-gray-700  mt-2"
                placeholder="Enter here"
                id="user_password"
                name="user_password"
                onChange={(event) => {
                  setLoginData({
                    ...loginData,
                    password: event.target.value,
                  });
                }}
                value={loginData.password}
              />
            </div>
            <div className=" mt-5 text-center">
              <button
                type="submit"
                className="px-3 py-3 rounded bg-green-700 hover:bg-green-400"
              >
                Log in
              </button>
              <button
                // onClick={resetForm}
                className="px-3 py-3 rounded bg-orange-700 ms-3 hover:bg-orange-400"
              >
                reset
              </button>
            </div>
          </form>
        </div>
        {/* {JSON.stringify(loginData)} */}
      </div>
    </div>
  );
};

export default Login;
