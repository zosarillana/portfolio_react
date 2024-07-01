import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import net from "../../../assets/certs/net.png";
import netsec from "../../../assets/certs/netsec.png";
import nc2 from "../../../assets/certs/nc2.png";
import m1cert from "../../../assets/certs/m1cert.jpg";
import ImageModal from "./components/ImageModal";

const Certificates = () => {
  const projects = [
    {
      image: nc2,
      id: "my_img_modal_1",
      title: "TESDA CSS NC2",
      description:
        "A web-based document management application designed for Tolentino and Associates Law Firm, leveraging AES 256 tokenization and two-factor authentication for robust security of law firm cases using hybrid security measures. Built using Laravel, Tailwind CSS, JavaScript, MySQL, PHP, Google API, and hosted on Hostinger, this application ensures both functionality and security.",
    },
    {
      image: net,
      id: "my_img_modal_2",
      title: "ITS - Networking",
      description:
        "Enhanced and made the front-end of Timi Hardware's POSIMS system for mobile and desktop responsiveness using Bootstrap CSS, JavaScript, HTML, and CSS, integrated with Laravel and PHP. The system supports a Sub Branch, Main Branch and Global Branch operations, utilizing WebSockets and APIs for efficient data exchange and real-time updates.",
    },
    {
      image: netsec,
      id: "my_img_modal_3",
      title: "ITS - Network Security",
      description:
        "A Covid Tracker providing up-to-date statistics and information on Covid-19 across regions in the Philippines. Users can select a region from a list to instantly view key data such as active cases, total cases, recoveries, recovery rate, deaths, and fatality rate. Developed using Laravel and PHP, with data sourced from the third-party API at documenter.getpostman.com, the tracker ensures accessible and accurate information for everyone.",
    },
    {
      image: m1cert,
      id: "my_img_modal_4",
      title: "MediaOne Certificate of Completion",
      description:
        "A Covid Tracker providing up-to-date statistics and information on Covid-19 across regions in the Philippines. Users can select a region from a list to instantly view key data such as active cases, total cases, recoveries, recovery rate, deaths, and fatality rate. Developed using Laravel and PHP, with data sourced from the third-party API at documenter.getpostman.com, the tracker ensures accessible and accurate information for everyone.",
    },
  ];

  return (
    <div className="hero min-h-screen bg-base-800">
      <div className="hero-content justify-center lg:justify-start">
        <div className="pt-5 flex flex-wrap justify-start">
          <h1 className="lg:text-7xl text-start text-3xl font-extrabold">
            Certificates
          </h1>
          <div className="pt-5 flex flex-wrap justify-start">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                image={project.image}
                title={project.title}
                description={project.description}
                id={project.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ image, title, description, id }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  const [modalImage, setModalImage] = useState(""); // State to hold the image URL for the modal

  const openModal = () => {
    setModalImage(image); // Set the image URL to display in the modal
    document.getElementById(id).showModal();
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      onClick={openModal}
      className="w-full md:w-1/2 lg:w-1/3 p-4">
      <div className="card h-full bg-base-100 shadow-lg rounded-lg overflow-hidden cursor-pointer">
        <img src={image} className="w-full h-56 object-cover" alt={title} />
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p className="text-base text-justify">{description}</p>
        </div>
      </div>
      <ImageModal id={id} image={modalImage} />{" "}
      {/* Pass modalImage as the image prop */}
    </motion.div>
  );
};

export default Certificates;
