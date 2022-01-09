import React from "react";
import logo from "../assets/logo.png";
import ToggleButton from "./ToggleButton";

export default function Navbar() {
  const toggleDarkMode = () => {
    let htmlClasses = document.querySelector("html").classList;
    if (localStorage.theme === "dark") {
      htmlClasses.remove("dark");
      localStorage.removeItem("theme");
    } else {
      htmlClasses.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <div className=" dark:bg-gulf-blue  flex bg-denim-blue h-20 fixed w-full items-center justify-between px-20">
      <div className="flex">
        <img src={logo} alt="bannerImage" />
        <a
          href="/"
          className="ml-2 mt-1 text-gulf-blue  dark:text-white font-bold text-xl"
        >
          EzyWriters
        </a>
      </div>
      <div className="flex text-gulf-blue  dark:text-white items-center">
        <ToggleButton onClick={toggleDarkMode} />
        <a href="/" className=" font-bold  mx-4">
          Pricing
        </a>
        <a href="/" className=" font-bold  mx-4">
          Sample
        </a>
        <a href="/" className=" font-bold  mx-4">
          Contact
        </a>
        <a href="/" className=" font-bold  mx-4">
          FAQ
        </a>
        <button className="hover:shadow text-white bg-red px-8 py-3 ml-8 rounded-full">
          Get started
        </button>
      </div>
    </div>
  );
}
