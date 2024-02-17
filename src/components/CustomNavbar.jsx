"use client";
import React, { useContext } from "react";
import Link from "next/link";
import UserContext from "@/context/userContext";
import { logout } from "@/services/userService";

const CustomNavbar = () => {
  const context = useContext(UserContext);
  async function doLogout() {
    try {
      const result = await logout();
      console.log(result);
      context.setUser(undefined);
    } catch (error) {
      console.log(error);
      toast.error("logout error");
    }
  }

  return (
    <nav className="bg-blue-500 h-16 py-2 px-36 flex justify-between items-center">
      <div className="brand">
        <h1>
          <a href="#">Work Manager</a>
        </h1>
      </div>
      <div>
        <ul className="flex space-x-5">
          {context.user && (
            <>
              <li>
                <Link href="/">Home</Link>
              </li>

              <li>
                <Link href="/add-task">Add Task</Link>
              </li>
              <li>
                <Link href="/show-tasks">Show Tasks</Link>
              </li>
            </>
          )}
        </ul>
      </div>
      <div>
        <ul className="flex space-x-2">
          {context.user && (
            <>
              {" "}
              <li>
                <Link href={"#"}>{context.user.name}</Link>
              </li>
              <li>
                <button onClick={doLogout}>logOut</button>
              </li>
            </>
          )}
          {!context.user && (
            <>
              {" "}
              <li>
                <Link href="/login">Login</Link>
              </li>
              <li>
                <Link href="/signup">SignUp</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default CustomNavbar;
