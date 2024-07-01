import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import FrontEnd from "./langg_components/frontend";
import BackEnd from "./langg_components/backend";
import Others from "./langg_components/others";

const Tools = () => {
  // Hook to manage the in-view state of each section
  const [frontEndRef, frontEndInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const [backEndRef, backEndInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const [othersRef, othersInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div className="hero min-h-screen bg-base-800">
      <div className="hero-content justify-center lg:justify-start">
        <div>
          <motion.div
            ref={frontEndRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: frontEndInView ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="lg:text-7xl text-4xl font-extrabold text-start">
            Tools I rely on for programming
          </motion.div>
          <motion.div
            ref={frontEndRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: frontEndInView ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="lg:text-sm text-xs mt-5 font-bold text-start lg:text-center">
            ( Click the icons! )
          </motion.div>

          <div className="flex flex-wrap pt-3">
            <motion.div
              ref={frontEndRef}
              initial={{ opacity: 0 }}
              animate={{ opacity: frontEndInView ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              className="w-full md:w-1/3 p-5">
              <h1 className="lg:text-2xl text-1xl font-bold text-start lg:text-center">
                Front End
              </h1>
              <div className="pt-2 text-justify">
                <FrontEnd />
              </div>
            </motion.div>

            <motion.div
              ref={backEndRef}
              initial={{ opacity: 0 }}
              animate={{ opacity: backEndInView ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-1/3 md:w-1/3 p-5">
              <h1 className="lg:text-2xl text-1xl font-bold text-start lg:text-center">
                Back End
              </h1>
              <div className="pt-2 text-justify">
                <BackEnd />
              </div>
            </motion.div>

            <motion.div
              ref={othersRef}
              initial={{ opacity: 0 }}
              animate={{ opacity: othersInView ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              className="w-full md:w-1/3 p-5">
              <h1 className="lg:text-2xl text-1xl font-bold text-start lg:text-center">
                Others
              </h1>
              <div className="pt-2 text-justify">
                <Others />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
