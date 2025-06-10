import React from "react";
import { createPortal } from "react-dom";

const Modal = ({isModalOpen, setIsOpen, header, footer, children}) => {
  return (
    createPortal(
        <>
      {isModalOpen && (
        <div onClick={() => setIsOpen(false)} className="fixed inset-0 flex items-center justify-center bg-black/40">
          <div onClick={(e)=> e.stopPropagation()} className="bg-white py-5 rounded-md">
            <div className="px-5 mb-2">
                {header}
            </div>
            <hr />
            <div className="flex px-5">
                {children}
            </div>
            <hr />
            <div className="flex justify-end px-5 mt-3">
               {footer}
            </div>
          </div>
        </div>
      )}
    </>, document.getElementById('portal')
    )
  );
};

export default Modal;
