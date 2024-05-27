"use client";
import { useState } from "react";

import { LuPencil } from "react-icons/lu";
import { FaInbox, FaRegStar } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
import { CiPaperplane } from "react-icons/ci";
import { RiFilePaper2Line } from "react-icons/ri";

const AsideBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="wAside">
      <div className="bg-blue-200 mr-28 ml-5 mb-3 mt-5 py-4 rounded-xl flex justify-around transform scale-400 transition-transform duration-100 hover:scale-110 shadow-xl">
        <a href="#" className="flex items-center gap-4">
          <LuPencil />
          Escrever
        </a>
      </div>
      <div>
        <ul className="flex flex-col">
          <li className="pl-8 flex items-center gap-4 rounded-r-full hover:bg-gray-200 py-1 cursor-pointer">
            <FaInbox />
            Caixa de entrada
          </li>
          <li className="flex items-center gap-4 rounded-r-full hover:bg-gray-200 pl-8 py-1 cursor-pointer">
            <FaRegStar />
            Com estrela
          </li>
          <li className="flex items-center gap-4 rounded-r-full hover:bg-gray-200 pl-8 py-1 cursor-pointer">
            <IoTimeOutline />
            Adiados
          </li>
          <li className="flex items-center gap-4 rounded-r-full hover:bg-gray-200 pl-8 py-1 cursor-pointer">
            <CiPaperplane />
            Enviados
          </li>
          <li className="flex items-center gap-4 rounded-r-full hover:bg-gray-200 pl-8 py-1 cursor-pointer">
            <RiFilePaper2Line />
            Rascunho
          </li>
          <li className="flex items-center gap-4 rounded-r-full hover:bg-gray-200 pl-8 py-1 cursor-pointer" onClick={toggleDropdown}>
            <a href="#">Mais</a>
          </li>
          {showDropdown && (
            <ul className="pl-8">
              <li className="flex items-center gap-4 rounded-r-full hover:bg-gray-200 pl-8 py-1 cursor-pointer">Importante</li>
              <li className="flex items-center gap-4 rounded-r-full hover:bg-gray-200 pl-8 py-1 cursor-pointer">Chats</li>
              <li className="flex items-center gap-4 rounded-r-full hover:bg-gray-200 pl-8 py-1 cursor-pointer">Programados</li>
              <li className="flex items-center gap-4 rounded-r-full hover:bg-gray-200 pl-8 py-1 cursor-pointer">Todos os e-mails</li>
              <li className="flex items-center gap-4 rounded-r-full hover:bg-gray-200 pl-8 py-1 cursor-pointer">Spam</li>
              <li className="flex items-center gap-4 rounded-r-full hover:bg-gray-200 pl-8 py-1 cursor-pointer">Lixeira</li>
              <li className="flex items-center gap-4 rounded-r-full hover:bg-gray-200 pl-8 py-1 cursor-pointer">Categoria</li>
              <li className="flex items-center gap-4 rounded-r-full hover:bg-gray-200 pl-8 py-1 cursor-pointer">gerenciador de marcadores</li>
              <li className="flex items-center gap-4 rounded-r-full hover:bg-gray-200 pl-8 py-1 cursor-pointer">Criar novo Marcador</li>
            </ul>
          )}
        </ul>
      </div>
    </div>
  );
};

export default AsideBar;
