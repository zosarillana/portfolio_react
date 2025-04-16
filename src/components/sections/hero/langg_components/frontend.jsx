import React from "react";
import Modal from "../components/Modal";

export const frontEnd = () => {
  const openModal = (id) => {
    document.getElementById(id).showModal();
  };
  return (
    <div className="flex flex-wrap justify-start lg:justify-center items-center">
      <div
        className="tooltip tooltip-primary tooltip-bottom cursor-pointer"
        data-tip="TypeScript"
      >
        <a onClick={() => openModal("my_modal_19")} className="p-4 rounded">
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            className="w-16 h-16 lg:w-24 lg:h-24"
          >
            <rect
              x="2"
              y="2"
              width="28"
              height="28"
              rx="1.312"
              style={{ fill: "#3178c6" }}
            />
            <path
              d="M18.245,23.759v3.068a6.492,6.492,0,0,0,1.764.575,11.56,11.56,0,0,0,2.146.192,9.968,9.968,0,0,0,2.088-.211,5.11,5.11,0,0,0,1.735-.7,3.542,3.542,0,0,0,1.181-1.266,4.469,4.469,0,0,0,.186-3.394,3.409,3.409,0,0,0-.717-1.117,5.236,5.236,0,0,0-1.123-.877,12.027,12.027,0,0,0-1.477-.734q-.6-.249-1.08-.484a5.5,5.5,0,0,1-.813-.479,2.089,2.089,0,0,1-.516-.518,1.091,1.091,0,0,1-.181-.618,1.039,1.039,0,0,1,.162-.571,1.4,1.4,0,0,1,.459-.436,2.439,2.439,0,0,1,.726-.283,4.211,4.211,0,0,1,.956-.1,5.942,5.942,0,0,1,.808.058,6.292,6.292,0,0,1,.856.177,5.994,5.994,0,0,1,.836.3,4.657,4.657,0,0,1,.751.422V13.9a7.509,7.509,0,0,0-1.525-.4,12.426,12.426,0,0,0-1.9-.129,8.767,8.767,0,0,0-2.064.235,5.239,5.239,0,0,0-1.716.733,3.655,3.655,0,0,0-1.171,1.271,3.731,3.731,0,0,0-.431,1.845,3.588,3.588,0,0,0,.789,2.34,6,6,0,0,0,2.395,1.639q.63.26,1.175.509a6.458,6.458,0,0,1,.942.517,2.463,2.463,0,0,1,.626.585,1.2,1.2,0,0,1,.23.719,1.1,1.1,0,0,1-.144.552,1.269,1.269,0,0,1-.435.441,2.381,2.381,0,0,1-.726.292,4.377,4.377,0,0,1-1.018.105,5.773,5.773,0,0,1-1.969-.35A5.874,5.874,0,0,1,18.245,23.759Zm-5.154-7.638h4V13.594H5.938v2.527H9.92V27.375h3.171Z"
              style={{ fill: "#ffffff", fillRule: "evenodd" }}
            />
          </svg>
        </a>
      </div>

      <Modal
        id="my_modal_19"
        logo={
          <>
            <svg
              viewBox="0 0 256 256"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid"
              className="w-16 h-16 lg:w-16 lg:h-16"
              fill="#000000"
            >
              <polygon
                fill="#007ACC"
                points="0 128 0 0 128 0 256 0 256 128 256 256 128 256 0 256"
              />
              <path
                d="M146.658132,223.436863 L146.739401,212.953054 L130.079084,212.953054 L113.418767,212.953054 
           L113.418767,165.613371 L113.418767,118.273689 L101.63464,118.273689 L89.8505126,118.273689 
           L89.8505126,165.613371 L89.8505126,212.953054 L73.1901951,212.953054 L56.5298776,212.953054 
           L56.5298776,223.233689 C56.5298776,228.922577 56.6517824,233.676863 56.8143221,233.798768 
           C56.9362269,233.961308 77.2130522,234.042577 101.797179,234.001943 L146.536227,233.880038 
           L146.658132,223.436863 Z"
                fill="#FFFFFF"
                transform="scale(1, -1) translate(0, -352)"
              />
              <path
                d="M206.566631,234.272145 C213.068219,232.646748 218.025679,229.761668 222.57679,225.048018 
           C224.933616,222.528653 228.428219,217.936907 228.712663,216.839764 
           C228.793933,216.514684 217.659965,209.037859 210.914568,204.852462 
           C210.670758,204.689922 209.69552,205.74643 208.598377,207.371827 
           C205.306949,212.166748 201.852981,214.239129 196.570441,214.604843 
           C188.809171,215.133097 183.811076,211.069605 183.851711,204.283573 
           C183.851711,202.292462 184.136155,201.114049 184.948854,199.488653 
           C186.65552,195.953414 189.825044,193.840399 199.7806,189.533097 
           C218.106949,181.649922 225.949489,176.448653 230.825679,169.053097 
           C236.270758,160.804208 237.489806,147.638494 233.792028,137.845478 
           C229.728536,127.199129 219.651076,119.966113 205.469489,117.568653 
           C201.080917,116.796589 190.678377,116.918494 185.964727,117.771827 
           C175.684092,119.600399 165.931711,124.679764 159.917743,131.343891 
           C157.560917,133.944526 152.969171,140.730557 153.253616,141.218176 
           C153.37552,141.380716 154.432028,142.030875 155.610441,142.721668 
           C156.748219,143.371827 161.05552,145.850557 165.119012,148.207383 
           L172.473933,152.474049 L174.01806,150.198494 
           C176.171711,146.907065 180.885362,142.396589 183.729806,140.893097 
           C191.897425,136.585795 203.112663,137.195319 208.639012,142.15278 
           C210.995838,144.30643 211.971076,146.541351 211.971076,149.83278 
           C211.971076,152.799129 211.605362,154.099446 210.061235,156.334367 
           C208.070123,159.178811 204.006631,161.576272 192.466314,166.574367 
           C179.259965,172.263256 173.571076,175.798494 168.369806,181.406113 
           C165.362822,184.656907 162.518377,189.858176 161.339965,194.206113 
           C160.364727,197.822621 160.120917,206.884208 160.892981,210.541351 
           C163.61552,223.300716 173.245996,232.199764 187.143139,234.841034 
           C191.653616,235.694367 202.137425,235.369287 206.566631,234.272145 Z"
                fill="#FFFFFF"
                transform="scale(1, -1) translate(0, -352)"
              />
            </svg>
          </>
        }
        title={<>TypeScript</>}
        content={
          <>
            <>
            TypeScript (abbreviated as TS) is a free and open-source high-level programming language developed by Microsoft that adds static typing with optional type annotations to JavaScript. It is designed for the development of large applications and transpiles to JavaScript.
            </>
          </>
        }
      />
      <div
        className="tooltip tooltip-primary tooltip-bottom cursor-pointer"
        data-tip="Angular"
      >
        <a onClick={() => openModal("my_modal_18")} className="p-4 rounded">
          <svg
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-16 h-16 lg:w-24 lg:h-24"
          >
            <path d="M16 2L3 7L5 24L16 30L27 24L29 7L16 2Z" fill="#DD0031" />
            <path d="M16 2V30L27 24L29 7L16 2Z" fill="#C3002F" />
            <path
              d="M15.9998 5.09375L7.87305 23.3638H10.9031L12.5368 19.2757H19.4348L21.0685 23.3638H24.0986L15.9998 5.09375ZM18.3736 16.7557H13.626L15.9998 11.0298L18.3736 16.7557Z"
              fill="white"
            />
          </svg>
        </a>
      </div>
      <Modal
        id="my_modal_18"
        logo={
          <>
            <svg
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-16 h-16 lg:w-24 lg:h-24"
            >
              <path d="M16 2L3 7L5 24L16 30L27 24L29 7L16 2Z" fill="#DD0031" />
              <path d="M16 2V30L27 24L29 7L16 2Z" fill="#C3002F" />
              <path
                d="M15.9998 5.09375L7.87305 23.3638H10.9031L12.5368 19.2757H19.4348L21.0685 23.3638H24.0986L15.9998 5.09375ZM18.3736 16.7557H13.626L15.9998 11.0298L18.3736 16.7557Z"
                fill="white"
              />
            </svg>
          </>
        }
        title={<>Angular</>}
        content={
          <>
            <>
              Angular is an open-source, JavaScript framework written in
              TypeScript. Google maintains it, and its primary purpose is to
              develop single-page applications. As a framework, Angular has
              clear advantages while also providing a standard structure for
              developers to work with.
            </>
          </>
        }
      />
      <div
        className="tooltip tooltip-primary tooltip-bottom cursor-pointer"
        data-tip="Vite"
      >
        <a onClick={() => openModal("my_modal_17")} className="p-4 rounded">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-16 h-16 lg:w-24 lg:h-24"
          >
            <title>file_type_vite</title>
            <path
              d="M29.8836 6.146L16.7418 29.6457c-.2714.4851-.9684.488-1.2439.0052L2.0956 6.1482c-.3-.5262.1498-1.1635.746-1.057l13.156 2.3516a.7144.7144 0 00.2537-.0004l12.8808-2.3478c.5942-.1083 1.0463.5241.7515 1.0513z"
              fill="url(#paint0_linear)"
            />
            <path
              d="M22.2644 2.0069l-9.7253 1.9056a.3571.3571 0 00-.2879.3294l-.5982 10.1038c-.014.238.2045.4227.4367.3691l2.7077-.6248c.2534-.0585.4823.1647.4302.4194l-.8044 3.9393c-.0542.265.1947.4918.4536.4132l1.6724-.5082c.2593-.0787.5084.1487.4536.414l-1.2784 6.1877c-.08.387.4348.598.6495.2662L16.5173 25 24.442 9.1848c.1327-.2648-.096-.5667-.387-.5106l-2.787.5379c-.262.0505-.4848-.1934-.4109-.4497l1.8191-6.306c.074-.2568-.1496-.5009-.4118-.4495z"
              fill="url(#paint1_linear)"
            />
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="6.0002"
                y1="32.9999"
                x2="235"
                y2="344"
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(.07142 0 0 .07142 1.3398 1.8944)"
              >
                <stop stopColor="#41D1FF" />
                <stop offset="1" stopColor="#BD34FE" />
              </linearGradient>
              <linearGradient
                id="paint1_linear"
                x1="194.651"
                y1="8.8182"
                x2="236.076"
                y2="292.989"
                gradientUnits="userSpaceOnUse"
                gradientTransform="matrix(.07142 0 0 .07142 1.3398 1.8944)"
              >
                <stop stopColor="#FFEA83" />
                <stop offset=".0833" stopColor="#FFDD35" />
                <stop offset="1" stopColor="#FFA800" />
              </linearGradient>
            </defs>
          </svg>
        </a>
      </div>

      <Modal
        id="my_modal_17"
        logo={
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-16 h-16 lg:w-24 lg:h-24"
            >
              <title>file_type_vite</title>
              <path
                d="M29.8836 6.146L16.7418 29.6457c-.2714.4851-.9684.488-1.2439.0052L2.0956 6.1482c-.3-.5262.1498-1.1635.746-1.057l13.156 2.3516a.7144.7144 0 00.2537-.0004l12.8808-2.3478c.5942-.1083 1.0463.5241.7515 1.0513z"
                fill="url(#paint0_linear)"
              />
              <path
                d="M22.2644 2.0069l-9.7253 1.9056a.3571.3571 0 00-.2879.3294l-.5982 10.1038c-.014.238.2045.4227.4367.3691l2.7077-.6248c.2534-.0585.4823.1647.4302.4194l-.8044 3.9393c-.0542.265.1947.4918.4536.4132l1.6724-.5082c.2593-.0787.5084.1487.4536.414l-1.2784 6.1877c-.08.387.4348.598.6495.2662L16.5173 25 24.442 9.1848c.1327-.2648-.096-.5667-.387-.5106l-2.787.5379c-.262.0505-.4848-.1934-.4109-.4497l1.8191-6.306c.074-.2568-.1496-.5009-.4118-.4495z"
                fill="url(#paint1_linear)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="6.0002"
                  y1="32.9999"
                  x2="235"
                  y2="344"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="matrix(.07142 0 0 .07142 1.3398 1.8944)"
                >
                  <stop stopColor="#41D1FF" />
                  <stop offset="1" stopColor="#BD34FE" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear"
                  x1="194.651"
                  y1="8.8182"
                  x2="236.076"
                  y2="292.989"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="matrix(.07142 0 0 .07142 1.3398 1.8944)"
                >
                  <stop stopColor="#FFEA83" />
                  <stop offset=".0833" stopColor="#FFDD35" />
                  <stop offset="1" stopColor="#FFA800" />
                </linearGradient>
              </defs>
            </svg>
          </>
        }
        title={<>Vite</>}
        content={
          <>
            <>
              Vite is a fast and lean development tool for building modern web
              projects, particularly focused on speeding up the development
              process.
            </>
          </>
        }
      />
      <div
        className="tooltip tooltip-primary tooltip-bottom cursor-pointer"
        data-tip="React JS"
      >
        <a onClick={() => openModal("my_modal_1")} className="p-4 rounded">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            className=" w-16 h-16 lg:w-24 lg:h-24 "
          >
            <path
              fill="#80deea"
              d="M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16	c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z"
            ></path>
            <path
              fill="#80deea"
              d="M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5	c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z M32.9,5.4	c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9	c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z"
            ></path>
            <path
              fill="#80deea"
              d="M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19	c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2	c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z"
            ></path>
            <circle cx="24" cy="24" r="4" fill="#80deea"></circle>
          </svg>
        </a>
      </div>
      <Modal
        id="my_modal_1"
        logo={
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              className=" w-16 h-16 lg:w-24 lg:h-24 flex justify-center"
            >
              <path
                fill="#80deea"
                d="M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16	c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z"
              ></path>
              <path
                fill="#80deea"
                d="M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5	c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z M32.9,5.4	c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9	c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z"
              ></path>
              <path
                fill="#80deea"
                d="M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19	c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2	c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z"
              ></path>
              <circle cx="24" cy="24" r="4" fill="#80deea"></circle>
            </svg>
          </>
        }
        title={<>React JS</>}
        content={
          <>
            <>
              React, is a free, open-source JavaScript library. It works best to
              build user interfaces by combining sections of code (components)
              into full websites.
            </>
          </>
        }
      />
      <div
        className="tooltip tooltip-primary tooltip-bottom cursor-pointer"
        data-tip="Tailwind CSS"
      >
        <a onClick={() => openModal("my_modal_2")} className="p-4 rounded">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            className=" w-16 h-16 lg:w-24 lg:h-24 "
          >
            <linearGradient
              id="iOmQfjoCC4Hw6zVwRjSDha_x7XMNGh2vdqA_gr1"
              x1="21.861"
              x2="25.703"
              y1="8.237"
              y2="36.552"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#00c1e0"></stop>
              <stop offset="1" stopColor="#009bb8"></stop>
            </linearGradient>
            <path
              fill="url(#iOmQfjoCC4Hw6zVwRjSDha_x7XMNGh2vdqA_gr1)"
              d="M24,9.604c-5.589,0-9.347,2.439-11.276,7.318c-0.2,0.505,0.417,0.92,0.816,0.551 c2.035-1.882,4.322-2.505,6.86-1.871c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24 c5.589,0,9.348-2.44,11.276-7.319c0.2-0.505-0.417-0.92-0.816-0.551c-2.035,1.882-4.322,2.506-6.86,1.872 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-5.589,0-9.348,2.44-11.276,7.319 c-0.2,0.505,0.417,0.92,0.816,0.551c2.035-1.882,4.322-2.506,6.86-1.871c1.825,0.457,3.13,1.781,4.575,3.246 c2.353,2.388,5.077,5.152,11.025,5.152c5.589,0,9.348-2.44,11.276-7.319c0.2-0.505-0.417-0.92-0.816-0.551 c-2.035,1.882-4.322,2.506-6.86,1.871c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24L12,24z"
            ></path>
          </svg>
        </a>
      </div>
      <Modal
        id="my_modal_2"
        logo={
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              className=" w-16 h-16 lg:w-24 lg:h-24 "
            >
              <linearGradient
                id="iOmQfjoCC4Hw6zVwRjSDha_x7XMNGh2vdqA_gr1"
                x1="21.861"
                x2="25.703"
                y1="8.237"
                y2="36.552"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#00c1e0"></stop>
                <stop offset="1" stopColor="#009bb8"></stop>
              </linearGradient>
              <path
                fill="url(#iOmQfjoCC4Hw6zVwRjSDha_x7XMNGh2vdqA_gr1)"
                d="M24,9.604c-5.589,0-9.347,2.439-11.276,7.318c-0.2,0.505,0.417,0.92,0.816,0.551 c2.035-1.882,4.322-2.505,6.86-1.871c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24 c5.589,0,9.348-2.44,11.276-7.319c0.2-0.505-0.417-0.92-0.816-0.551c-2.035,1.882-4.322,2.506-6.86,1.872 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-5.589,0-9.348,2.44-11.276,7.319 c-0.2,0.505,0.417,0.92,0.816,0.551c2.035-1.882,4.322-2.506,6.86-1.871c1.825,0.457,3.13,1.781,4.575,3.246 c2.353,2.388,5.077,5.152,11.025,5.152c5.589,0,9.348-2.44,11.276-7.319c0.2-0.505-0.417-0.92-0.816-0.551 c-2.035,1.882-4.322,2.506-6.86,1.871c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24L12,24z"
              ></path>
            </svg>
          </>
        }
        title={<>Tailwind CSS</>}
        content={
          <>
            <>
              Tailwind CSS is a utility-first CSS (Cascading Style Sheets)
              framework with predefined classes that you can use to build and
              design web pages directly in your markup. It lets you write CSS in
              your HTML in the form of predefined classes.
            </>
          </>
        }
      />
      <div
        className="tooltip tooltip-primary tooltip-bottom cursor-pointer"
        data-tip="Bootstrap CSS"
      >
        <a onClick={() => openModal("my_modal_3")} className="p-3 rounded">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            className="fill-current w-16 h-16 lg:w-24 lg:h-24 "
          >
            <path
              fill="#7c4dff"
              d="M7.373,11.443C7.293,9.132,9.094,7,11.529,7h24.946c2.435,0,4.236,2.132,4.155,4.443	c-0.077,2.221,0.023,5.097,0.747,7.443c0.726,2.353,1.951,3.84,3.957,4.031v2.167c-2.006,0.191-3.23,1.678-3.957,4.031	c-0.724,2.345-0.824,5.222-0.747,7.443C40.71,38.868,38.909,41,36.475,41H11.529c-2.434,0-4.236-2.132-4.155-4.443	c0.077-2.221-0.023-5.097-0.747-7.443c-0.726-2.353-1.954-3.84-3.96-4.031v-2.167c2.006-0.191,3.233-1.678,3.96-4.031	C7.35,16.54,7.451,13.664,7.373,11.443z"
            ></path>
            <path
              fill="#fff"
              d="M27.073,23.464v-0.028c1.853-0.32,3.299-2.057,3.299-3.97c0-1.352-0.52-2.498-1.504-3.312	c-0.981-0.812-2.357-1.241-3.981-1.241H17.45V33.08h7.475c1.942,0,3.555-0.474,4.663-1.372c1.109-0.899,1.696-2.207,1.696-3.783	C31.283,25.544,29.593,23.756,27.073,23.464z M23.59,22.608h-3.181V17.29h3.784c2.076,0,3.219,0.911,3.219,2.565	C27.413,21.63,26.055,22.608,23.59,22.608z M20.409,24.834h3.759c2.716,0,4.092,0.981,4.092,2.916c0,1.932-1.357,2.953-3.925,2.953	h-3.926V24.834z"
            ></path>
          </svg>
        </a>
      </div>
      <Modal
        id="my_modal_3"
        logo={
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              className="fill-current w-16 h-16 lg:w-24 lg:h-24 "
            >
              <path
                fill="#7c4dff"
                d="M7.373,11.443C7.293,9.132,9.094,7,11.529,7h24.946c2.435,0,4.236,2.132,4.155,4.443	c-0.077,2.221,0.023,5.097,0.747,7.443c0.726,2.353,1.951,3.84,3.957,4.031v2.167c-2.006,0.191-3.23,1.678-3.957,4.031	c-0.724,2.345-0.824,5.222-0.747,7.443C40.71,38.868,38.909,41,36.475,41H11.529c-2.434,0-4.236-2.132-4.155-4.443	c0.077-2.221-0.023-5.097-0.747-7.443c-0.726-2.353-1.954-3.84-3.96-4.031v-2.167c2.006-0.191,3.233-1.678,3.96-4.031	C7.35,16.54,7.451,13.664,7.373,11.443z"
              ></path>
              <path
                fill="#fff"
                d="M27.073,23.464v-0.028c1.853-0.32,3.299-2.057,3.299-3.97c0-1.352-0.52-2.498-1.504-3.312	c-0.981-0.812-2.357-1.241-3.981-1.241H17.45V33.08h7.475c1.942,0,3.555-0.474,4.663-1.372c1.109-0.899,1.696-2.207,1.696-3.783	C31.283,25.544,29.593,23.756,27.073,23.464z M23.59,22.608h-3.181V17.29h3.784c2.076,0,3.219,0.911,3.219,2.565	C27.413,21.63,26.055,22.608,23.59,22.608z M20.409,24.834h3.759c2.716,0,4.092,0.981,4.092,2.916c0,1.932-1.357,2.953-3.925,2.953	h-3.926V24.834z"
              ></path>
            </svg>
          </>
        }
        title={<>Bootstrap CSS</>}
        content={
          <>
            <>
              Bootstrap is a free, open source front-end development framework
              for the creation of websites and web apps. Designed to enable
              responsive development of mobile-first websites, Bootstrap
              provides a collection of syntax for template designs.
            </>
          </>
        }
      />
      <div
        className="tooltip tooltip-primary tooltip-bottom cursor-pointer "
        data-tip="Javascript"
      >
        <a onClick={() => openModal("my_modal_4")} className="p-3 rounded">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            className=" w-16 h-16 lg:w-24 lg:h-24 "
          >
            <path fill="#ffd600" d="M6,42V6h36v36H6z"></path>
            <path
              fill="#000001"
              d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"
            ></path>
          </svg>
        </a>
      </div>
      <Modal
        id="my_modal_4"
        logo={
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              className=" w-16 h-16 lg:w-24 lg:h-24 "
            >
              <path fill="#ffd600" d="M6,42V6h36v36H6z"></path>
              <path
                fill="#000001"
                d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"
              ></path>
            </svg>
          </>
        }
        title={<>Javascript</>}
        content={
          <>
            <>
              JavaScript is a scripting language for creating dynamic web page
              content. It creates elements for improving site visitors'
              interaction with web pages, such as dropdown menus, animated
              graphics, and dynamic background colors.
            </>
          </>
        }
      />
      <div
        className="tooltip tooltip-primary tooltip-bottom cursor-pointer"
        data-tip="HTML 5"
      >
        <a onClick={() => openModal("my_modal_5")} className="p-1 rounded">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            className=" w-16 h-16 lg:w-24 lg:h-24 "
          >
            <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path>
            <path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
            <path
              fill="#FFF"
              d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"
            ></path>
            <path
              fill="#EEE"
              d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"
            ></path>
          </svg>
        </a>
      </div>
      <Modal
        id="my_modal_5"
        logo={
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              className=" w-16 h-16 lg:w-24 lg:h-24 "
            >
              <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path>
              <path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
              <path
                fill="#FFF"
                d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"
              ></path>
              <path
                fill="#EEE"
                d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"
              ></path>
            </svg>
          </>
        }
        title={<>HTML 5</>}
        content={
          <>
            <>
              HTML (HyperText Markup Language) is the code that is used to
              structure a web page and its content. For example, content could
              be structured within a set of paragraphs, a list of bulleted
              points, or using images and data tables.
            </>
          </>
        }
      />
      <div
        className="tooltip tooltip-primary tooltip-bottom cursor-pointer"
        data-tip="CSS"
      >
        <a onClick={() => openModal("my_modal_6")} className=" rounded">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 48 48"
            className=" w-16 h-16 lg:w-24 lg:h-24 "
          >
            <path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path>
            <path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
            <path
              fill="#FFF"
              d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"
            ></path>
            <path
              fill="#EEE"
              d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"
            ></path>
          </svg>
        </a>
      </div>
      <Modal
        id="my_modal_6"
        logo={
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 48 48"
              className=" w-16 h-16 lg:w-24 lg:h-24 "
            >
              <path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path>
              <path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
              <path
                fill="#FFF"
                d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"
              ></path>
              <path
                fill="#EEE"
                d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"
              ></path>
            </svg>
          </>
        }
        title={<>CSS</>}
        content={
          <>
            <>
              CSS stands for Cascading Style Sheets. CSS describes how HTML
              elements are to be displayed on screen, paper, or in other media.
              CSS saves a lot of work. It can control the layout of multiple web
              pages all at once.
            </>
          </>
        }
      />
    </div>
  );
};

export default frontEnd;
