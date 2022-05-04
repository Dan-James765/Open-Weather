import React from "react";
import { BsSunFill } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { FaBars } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { AiFillMessage } from "react-icons/ai";
function Header() {
  return (
    <>
      <header className="shadow-lg py-3 bg-sky-500 flex items-center justify-between">
        <div className="flex items-center">
          <BsSunFill className="text-white text-3xl ml-6 cursor-pointer hover:text-yellow-300 transition ease-in-out delay-110" />
          <h1 className="font-bold text-white tracking-tight pl-2">
            EDOZO{" "}
            <span className="font-light tracking-tight">WEATHER CAST</span>
          </h1>
          <div className="text-white flex items-center pl-10 gap-3">
            <FiSearch className="cursor-pointer hover:text-gray-300 transition ease-in-out delay-110" />
            <FaBars className="cursor-pointer hover:text-gray-300 transition ease-in-out delay-110" />
            <AiFillHome className="cursor-pointer hover:text-gray-300 transition ease-in-out delay-110" />
          </div>
        </div>
        <div className="flex items-center gap-1 mr-6">
          <AiFillMessage className="text-white hover:text-gray-300 transition ease-in-out delay-110 cursor-pointer" />
          <img
            className="rounded-full h-10"
            src="https://avatars.githubusercontent.com/u/74262829?s=96&v=4"
            alt=""
          />
        </div>
      </header>
    </>
  );
}

export default Header;
