"use client";
import UserContext from "@/context/userContext";
import { login } from "@/services/userService";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";

const Login = () => {
  const router = useRouter();
  const context = useContext(UserContext);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const loginFormSubmitted = async (event) => {
    event.preventDefault();
    console.log(loginData);
    if (loginData.email.trim() === "" || loginData.password.trim() === "") {
      toast.info("invalid data", {
        position: "top-center",
      });
      return;
    }
    try {
      const result = await login(loginData);
      console.log(result);
      toast.success("Logged in");
      context.setUser(result.user);
      router.push("/");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message, {
        position: "top-center",
      });
    }
  };
  const resetForm = () => {
    setLoginData({
      email: "",
      password: "",
    });
  };
  return (
    <div className="" style={{ backgroundImage: "url('background.jpg')" }}>
      <div className=" flex flex-col justify-center items-center">
        <div className="pt-2 pl-5">
          <img className="h-[60vh] w-4/5" src="log.svg" alt="" />
        </div>
        <div className="md:w-3/5">
          <div className="pb-2 ">
            <h1 className="text-3xl text-center text-white">Login Here</h1>
            <form onSubmit={loginFormSubmitted}>
              <div className="mt-3 text-white">
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
                  className="block text-sm font-medium mb-2 text-white"
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
              <div className=" mt-5 text-center py-5">
                <button
                  type="submit"
                  className="px-3 py-3 rounded bg-green-500 hover:bg-green-800"
                >
                  Log in
                </button>
                <button
                  onClick={resetForm}
                  className="px-3 py-3 rounded bg-orange-700 ms-3 hover:bg-orange-400"
                >
                  reset
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* {JSON.stringify(loginData)} */}
      </div>
    </div>
  );
};

export default Login;
