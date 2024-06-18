import React, { Component } from "react";
import About from "./hero/About";
import Vid from "../videos/vid.mp4";
import Plx from "react-plx";

const parallaxDataScale = [
  {
    start: 0,
    end: 700,
    easing: "ease-in",
    properties: [
      {
        startValue: 1,
        endValue: 1.6,
        property: "scale",
      },
    ],
  },
];

const parallaxDataHeight = [
  {
    start: 0,
    end: 700,
    easing: "ease-in",
    properties: [
      {
        startValue: 100,
        endValue: 100, // Adjust this value as needed to push the content below
        property: "height",
        unit: "vh",
      },
    ],
  },
];

export const Home = () => {
  return (
    <div>
      <Plx
        parallaxData={parallaxDataHeight}
        style={{
          position: "relative",
          left: 0,
          top: 0,
          width: "100%",
          overflow: "hidden",
        }}>
        <Plx
          parallaxData={parallaxDataScale}
          style={{
            position: "relative",
            left: 0,
            top: 0,
            width: "100%",
            zIndex: 0,
          }}>
          <div className="hero min-h-screen bg-base-200 relative overflow-hidden">
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
              <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src={Vid}
                autoPlay
                loop
                muted
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
            </div>
            {/* Hero Content */}
            <div className="inset-0 z-20 flex items-center text-start justify-center text-white">
              <div>
                <h1 className="text-3xl lg:text-4xl text-justify lg:text-start font-extrabold mb-4">
                  This web portfolio is created by a passionate developer
                </h1>
                <p className="text-1xl lg:text-2xl font-extrabold">
                  Base in Davao City, Philipipnes
                </p>
              </div>
            </div>
          </div>
        </Plx>
      </Plx>
      {/* Other Sections */}
      <div className="z-30">
        <About />
      </div>
    </div>
  );
};

export default Home;
