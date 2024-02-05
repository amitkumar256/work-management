"use client";
import React from "react";

const Signup = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-4 col-start-5 border border-red-500">
        <div>
          <h1 className="text-3xl">SignUp Here</h1>
          <form action="">
            <div className="mt-3">
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="user_name"
              >
                Username
              </label>
              <input
                type="text"
                className="w-full p-2 rounded-3xl bg-gray-400 focus:ring-gray-200 border border-gray-700  mt-2"
                placeholder="Enter here"
              />
            </div>
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
              />
            </div>
            <div className="mt-3">
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="user_name"
              >
                About
              </label>
              <textarea
                type="text"
                className="w-full p-2 rounded-3xl bg-gray-400 focus:ring-gray-200 border border-gray-700  mt-2"
                placeholder="Enter here"
                id="user_about"
                rows={8}
              ></textarea>
            </div>
            <div className="text-center">
              <button className="px-2 py-3 rounded bg-green-700 hover:bg-green-400">
                Sign up
              </button>
              <button className="px-2 py-3 rounded bg-orange-700 ms-3 hover:bg-orange-400">
                reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
