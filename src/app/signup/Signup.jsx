"use client";
import React, { useState } from "react";
import signup from "../../assets/signup.svg";
import Image from "next/image";
import { toast } from "react-toastify";
import { signUp } from "@/services/userService";

const Signup = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    about: "",
    profileURL:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Windows_10_Default_Profile_Picture.svg/2048px-Windows_10_Default_Profile_Picture.svg.png",
  });
  const doSignup = async (event) => {
    event.preventDefault();
    console.log(event);
    console.log(data);
    if (data.name.trim() === "" || data.name == null) {
      toast.warning("Name is required !!", {
        position: "top-center",
      });
      return;
    }
    // form submit
    try {
      const result = await signUp(data);
      console.log(result);
      toast.success("user is registered", {
        position: "top-center",
      });
      setData({
        name: "",
        email: "",
        password: "",
        about: "",
      });
    } catch (error) {
      console.log(error.response.data.message);

      toast.error("Signup error ", +error.response.data.message, {
        position: "top-center",
      });
    }
  };
  const resetForm = () => {
    setData({
      name: "",
      email: "",
      password: "",
      about: "",
    });
  };
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-4 col-start-5 ">
        <div className="py-5 flex-row justify-center items-center">
          <div className="flex justify-center mx-5 my-8">
            <Image
              src={signup}
              alt="signup img"
              style={{
                width: "50%",
              }}
            />
          </div>

          <h1 className="text-3xl text-center">SignUp Here</h1>

          <form action="" className="mt-5" onSubmit={doSignup}>
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
                name="user_name"
                onChange={(event) => {
                  setData({
                    ...data,
                    name: event.target.value,
                  });
                }}
                value={data.name}
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
                name="user_email"
                onChange={(event) => {
                  setData({
                    ...data,
                    email: event.target.value,
                  });
                }}
                value={data.email}
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
                  setData({
                    ...data,
                    password: event.target.value,
                  });
                }}
                value={data.password}
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
                name="user_about"
                rows={8}
                onChange={(event) => {
                  setData({
                    ...data,
                    about: event.target.value,
                  });
                }}
                value={data.about}
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="px-2 py-3 rounded bg-green-700 hover:bg-green-400"
              >
                Sign up
              </button>
              <button
                onClick={resetForm}
                className="px-2 py-3 rounded bg-orange-700 ms-3 hover:bg-orange-400"
              >
                reset
              </button>
            </div>
            {/* {JSON.stringify(data)} */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
