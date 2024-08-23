import React from "react";

import "./modal.scss";

const Modal = ({ isModalOpen, setIsModalOpen, children }) => {
  if (!isModalOpen) return null;
  return (
    <div className="openModal" >
      <div className="modal_container">
        <button className="x-btn" onClick={() => setIsModalOpen(false)}>&times;</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
