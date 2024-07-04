import React from "react";

const ImageModal = ({ id, image, title, modal_description }) => {
  const openModal = () => {
    // Add overflow hidden to the modal dialog
    const modal = document.getElementById(id);
    modal.showModal();
    modal.style.overflow = "hidden";
  };

  const closeModal = () => {
    // Remove overflow hidden when modal is closed
    const modal = document.getElementById(id);
    modal.close();
    modal.style.overflow = "auto";
  };

  return (
    <dialog id={id} className="modal">
      <div className="modal-box flex flex-col items-center justify-center text-center">
        <form method="dialog">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={closeModal}>
            ✕
          </button>
        </form>
        <div className="py-4  overflow-hidden">
          <img src={image} alt="Certificate" className="max-w-full h-auto" />
        </div>
        <h3 className="font-bold text-lg  pt-2">{title}</h3>
        <div className="font-light py-4 pt-2 text-justify">
          {modal_description}
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default ImageModal;
