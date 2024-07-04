import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, Element } from "react-scroll";
import Plx from "react-plx";
import Vid from "../videos/vid.mp4";
import useScrollPosition from "./useScrollPosition"; // Import the custom hook

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
        endValue: 100,
        property: "height",
        unit: "vh",
      },
    ],
  },
];

const Home = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const alertElement = document.getElementById("alert");
    setTimeout(() => {
      alertElement.style.opacity = 0;
    }, 1000); // Change the delay as needed
  }, []);

  const scrollPosition = useScrollPosition(); // Use the custom hook

  // Define the breakpoint for when to switch the button
  const section1Height = 700; // Adjust based on your section1 height

  const renderLink = () => {
    const linkProps = {
      smooth: true,
      duration: 1300,
      className:
        "z-50 text-white flex flex-col shrink-0 grow-0 justify-around fixed bottom-0 right-0 right-5 rounded-lg mr-1 mb-5 lg:mr-5 lg:mb-5 xl:mr-10 xl:mb-10 cursor-pointer",
    };

    if (scrollPosition < section1Height) {
      return (
        <Link to="section7" {...linkProps}>
          <div className="p-3 rounded-full border-4 border-primary glass">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-10 h-10 lg:w-10 lg:h-10 xl:w-12 xl:h-12 text-secondary">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
          </div>
        </Link>
      );
    } else {
      return (
        <Link to="section1" {...linkProps}>
          <div className="p-3 rounded-full border-4 border-primary glass">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-10 h-10 lg:w-10 lg:h-10 xl:w-12 xl:h-12 text-secondary">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </div>
        </Link>
      );
    }
  };

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
          <Element
            name="section1"
            className="hero min-h-screen bg-base-200 relative overflow-hidden">
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
                  Based in Davao City, Philippines
                </p>
              </div>
            </div>
          </Element>
        </Plx>
      </Plx>
      <div className="relative">{renderLink()}</div>
      {isVisible && (
        <motion.div
          id="alert"
          role="alert"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 8.8 }}
          className="alert shadow-lg justify-around fixed bottom-0 rounded-md mr-1 mb-5 lg:mr-5 lg:mb-5 xl:mr-10 xl:mb-10 lg:mt-20 lg:hidden z-50"
          onAnimationComplete={() => setIsVisible(false)} // Hide component after animation completes
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-info h-6 w-6 shrink-0">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <div>
            <h3 className="font-bold">Quick Tip!</h3>
            <div className="text-xs">
              When in mobile view, you can do quick navigation by clicking the
              drawer!
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Home;
