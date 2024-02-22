"use client";
import React, { useContext } from "react";
import UserContext from "@/context/userContext";
import Image from "next/image";

const Front = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="" style={{ backgroundImage: "url('background1.jpg')" }}>
      <div className="lg:max-w-[1280px] lg:mx-auto mx-2">
        <div className="flex justify-center py-4">
          <h1 className="text-2xl font-semibold text-orange-600">
            "Effortless Task Management Starts Here: Just Add, We'll Manage."
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img className="h-[50vh] w-4/5 md:w-3/5" src="home.svg" alt="alts" />

          <div className="py-8 px-2">
            <h1 className="text-xl text-white font-serif">
              Welcome <b>{user?.name}</b> !
            </h1>
            <p className="text-xl text-white font-serif">
              We're thrilled to have you on board. Ready to supercharge your
              productivity? Add your tasks, and leave the management to us!
              Whether it's work projects, personal goals, or daily to-dos, we've
              got your back. Stay organized, stay focused, and let's conquer
              your tasks together. Just click 'Add Task,' and watch the magic
              happen. Your success is our priority.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Front;
