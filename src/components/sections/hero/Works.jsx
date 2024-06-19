import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import timiOne from "../../../assets/works/timi-mockup.png";
import sdocsOne from "../../../assets/works/sdocs-mockup.png";
import pconnectOne from "../../../assets/works/pconnect-mockup.png";
import campOne from "../../../assets/works/camp-mockup.png";
import djfesOne from "../../../assets/works/djfes-mockup.png";
import ptestOne from "../../../assets/works/ptestnbg-mockup.png";
import covTracer from "../../../assets/works/covtracerph-mockup.png";

const MyWorksComponent = () => {
  const projects = [
    {
      image: timiOne,
      title: "Timi Hardware POSIMS",
      description:
        "Front End on the Timi Hardware POSIMS using Bootstrap CSS, Javascript, HTML, CSS, Laravel and PHP. Where it contains a Main Branch and Global Branch.",
    },
    {
      image: djfesOne,
      title: "DJFES Student Management",
      description:
        "A OOP java application that manages the students grades and information. Made using JAVA and Mysql.",
    },
    {
      image: pconnectOne,
      title: "Paws Connect",
      description:
        "A dating app for fur pets created from scratch using PHP, JavaScript, Tailwind CSS, DaisyUI following a MVC framework.",
    },

    {
      image: sdocsOne,
      title: "Secure Docs",
      description:
        "A web-based document management application designed for Tolentino and Associates Law Firm, leveraging AES 256 tokenization and two-factor authentication for robust security of law firm cases using hybrid security measures. Built using Laravel, Tailwind CSS, JavaScript, MySQL, PHP, Google API, and hosted on Hostinger, this application ensures both functionality and security.",
    },
    {
      image: campOne,
      title: "Campus Connect",
      description:
        "A robust learning management system designed to search and manage students, print documents, and handle errors related to duplicates and conflicting schedules, this solution is built from scratch using pure PHP, Tailwind CSS, and Daisy UI. Adhering to the MVC framework, it ensures a structured and maintainable codebase while providing a user-friendly and visually appealing interface.",
    },

    {
      image: ptestOne,
      title: "PersoTest APP",
      description:
        "An app that determines your MBTI personality. Made with flutter and firebase.",
    },
    {
      image: covTracer,
      title: "Cov Tracer PH",
      description:
        "Cov Tracer PH is a Covid Tracker that makes the relevant statistics and information for Covid readily available for anyone. Essentially, the program contains all the regions of the Philippines, choosing a region from a list displays the current statistics such as active cases and total cases, recoveries and recovery rate, number of deaths and fatality rate. Made using Laravel, PHP and Third Party API from https://covid19-api-philippines.herokuapp.com",
    },
  ];

  return (
    <div className="hero min-h-screen bg-base-800">
      <div className="hero-content justify-center lg:justify-start">
        <div className="pt-5 flex flex-wrap justify-start">
          <h1 className="lg:text-7xl text-start text-3xl font-extrabold">
            My Works
          </h1>
          <div className="pt-5 flex flex-wrap justify-start">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                image={project.image}
                title={project.title}
                description={project.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ image, title, description }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className="w-full md:w-1/2 lg:w-1/3 p-4">
      <div className="card h-full bg-base-100 shadow-lg rounded-lg overflow-hidden">
        <img src={image} className="w-full h-1/2 object-cover" alt={title} />
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p className="text-base">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default MyWorksComponent;
