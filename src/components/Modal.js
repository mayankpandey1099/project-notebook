// components/Modal.js
import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css"; // Import CSS for styling

const Modal = ({ children }) => {
  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">{children}</div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default Modal;