import React from "react";
import Modal from "../components/Modal";

export const others = () => {
  const openModal = (id) => {
    document.getElementById(id).showModal();
  };
  return (
    <div className="flex flex-wrap justify-start lg:justify-center items-center pt-5">
      <div
        className="tooltip tooltip-primary tooltip-bottom cursor-pointer "
        data-tip="Photoshop">
        <a onClick={() => openModal("my_modal_14")} className=" rounded">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            className=" w-16 h-16 lg:w-24 lg:h-24 ">
            <path
              fill="#03A9F4"
              d="M6,10c0-2.209,1.791-4,4-4h28c2.209,0,4,1.791,4,4v28c0,2.209-1.791,4-4,4H10c-2.209,0-4-1.791-4-4V10z"></path>
            <path
              fill="#020F16"
              d="M20.016,19.174h-2.002v4.434h1.973c0.547,0,0.97-0.179,1.27-0.537s0.449-0.879,0.449-1.563c0-0.71-0.153-1.274-0.459-1.694S20.53,19.181,20.016,19.174z"></path>
            <path
              fill="#020F16"
              d="M9,9v30h30V9H9z M23.365,24.789C22.539,25.597,21.393,26,19.928,26h-1.914v5h-2.871V16.781h4.844c1.406,0,2.528,0.437,3.364,1.309s1.255,2.005,1.255,3.398S24.192,23.981,23.365,24.789z M32.682,30.336c-0.709,0.573-1.641,0.859-2.793,0.859c-0.775,0-1.459-0.151-2.051-0.454s-1.057-0.725-1.392-1.265s-0.503-1.123-0.503-1.748h2.627c0.014,0.481,0.125,0.843,0.337,1.084s0.558,0.361,1.04,0.361c0.742,0,1.113-0.335,1.113-1.006c0-0.234-0.112-0.451-0.337-0.649S30,27.052,29.225,26.713c-1.139-0.462-1.922-0.94-2.349-1.436s-0.64-1.11-0.64-1.846c0-0.925,0.334-1.688,1.001-2.29s1.552-0.903,2.651-0.903c1.158,0,2.086,0.3,2.783,0.898s1.045,1.403,1.045,2.412h-2.764c0-0.859-0.357-1.289-1.074-1.289c-0.293,0-0.533,0.091-0.723,0.273s-0.283,0.437-0.283,0.762c0,0.234,0.104,0.441,0.313,0.62s0.699,0.435,1.475,0.767c1.127,0.417,1.922,0.881,2.388,1.392s0.698,1.174,0.698,1.987C33.746,29.005,33.391,29.763,32.682,30.336z"></path>
          </svg>
        </a>
      </div>
      <Modal
        id="my_modal_14"
        logo={
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              className=" w-16 h-16 lg:w-24 lg:h-24 ">
              <path
                fill="#03A9F4"
                d="M6,10c0-2.209,1.791-4,4-4h28c2.209,0,4,1.791,4,4v28c0,2.209-1.791,4-4,4H10c-2.209,0-4-1.791-4-4V10z"></path>
              <path
                fill="#020F16"
                d="M20.016,19.174h-2.002v4.434h1.973c0.547,0,0.97-0.179,1.27-0.537s0.449-0.879,0.449-1.563c0-0.71-0.153-1.274-0.459-1.694S20.53,19.181,20.016,19.174z"></path>
              <path
                fill="#020F16"
                d="M9,9v30h30V9H9z M23.365,24.789C22.539,25.597,21.393,26,19.928,26h-1.914v5h-2.871V16.781h4.844c1.406,0,2.528,0.437,3.364,1.309s1.255,2.005,1.255,3.398S24.192,23.981,23.365,24.789z M32.682,30.336c-0.709,0.573-1.641,0.859-2.793,0.859c-0.775,0-1.459-0.151-2.051-0.454s-1.057-0.725-1.392-1.265s-0.503-1.123-0.503-1.748h2.627c0.014,0.481,0.125,0.843,0.337,1.084s0.558,0.361,1.04,0.361c0.742,0,1.113-0.335,1.113-1.006c0-0.234-0.112-0.451-0.337-0.649S30,27.052,29.225,26.713c-1.139-0.462-1.922-0.94-2.349-1.436s-0.64-1.11-0.64-1.846c0-0.925,0.334-1.688,1.001-2.29s1.552-0.903,2.651-0.903c1.158,0,2.086,0.3,2.783,0.898s1.045,1.403,1.045,2.412h-2.764c0-0.859-0.357-1.289-1.074-1.289c-0.293,0-0.533,0.091-0.723,0.273s-0.283,0.437-0.283,0.762c0,0.234,0.104,0.441,0.313,0.62s0.699,0.435,1.475,0.767c1.127,0.417,1.922,0.881,2.388,1.392s0.698,1.174,0.698,1.987C33.746,29.005,33.391,29.763,32.682,30.336z"></path>
            </svg>
          </>
        }
        title={<>Photoshop</>}
        content={
          <>
            <>
              Photoshop is an image creation, graphic design and photo editing
              software developed by Adobe.
            </>
          </>
        }
      />
      <div
        className="tooltip tooltip-primary tooltip-bottom cursor-pointer"
        data-tip="Stackover Flow">
        <a onClick={() => openModal("my_modal_15")} className=" rounded">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            className=" w-16 h-16 lg:w-24 lg:h-24 ">
            <path
              fill="#727d86"
              d="M32,28.5V39H12V28.5c0-0.276-0.224-0.5-0.5-0.5h-2C9.224,28,9,28.224,9,28.5V41c0,0.552,0.448,1,1,1	h24c0.552,0,1-0.448,1-1V28.5c0-0.276-0.224-0.5-0.5-0.5h-2C32.224,28,32,28.224,32,28.5z"></path>
            <rect width="14" height="3" x="15" y="34" fill="#727d86"></rect>
            <path
              fill="#89776b"
              d="M15.081,28.26L29,29.758l-0.321,2.983l-13.92-1.498L15.081,28.26z"></path>
            <path
              fill="#e36001"
              d="M36.871,6l2.133,13.835l-2.966,0.457L33.905,6.457L36.871,6z"></path>
            <path
              fill="#cc661c"
              d="M28.47,8.237l6.831,12.218l-2.619,1.465L25.851,9.701L28.47,8.237z"></path>
            <path
              fill="#b66c36"
              d="M20.501,14.551L32,22.533l-1.711,2.465L18.79,17.016L20.501,14.551z"></path>
            <path
              fill="#9f7151"
              d="M16.899,21.218l13.173,4.739l-1.016,2.824l-13.173-4.739L16.899,21.218z"></path>
          </svg>
        </a>
      </div>
      <Modal
        id="my_modal_15"
        logo={
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              className=" w-16 h-16 lg:w-24 lg:h-24 ">
              <path
                fill="#727d86"
                d="M32,28.5V39H12V28.5c0-0.276-0.224-0.5-0.5-0.5h-2C9.224,28,9,28.224,9,28.5V41c0,0.552,0.448,1,1,1	h24c0.552,0,1-0.448,1-1V28.5c0-0.276-0.224-0.5-0.5-0.5h-2C32.224,28,32,28.224,32,28.5z"></path>
              <rect width="14" height="3" x="15" y="34" fill="#727d86"></rect>
              <path
                fill="#89776b"
                d="M15.081,28.26L29,29.758l-0.321,2.983l-13.92-1.498L15.081,28.26z"></path>
              <path
                fill="#e36001"
                d="M36.871,6l2.133,13.835l-2.966,0.457L33.905,6.457L36.871,6z"></path>
              <path
                fill="#cc661c"
                d="M28.47,8.237l6.831,12.218l-2.619,1.465L25.851,9.701L28.47,8.237z"></path>
              <path
                fill="#b66c36"
                d="M20.501,14.551L32,22.533l-1.711,2.465L18.79,17.016L20.501,14.551z"></path>
              <path
                fill="#9f7151"
                d="M16.899,21.218l13.173,4.739l-1.016,2.824l-13.173-4.739L16.899,21.218z"></path>
            </svg>
          </>
        }
        title={<>Stackover Flow</>}
        content={
          <>
            <>
              What is stack overflow? A stack overflow is a type of buffer
              overflow error that occurs when a computer program tries to use
              more memory space in the call stack than has been allocated to
              that stack.
            </>
          </>
        }
      />
      <div
        className="tooltip tooltip-primary tooltip-bottom cursor-pointer"
        data-tip="Filmora">
        <a onClick={() => openModal("my_modal_16")} className=" rounded">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            className=" w-16 h-16 lg:w-24 lg:h-24 ">
            <path
              fill="#37474f"
              d="M15,6h18c4.971,0,9,4.029,9,9v18c0,4.971-4.029,9-9,9H15c-4.971,0-9-4.029-9-9V15	C6,10.029,10.029,6,15,6z"></path>
            <path
              fill="#fff"
              d="M21,9l-7,7l5.5,5.5c0.828,0.829,0.828,2.171,0,3L28,16L21,9z"></path>
            <polygon
              fill="#1de9b6"
              points="29.532,17.5 15,31.983 22.042,39 36.574,24.517"></polygon>
          </svg>
        </a>
      </div>
      <Modal
        id="my_modal_16"
        logo={
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              className=" w-16 h-16 lg:w-24 lg:h-24 ">
              <path
                fill="#37474f"
                d="M15,6h18c4.971,0,9,4.029,9,9v18c0,4.971-4.029,9-9,9H15c-4.971,0-9-4.029-9-9V15	C6,10.029,10.029,6,15,6z"></path>
              <path
                fill="#fff"
                d="M21,9l-7,7l5.5,5.5c0.828,0.829,0.828,2.171,0,3L28,16L21,9z"></path>
              <polygon
                fill="#1de9b6"
                points="29.532,17.5 15,31.983 22.042,39 36.574,24.517"></polygon>
            </svg>
          </>
        }
        title={<>Filmora</>}
        content={
          <>
            <>
              Filmora is a video editing software that helps businesses create
              and distribute white-labeled marketing videos. Marketing
              professionals can use the drag-and-drop interface to import and
              arrange multimedia elements and create a magnetic timeline.
            </>
          </>
        }
      />
    </div>
  );
};

export default others;
