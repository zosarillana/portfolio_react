import React from "react";
import Home from "../sections/Home";
import About from "../sections/hero/About";
import Tools from "../sections/hero/Tools";
import Services from "../sections/hero/Services";
import Timeline from "../sections/hero/Timeline";
import MyWorksComponent from "../sections/hero/Works";
import ThemeSwitcher from "./components/themeSwitcher";
import SidebarContents from "./components/sidebarContents";
import { Link, animateScroll as scroll } from "react-scroll";
import Contact from "../contact/contact";

function Header() {
  return (
    <div className="drawer z-50">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Navbar */}
        <div className="navbar bg-base-100 sticky top-0 z-50">
          <div className="flex-none">
            <label
              htmlFor="my-drawer"
              className="btn btn-square lg:hidden btn-ghost drawer-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 text-center lg:text-left">
            <Link
              to="section1"
              smooth={true}
              duration={1300}
              className="btn btn-ghost text-xl">
              dbl.zs
            </Link>
          </div>

          <div className="flex-none justify-center">
            {/*theme switcher*/}
            <ul className="menu hidden lg:flex menu-horizontal px-1">
              <li>
                <Link to="section1" smooth={true} duration={1300}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="section2" smooth={true} duration={500}>
                  About
                </Link>
              </li>
              <li>
                <Link to="section3" smooth={true} duration={500}>
                  Services
                </Link>
              </li>
              <li>
                <Link to="section4" smooth={true} duration={500}>
                  Tools
                </Link>
              </li>
              <li>
                <Link to="section5" smooth={true} duration={500}>
                  Works
                </Link>
              </li>
              <li>
                <Link to="section6" smooth={true} duration={500}>
                  Timeline
                </Link>
              </li>
              <li>
                <Link to="section7" smooth={true} duration={500}>
                  Contact
                </Link>
              </li>
            </ul>
            <ThemeSwitcher />
          </div>
        </div>
        {/* Page content here */}
        <Home />
        {/* Other Sections */}
        <div className="z-30">
          <div id="section2">
            <About />
          </div>
          <div id="section3">
            <Services />
          </div>
          <div id="section4">
            <Tools />
          </div>
          <div id="section5">
            <MyWorksComponent />
          </div>
          <div id="section6">
            <Timeline />
          </div>
          <div id="section7">
            <Contact />
          </div>
        </div>
      </div>
      <div className="drawer-side z-50">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <div className="flex justify-end">
            <label htmlFor="my-drawer" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </label>
          </div>
          {/* Assuming SidebarContents is a component */}
          <SidebarContents />
        </ul>
      </div>
    </div>
  );
}

export default Header;
