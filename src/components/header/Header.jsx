import React from "react";
import Home from "../sections/Home";
import ThemeSwitcher from "./components/themeSwitcher";
import SidebarContents from "./components/sidebarContents";

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
              className="btn btn-square btn-ghost drawer-button">
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
            <a className="btn btn-ghost text-xl">daisyUI</a>
          </div>
          <div className="flex-none  hidden lg:flex justify-center">
            {/*theme switcher*/}
            {/* Assuming ThemeSwitcher is a component */}
            <ThemeSwitcher />
          </div>
        </div>
        {/* Page content here */}
        <Home />
      </div>
      <div className="drawer-side z-50">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          {/* Assuming SidebarContents is a component */}
          <SidebarContents />
        </ul>
      </div>
    </div>
  );
}

export default Header;
