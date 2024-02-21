"use client";
import React from "react";

const Footer = () => {
  return (
    <footer className=" h-40 bg-blue-500 flex flex-col scroll-mb-0  mt-auto ">
      <div className="flex justify-around">
        <div>
          <h1>welcome to footer</h1>
          <p>this is footer section</p>
        </div>
        <div>
          <h1>Important Links </h1>
          <ul>
            <li>
              <a href="">fac </a>
            </li>
            <li>
              <a href=""> twi</a>
            </li>
            <li>
              <a href="">whatsap</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
