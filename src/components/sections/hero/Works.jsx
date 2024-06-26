import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import timiOne from "../../../assets/works/timi-mockup.png";
import sdocsOne from "../../../assets/works/sdocs-mockup.png";
import pconnectOne from "../../../assets/works/pconnect-mockup.png";
import campOne from "../../../assets/works/camp-mockup.png";
import djfesOne from "../../../assets/works/djfes-mockup.png";
import wpinesOne from "../../../assets/works/wpines-mockup.png";
import ptestOne from "../../../assets/works/ptestnbg-mockup.png";
import covTracer from "../../../assets/works/covtracerph-mockup.png";

const MyWorksComponent = () => {
  const projects = [
    {
      image: sdocsOne,
      title: "Secure Docs",
      description:
        "A web-based document management application designed for Tolentino and Associates Law Firm, leveraging AES 256 tokenization and two-factor authentication for robust security of law firm cases using hybrid security measures. Built using Laravel, Tailwind CSS, JavaScript, MySQL, PHP, Google API, and hosted on Hostinger, this application ensures both functionality and security.",
    },
    {
      image: timiOne,
      title: "Timi Hardware POSIMS",
      description:
        "Enhanced and made the front-end of Timi Hardware's POSIMS system for mobile and desktop responsiveness using Bootstrap CSS, JavaScript, HTML, and CSS, integrated with Laravel and PHP. The system supports a Sub Branch, Main Branch and Global Branch operations, utilizing WebSockets and APIs for efficient data exchange and real-time updates.",
    },
    {
      image: covTracer,
      title: "Cov Tracer PH",
      description:
        "A Covid Tracker providing up-to-date statistics and information on Covid-19 across regions in the Philippines. Users can select a region from a list to instantly view key data such as active cases, total cases, recoveries, recovery rate, deaths, and fatality rate. Developed using Laravel and PHP, with data sourced from the third-party API at documenter.getpostman.com, the tracker ensures accessible and accurate information for everyone.",
    },
    {
      image: djfesOne,
      title: "DJFES Student Management",
      description:
        "A Java-based object-oriented programming (OOP) application meticulously crafted to manage student records, grades, and other pertinent information for Dr. Jovito S Francisco Elementary School. This robust system utilizes JAVA and SQL for its backend logic and MySQL for efficient data management and storage.",
    },
    {
      image: wpinesOne,
      title: "Whispering Pines Hotel Management and Scheduling",
      description:
        "This Java-based application is meticulously crafted using object-oriented programming (OOP) principles to provide a comprehensive solution for managing client records. It features a robust system for tracking payments, maintaining detailed client histories, and scheduling appointments. This system utilizes JAVA and SQL for its backend logic and MSSQL for efficient data management and storage. ",
    },
    {
      image: pconnectOne,
      title: "Paws Connect",
      description:
        "Developed a dating app exclusively for furry pets, built entirely from scratch using PHP for robust backend operations, JavaScript for interactive frontend elements, and styled with Tailwind CSS and DaisyUI to ensure a modern and intuitive user interface. ",
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
        " A mobile application built with Flutter and Firebase, designed to determine your Myers-Briggs Type Indicator (MBTI) personality. It guides users through a series of questions to provide accurate insights into their psychological preferences and behaviors based on the MBTI framework. ",
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
          <p className="text-base text-justify">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default MyWorksComponent;
