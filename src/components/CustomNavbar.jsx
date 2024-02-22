"use client";
import React, { useContext } from "react";
import Link from "next/link";
import UserContext from "@/context/userContext";
import { logout } from "@/services/userService";
import { useRouter } from "next/navigation";

const CustomNavbar = () => {
  const context = useContext(UserContext);
  const router = useRouter();
  async function doLogout() {
    try {
      const result = await logout();
      console.log(result);
      context.setUser(undefined);
      router.push("/");
    } catch (error) {
      console.log(error);
      toast.error("logout error");
    }
  }

  return (
    <nav className="bg-black h-20  px-36 flex justify-between items-center text-red-600 text-2xl">
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
