"use client";
import React from "react";
import Link from "next/link";

const CustomNavbar = () => {
  return (
    <nav className="bg-blue-500 h-16 py-2 px-36 flex justify-between items-center">
      <div className="brand">
        <h1>
          <a href="#">Work Manager</a>
        </h1>
      </div>
      <div>
        <ul className="flex space-x-5">
          <li>
            <Link href="/">Home</Link>
          </li>

          <li>
            <Link href="/add-task">Add Task</Link>
          </li>
          <li>
            <Link href="/show-task">Show Tasks</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex space-x-2">
          <li>
            <a href="">Login</a>
          </li>
          <li>
            <Link href="/signup">SignUp</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default CustomNavbar;
