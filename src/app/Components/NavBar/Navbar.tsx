import React from "react";
//Icons Left
import { TfiAlignJustify } from "react-icons/tfi";
import Image from "next/image";
import Gmail from "/public/gmail-new-icon5198-1.ico";
import { FaSearch } from "react-icons/fa";
import { IoMdOptions } from "react-icons/io";

//Icons Right
import { IoIosHelpCircleOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { BsGrid3X3GapFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between pl-4 pr-4 items-center w-dvw  p-2">
        <div>
          <ul className="flex gap-3 items-center">
            <li className="cursor-pointer  hover:bg-gray-300 p-2 rounded-full">
              <TfiAlignJustify className="" size={20} />
            </li>
            <li>
              <Image className="cursor-pointer" src={Gmail} alt="" width={30} />
            </li>
            <li>
              <p className="text-xl font-semibold ">DevEmail</p>
            </li>
            <li className="ml-16 ">
              <div className="relative flex items-center ">
                <FaSearch className="absolute left-3 text-gray-400 cursor-pointer " />

                <input
                  type="text"
                  className="pl-10 pr-3 py-2 wInput bg-blueInput  rounded-full focus:outline-none focus:border-transparent"
                  placeholder="Search..."
                />
                <IoMdOptions className="absolute right-3 text-gray-400 cursor-pointer" />
              </div>
            </li>
          </ul>
        </div>

        <div>
          <ul className="flex gap-6 items-center">
            <li className="hover:bg-gray-300 p-2 rounded-full">
              <IoIosHelpCircleOutline className="cursor-help " size={30} />
            </li>
            <li className="hover:bg-gray-300 p-2 rounded-full">
              <IoSettingsOutline className="cursor-pointer" size={30} />
            </li>
            <li className="hover:bg-gray-300 p-2 rounded-full">
              <BsGrid3X3GapFill
                className="cursor-pointer "
                color="#484d53"
                size={24}
              />
            </li>
            <li className="bg-red-700 text-2xl font-bold text-white px-4 py-2 rounded-full">
              R
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
