import React from "react";

const Modal = ({ id, title, content, logo }) => {
  return (
    <dialog id={id} className="modal">
      <div className="modal-box flex flex-col items-center justify-center text-center">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg">{logo}</h3>
        <h3 className="font-extrabold text-lg pt-2">{title}</h3>
        <h1 className="font-light text-justify text-lg pt-2">{content}</h1>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default Modal;
