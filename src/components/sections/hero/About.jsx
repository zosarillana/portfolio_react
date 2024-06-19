import React from "react";
import { motion, useInView } from "framer-motion";

export const About = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col text-justfiy lg:flex-row">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.35 }}
          className="">
          <h1 className="lg:text-7xl text-start text-4xl font-extrabold">
            Hi, my name is Zoren Jake Sarillana, a Web Developer based in Davao
            City, Philippines
          </h1>
          <p className="py-6 text-justify">
            You can call me Zo. I'm a Front and Back End Developer from Davao
            City. I take pleasure in unleashing creativity and crafting websites
            and applications that align perfectly with your preferences,
            leveraging the latest technologies and implementing clean design
            patterns.
          </p>
          <div className="flex space-x-4 items-center">
            <a
              className="btn btn-secondary pr-4"
              target="_blank"
              rel="noopener noreferrer">
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
