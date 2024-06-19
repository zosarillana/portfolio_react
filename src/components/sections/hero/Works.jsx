import { motion, useInView } from "framer-motion";
import timiOne from "../../../assets/works/timi-mockup.png";
import sdocsOne from "../../../assets/works/sdocs-mockup.png";
import pconnectOne from "../../../assets/works/pconnect-mockup.png";
import campOne from "../../../assets/works/camp-mockup.png";
import djfesOne from "../../../assets/works/djfes-mockup.png";
import ptestOne from "../../../assets/works/ptestnbg-mockup.png";
import React, { useRef } from "react";

const MyWorksComponent = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);

  const isInView1 = useInView(ref1, { once: true });
  const isInView2 = useInView(ref2, { once: true });
  const isInView3 = useInView(ref3, { once: true });
  const isInView4 = useInView(ref4, { once: true });
  const isInView5 = useInView(ref5, { once: true });
  const isInView6 = useInView(ref6, { once: true });

  const fadeIn = {
    initial: { opacity: 0 },
    animate: (isInView) => (isInView ? { opacity: 1 } : { opacity: 0 }),
    transition: { duration: 1 },
  };

  return (
    <div className="min-h-screen bg-base-200 flex flex-col justify-center">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col text-justify lg:flex-row-reverse w-full">
          <div className="lg:mr-4 lg:text-left text-center w-full">
            <h1 className="lg:text-7xl text-start text-3xl font-extrabold">
              My Works
            </h1>
            <div className="pt-5">
              <motion.div
                ref={ref1}
                initial="initial"
                animate={fadeIn.animate(isInView1)}
                transition={fadeIn.transition}
                className="w-full p-5">
                <div className="card card-side bg-base-100 shadow-xl">
                  <figure>
                    <img
                      src={timiOne}
                      className="lg:w-full lg:h-72 md:w-full md:h-72 object-cover w-0 h-0"
                      alt="Movie"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">
                      Timi Hardware POSIMS a POS System and Inventory System
                    </h2>
                    <p className="text-justify">
                      Front End on the Timi Hardware POSIMS using Bootstrap CSS,
                      Javascript, HTML, CSS, Laravel and PHP. Where it contains
                      a Main Branch and Global Branch.
                    </p>
                    <div className="card-actions justify-end">
                      {/* <button className="btn btn-primary">Watch</button> */}
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                ref={ref2}
                initial="initial"
                animate={fadeIn.animate(isInView2)}
                transition={fadeIn.transition}
                className="w-full p-5">
                <div className="card card-side flex-row-reverse bg-base-100 shadow-xl">
                  <figure>
                    <img
                      src={sdocsOne}
                      className="lg:w-full lg:h-72 md:w-full md:h-72 object-cover w-0 h-0"
                      alt="Movie"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">Secure Docs</h2>
                    <p className="text-justify">
                      A Web-Based Document Management Application for Tolentino
                      leveraging AES 256 tokenization and 2 factor
                      authentication for security Law Firm Cases Using Hybrid
                      Security. Made Using Laravel, Tailwind CSS, JavaScript,
                      MySQL, PHP, Google API and Hostinger.
                    </p>
                    <div className="card-actions justify-start">
                      {/* <button className="btn btn-primary">Watch</button> */}
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                ref={ref3}
                initial="initial"
                animate={fadeIn.animate(isInView3)}
                transition={fadeIn.transition}
                className="w-full p-5">
                <div className="card card-side bg-base-100 shadow-xl">
                  <figure>
                    <img
                      src={pconnectOne}
                      className="lg:w-full lg:h-72 md:w-full md:h-72 object-cover w-0 h-0"
                      alt="Movie"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">Paws Connect</h2>
                    <p className="text-justify">
                      A dating app for fur pets created from scratch using PHP,
                      JavaScript, Tailwind CSS, DaisyUI following a MVC
                      framework.
                    </p>
                    <div className="card-actions justify-end">
                      {/* <button className="btn btn-primary">Watch</button> */}
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                ref={ref4}
                initial="initial"
                animate={fadeIn.animate(isInView4)}
                transition={fadeIn.transition}
                className="w-full p-5">
                <div className="card card-side flex-row-reverse bg-base-100 shadow-xl">
                  <figure>
                    <img
                      src={campOne}
                      className="lg:w-full lg:h-72 md:w-full md:h-72 object-cover w-0 h-0"
                      alt="Movie"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">Campus Connect</h2>
                    <p className="text-justify">
                      A learning management system capable of managing students,
                      printing and error handling for duplicate and conflicting
                      schedules. Made with pure PHP, Tailwind CSS, Daisy UI from
                      scratch. (MVC Framework)
                    </p>
                    <div className="card-actions justify-start">
                      {/* <button className="btn btn-primary">Watch</button> */}
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                ref={ref5}
                initial="initial"
                animate={fadeIn.animate(isInView5)}
                transition={fadeIn.transition}
                className="w-full p-5">
                <div className="card card-side bg-base-100 shadow-xl">
                  <figure>
                    <img
                      src={djfesOne}
                      className="lg:w-full lg:h-72 md:w-full md:h-72 object-cover w-0 h-0"
                      alt="Movie"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">DJFES Student Management</h2>
                    <p className="text-justify">
                      A OOP java application that manages the students grades
                      and information. Made using JAVA and Mysql.
                    </p>
                    <div className="card-actions justify-end">
                      {/* <button className="btn btn-primary">Watch</button> */}
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                ref={ref6}
                initial="initial"
                animate={fadeIn.animate(isInView6)}
                transition={fadeIn.transition}
                className="w-full p-5">
                <div className="card card-side flex-row-reverse bg-base-100 shadow-xl">
                  <figure>
                    <img
                      src={ptestOne}
                      className="lg:w-full lg:h-72 md:w-full md:h-72 object-cover w-0 h-0"
                      alt="Movie"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">PersoTest APP</h2>
                    <p className="text-justify">
                      An app that determines your MBTI personality. Made with
                      flutter and firebase.
                    </p>
                    <div className="card-actions justify-start">
                      {/* <button className="btn btn-primary">Watch</button> */}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyWorksComponent;
