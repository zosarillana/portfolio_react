import Logo from "../../images/logo.png";
import React from "react";
import ThemeSwitcher from "./themeSwitcher";
import { Link, animateScroll as scroll } from "react-scroll";

export const sidebarContents = () => {
  return (
    <div>
      <div className="flex justify-center">
        <a href="#">
          <img src={Logo} alt="Description" className="w-32 h-32" />
        </a>
      </div>

      <div className="flex justify-center mt-2">
        <p className="text-2xl font-bold">Zoren Jake Sarillana</p>
      </div>
      <div className=" flex justify-center pt-2 grid-flow-col gap-4">
        <a
          href="https://www.facebook.com/zjakesarillana"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded hover:bg-blue-500 justify-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="fill-current w-5 h-5">
            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
          </svg>
        </a>
        <a
          href="https://www.instagram.com/zo.jake999/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded hover:bg-blue-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
            className="fill-current w-5 h-5">
            <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
          </svg>
        </a>
        <a
          href="https://github.com/zosarillana"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded hover:bg-blue-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
            className="fill-current w-5 h-5">
            <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
          </svg>
        </a>
      </div>
      {/* <div className="flex mt-2 lg:hidden justify-center">
        <ThemeSwitcher />
      </div> */}
      <div className="divider"></div>
      <div className="lg:hidden ">
        <li>
          <Link to="section1" smooth={true} duration={1300}>
            Home
          </Link>
        </li>
      </div>
      <div className="lg:hidden ">
        <li>
          <Link to="section2" smooth={true} duration={500}>
            About
          </Link>
        </li>
      </div>
      <div className="lg:hidden ">
        <li>
          <Link to="section3" smooth={true} duration={500}>
            Services
          </Link>
        </li>
      </div>
      <div className="lg:hidden ">
        <li>
          <Link to="section4" smooth={true} duration={500}>
            Tools
          </Link>
        </li>
      </div>
      <div className="lg:hidden ">
        <li>
          <Link to="section5" smooth={true} duration={500}>
            Works
          </Link>
        </li>
      </div>
      <div className="lg:hidden ">
        <li>
          <Link to="section6" smooth={true} duration={500}>
            Timeline
          </Link>
        </li>
      </div>
      <div className=" ">
        <li>
          <Link to="section7" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </div>
    </div>
  );
};

export default sidebarContents;
