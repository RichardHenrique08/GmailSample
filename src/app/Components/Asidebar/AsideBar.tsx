import React from "react";

import { LuPencil } from "react-icons/lu";
import { FaInbox } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
import { CiPaperplane } from "react-icons/ci";
import { RiFilePaper2Line } from "react-icons/ri";

const AsideBar = () => {
  return (
    <>
      <div className="wAside ">
        <div className="bg-blue-200 w-1/2 ml-3 mb-3 mt-5 py-3 px-2 rounded-md flex justify-around">
          <a href="#" className="flex items-center gap-4">
            <LuPencil />
            Escrever
          </a>
        </div>
        <div>
          <ul className="pl-8 flex flex-col gap-1">
            <li className="flex items-center gap-4">
              <FaInbox />
              Caixa de entrada
            </li>
            <li className="flex items-center gap-4">
              <FaRegStar />
              Com estrela
            </li>
            <li className="flex items-center gap-4">
              <IoTimeOutline />
              Adiados
            </li>
            <li className="flex items-center gap-4">
              <CiPaperplane />
              Enviados
            </li>
            <li className="flex items-center gap-4">
              <RiFilePaper2Line />
              Rascunho
            </li>
            <li>Mais</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AsideBar;
