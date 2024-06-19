import FrontEnd from "./langg_components/frontend";
import BackEnd from "./langg_components/backend";
import Others from "./langg_components/others";
import React from "react";

export const Tools = () => {
  return (
    <div className="hero min-h-screen bg-base-800">
      <div className="hero-content justify-center lg:justify-start">
        <div>
          <h1 className="lg:text-7xl text-4xl font-extrabold text-start">
            Tools I rely on for programming
          </h1>

          <div className="flex flex-wrap pt-3">
            <div className="w-full md:w-1/3 p-5">
              <h1 className="lg:text-2xl text-1xl font-bold text-start lg:text-center">
                Front End
              </h1>
              <div className="pt-2 text-justify">
                <FrontEnd />
              </div>
            </div>
            <div className="w-full  lg:w-1/3 md:w-1/3 p-5">
              <h1 className="lg:text-2xl text-1xl font-bold text-start lg:text-center">
                Back End
              </h1>
              <div className="pt-2 text-justify">
                <BackEnd />
              </div>
            </div>
            <div className="w-full md:w-1/3 p-5">
              <h1 className="lg:text-2xl text-1xl font-bold text-start lg:text-center">
                Others
              </h1>
              <div className="pt-2 text-justify">
                <Others />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
