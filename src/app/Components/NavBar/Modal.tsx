import React, { ReactNode } from "react";

interface ModalProps {
  show: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ show, onClose, children }) => {
  if (!show) return null;

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0   flex justify-end pt-14 pr-10 pb-96 z-50"
      onClick={handleBackgroundClick}
    >
      <div className=" border-solid  bg-gray-200 p-2 rounded-4xl  shadow-lg w-84 relative overflow-y-auto custom-scrollbar ">
        {children}
      </div>
    </div>
  );
};

export default Modal;
