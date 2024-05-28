"use client";
import React, { useState } from "react";
import Modal from "./Modal";

//Icons
import { TfiAlignJustify } from "react-icons/tfi";
import Image from "next/image";
import Gmail from "/public/gmail-new-icon5198-1.ico";
import { FaSearch } from "react-icons/fa";
import { IoMdOptions } from "react-icons/io";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { BsGrid3X3GapFill } from "react-icons/bs";
//Imagens
import ImgGoogle from "/public/Google.png";
import ImgMaps from "/public/Maps.png";
import ImgYou from "/public/You.png";
import ImgPlay from "/public/Play.png";
import ImgNoticias from "/public/Noticias.png";
import ImgMeet from "/public/Meet.png";
import ImgChat from "/public/Chat.png";
import ImgContatos from "/public/Contatos.png"
import ImgDrive from "/public/Driver.png";
import ImgAgenda from "/public/Agenda.png";
import ImgTradutor from "/public/Tradutor.png";
import ImgFotos from "/public/Fotos.png";
import ImgCentral from "/public/Central.png";
import ImgShop from "/public/Shop.png";


const Navbar: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
      <div className="flex justify-between pl-4 pr-4 items-center w-dvw p-2">
        <div>
          <ul className="flex gap-3 items-center">
            <li className="cursor-pointer hover:bg-gray-300 p-2 rounded-full">
              <TfiAlignJustify className="" size={20} />
            </li>
            <li>
              <Image className="cursor-pointer" src={Gmail} alt="" width={30} />
            </li>
            <li>
              <p className="text-xl font-semibold">DevEmail</p>
            </li>
            <li className="ml-16">
              <div className="relative flex items-center">
                <FaSearch className="absolute left-3 text-gray-400 cursor-pointer" />

                <input
                  type="text"
                  className="pl-10 pr-3 py-2 wInput bg-blueInput rounded-full focus:outline-none focus:border-transparent"
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
              <IoIosHelpCircleOutline className="cursor-help" size={30} />
            </li>
            <li className="hover:bg-gray-300 p-2 rounded-full">
              <IoSettingsOutline className="cursor-pointer" size={30} />
            </li>
            <li
              className="hover:bg-gray-300 p-2 rounded-full relative"
              onClick={toggleDropdown}
            >
              <BsGrid3X3GapFill
                className="cursor-pointer"
                color="#484d53"
                size={24}
              />
            </li>
            <li className="bg-red-700 text-xl font-bold text-white px-3 py-1 rounded-full">
              R
            </li>
          </ul>
        </div>
      </div>

      <Modal show={showDropdown} onClose={toggleDropdown}>
        <ul className="grid grid-cols-1 gap-1 items-center bg-white rounded-4xl">
          <div className="grid grid-cols-3 gap-2 p-4">
            <li className="p-2 hover:bg-gray-100 hover:rounded-md cursor-pointer flex flex-col items-center gap-1">
              <li className=" flex justify-center bg-red-700 text-xl font-bold text-white px-4 py-2 rounded-full">
                R
              </li>
              Conta
            </li>
            <li className="p-2 hover:bg-gray-100 hover:rounded-md  cursor-pointer flex flex-col items-center ">
              <Image src={ImgGoogle} alt="" />
              Pesquisa
            </li>
            <li className="p-2 hover:bg-gray-100 hover:rounded-md  cursor-pointer flex flex-col items-center ">
              <Image src={ImgMaps} alt="" />
              Maps
            </li>
            <li className="p-2 hover:bg-gray-100 hover:rounded-md  cursor-pointer flex flex-col items-center gap-2">
              <Image src={ImgYou} alt="" />
              YouTube
            </li>
            <li className="p-2 hover:bg-gray-100 cursor-pointer flex flex-col items-center ">
              <Image src={ImgPlay} alt="" />
              Play
            </li>
            <li className="p-2 hover:bg-gray-100 hover:rounded-md  cursor-pointer flex flex-col items-center ">
              <Image src={ImgNoticias} alt="" />
              Noticias
            </li>
            <li className="p-2 hover:bg-gray-100 hover:rounded-md  cursor-pointer flex flex-col items-center ">
            <Image src={Gmail} alt="" width={35} />
              DevEmail
            </li>
            <li className="p-2 hover:bg-gray-100 hover:rounded-md  cursor-pointer flex flex-col items-center ">
            <Image src={ImgMeet} alt="" />
              Meet
            </li>
            <li className="p-2 hover:bg-gray-100 hover:rounded-md  cursor-pointer flex flex-col items-center ">
            <Image src={ImgChat} alt="" />
              Chat
            </li>
            <li className="p-2 hover:bg-gray-100 hover:rounded-md  cursor-pointer flex flex-col items-center ">
            <Image src={ImgContatos} alt="" />
              Contatos
            </li>
            <li className="p-2 hover:bg-gray-100 hover:rounded-md  cursor-pointer flex flex-col items-center ">
            <Image src={ImgDrive} alt="" />
              Drive
            </li>
            <li className="p-2 hover:bg-gray-100 hover:rounded-md  cursor-pointer flex flex-col items-center ">
            <Image src={ImgAgenda} alt="" />
              Agenda
            </li>
            <li className="p-2 hover:bg-gray-100 hover:rounded-md  cursor-pointer flex flex-col items-center ">
            <Image src={ImgTradutor} alt="" />
              Tradutor
            </li>
            <li className="p-2 hover:bg-gray-100 hover:rounded-md  cursor-pointer flex flex-col items-center ">
            <Image src={ImgFotos} alt="" />
              Fotos
            </li>
            <li className="p-2 hover:bg-gray-100 hover:rounded-md  cursor-pointer flex flex-col items-center ">
            <Image src={ImgCentral} alt="" />
              Minha cen...
            </li>
            <li className="p-2 hover:bg-gray-100 cursor-pointer hover:rounded-md  flex flex-col items-center">
            <Image src={ImgShop} alt="" />
              Shopping</li>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <li className="p-2 hover:bg-gray-100 cursor-pointer">Item 16</li>
            <li className="p-2 hover:bg-gray-100 cursor-pointer">Item 17</li>
            <li className="p-2 hover:bg-gray-100 cursor-pointer">Item 18</li>
          </div>
        </ul>
      </Modal>
    </>
  );
};

export default Navbar;
