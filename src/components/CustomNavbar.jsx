"use client";
import React, { useContext } from "react";
import Link from "next/link";
import UserContext from "@/context/userContext";
import { logout } from "@/services/userService";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  const [isOpen, setIsOpen] = useState(false);
  const fadeIn = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
    },
  };
  return (
    <nav className="  bg-black h-20   text-red-600 text-2xl">
      <div className="  h-20 flex justify-between items-center  max-w-[1280px] lg:mx-auto mx-4 brand">
        <div>
          <h1>
            <a href="#">Work Manager</a>
          </h1>
        </div>
        <div className="hidden lg:block">
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
                <li className="hidden lg:block">
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
            {context.user && (
              <div className="lg:hidden">
                <nav className={`  `}>
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    className="mobileNavbar  relative z-[100]  "
                  >
                    <div className={`h-3.5 w-5 `}>
                      <div
                        className={` h-0.5   w-5 origin-top-left ease-in duration-200 rounded-md ${
                          isOpen
                            ? "rotate-45 translate-x-px bg-white"
                            : "rotate-0 bg-white"
                        }`}
                      />
                      <div
                        className={` h-0.5 w-5 bg-white ease-in duration-200 rounded-md mt-1 ${
                          isOpen ? "hidden" : "block"
                        }`}
                      />
                      <div
                        className={` h-0.5 w-5  ease-in duration-200  rounded-md mt-1  ${
                          isOpen
                            ? "-rotate-45 -translate-x-0.5 bg-white"
                            : "rotate-0 bg-white"
                        }`}
                      />
                    </div>
                  </button>
                  {isOpen && (
                    <AnimatePresence>
                      <motion.div
                        variants={fadeIn}
                        initial="initial"
                        whileInView="animate"
                        exit="exit"
                        viewport={{ once: false }}
                        className="fixed ease-in duration-800  w-full h-screen top-0 right-0 bg-gradient-to-r from-orange-400 to-red-600  py-1 px-1 shadow-lg bg-black text-white z-50"
                      >
                        <div className=" w-full h-full bg-black">
                          <div className="flex flex-col h-full  content-between">
                            <div className="flex flex-col mx-auto mt-20 text-center font-oswald tracking-light w-10/12 z-20">
                              <div className="nav-link-container  py-2  border-b-2 border-white ">
                                <a href="/" className="nav-link font-serif ">
                                  Home
                                </a>
                              </div>
                              <div
                                onClick={() => setIsOpen(!isOpen)}
                                className="nav-link-container py-4  border-b-2 border-white"
                              >
                                <a
                                  href="/add-task"
                                  className="nav-link font-serif"
                                >
                                  Add Task
                                </a>
                              </div>

                              <div
                                onClick={() => setIsOpen(!isOpen)}
                                className="nav-link-container py-4  border-b-2 border-white "
                              >
                                <a
                                  href="show-tasks"
                                  className="nav-link font-serif"
                                >
                                  Show-tasks
                                </a>
                              </div>
                              <div
                                onClick={() => setIsOpen(!isOpen)}
                                className="nav-link-container  border-b-2 border-white py-4   "
                              >
                                <button onClick={doLogout}>logOut</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  )}
                </nav>{" "}
              </div>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default CustomNavbar;
