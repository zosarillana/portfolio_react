import React from "react";
import { motion, useInView } from "framer-motion";

export const Services = () => {
  const ref = React.useRef(null);
  const ref1 = React.useRef(null);
  const ref2 = React.useRef(null);
  const ref3 = React.useRef(null);

  const isInView = useInView(ref, { once: false, amount: 0.5 });
  const isInView1 = useInView(ref1, { once: false, amount: 0.5 });
  const isInView2 = useInView(ref2, { once: false, amount: 0.5 });
  const isInView3 = useInView(ref3, { once: false, amount: 0.5 });

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content justify-center lg:justify-start">
          <div className="lg:mr-4 lg:text-left text-start">
            <motion.div
              ref={ref}
              initial={{ opacity: 0 }}
              animate={{ opacity: isInView ? 1 : 0 }}
              transition={{ duration: 0.35 }}
              className="lg:text-7xl text-start text-3xl font-extrabold">
              What I Do
            </motion.div>
            <div className="flex flex-wrap pt-2">
              <motion.div
                ref={ref1}
                initial={{ opacity: 0 }}
                animate={{ opacity: isInView1 ? 1 : 0 }}
                transition={{ duration: 0.35, delay: 0.15 }}
                className="w-full md:w-1/3 p-5">
                <h1 className="lg:text-4xl pt-2 text-1xl font-bold flex items-center text-start">
                  Front End
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    className="pl-2 w-12 h-12">
                    <path
                      fill="#E65100"
                      d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path>
                    <path
                      fill="#FF6D00"
                      d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
                    <path
                      fill="#FFF"
                      d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"></path>
                    <path
                      fill="#EEE"
                      d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"></path>
                  </svg>
                </h1>
                <p className="pt-2 text-justify">
                  I specialize in delivering clean, creative, and responsive
                  designs using the latest tools and modern technologies. My
                  goal is to create a unique and modern website that perfectly
                  reflects your style and meets your specific requirements. By
                  focusing on user experience and employing cutting-edge design
                  principles, I ensure your website is not only visually
                  appealing but also highly functional across all devices. Let's
                  collaborate to transform your vision into a digital reality
                  that enhances your online presence and achieves your business
                  goals.
                </p>
              </motion.div>

              <motion.div
                ref={ref2}
                initial={{ opacity: 0 }}
                animate={{ opacity: isInView2 ? 1 : 0 }}
                transition={{ duration: 0.35, delay: 0.2 }}
                className="w-full md:w-1/3 p-5">
                <h1 className="lg:text-4xl pt-2  text-1xl font-bold flex items-center  text-start ">
                  Back End
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-10 h-10 ml-4">
                    <path
                      fillRule="evenodd"
                      d="M14.447 3.026a.75.75 0 0 1 .527.921l-4.5 16.5a.75.75 0 0 1-1.448-.394l4.5-16.5a.75.75 0 0 1 .921-.527ZM16.72 6.22a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 0 1 0-1.06Zm-9.44 0a.75.75 0 0 1 0 1.06L2.56 12l4.72 4.72a.75.75 0 0 1-1.06 1.06L.97 12.53a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.06 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </h1>
                <p className="pt-2 text-justify">
                  I specialize in backend development, where I focus on data
                  handling, API integration, and custom functionalities based on
                  client needs. Using tools and leveraging modern frameworks
                  like Laravel, I ensure smooth and efficient website and
                  application performance. My goal is to create backend
                  solutions that enhance functionality and user experience,
                  delivering reliable and scalable results. Let's collaborate to
                  bring your project to life with robust backend development
                  that meets your specific requirements and exceeds
                  expectations.
                </p>
              </motion.div>
              <motion.div
                ref={ref3}
                initial={{ opacity: 0 }}
                animate={{ opacity: isInView3 ? 1 : 0 }}
                transition={{ duration: 0.35, delay: 0.25 }}
                className="w-full md:w-1/3 p-5">
                <h1 className="lg:text-4xl pt-2  text-1xl font-bold flex items-center  text-start ">
                  Editing
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    className="ml-4 w-12 h-12">
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
                </h1>
                <p className="pt-2 text-justify">
                  In addition to my backend development expertise, I also
                  specialize in using Photoshop and other tools to enhance
                  webpages with creative flair and unique images. This allows me
                  to create visually compelling designs that align perfectly
                  with your project's style and goals. I offer editing services
                  to refine designs and create distinctive visuals, ensuring
                  every element meets your specific requirements. Whether it's
                  enhancing images, creating custom graphics, or editing videos.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
