import React from "react";
import { motion, useInView } from "framer-motion";

export const Timeline = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, threshold: 0.1 });
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
            Timeline
          </h1>
          <ul className="mt timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            <li>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-start md:text-end mb-10">
                <time className="font-mono italic">2014 - 2018</time>
                <div className="text-lg font-black">
                  Junior High - ICT Daniel R. Aguinaldo NHS
                </div>
                I was introduced to the dynamic world of Information
                Communication Technology (ICT), where my curiosity was ignited
                to delve deeper into various IT-related disciplines. This
                initial exposure motivated me to pursue further studies,
                particularly focusing on computer hardware servicing. Through
                hands-on experience and formal education, I honed my skills in
                troubleshooting, maintaining, and upgrading computer
                systems.This journey not only enriched my technical knowledge
                but also solidified my passion for IT, paving the way for
                continuous learning and growth in the field.
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end mb-10">
                <time className="font-mono italic">2018 - 2020</time>
                <div className="text-lg font-black">
                  Senior High - ICT Philippine's Women College of Davao
                </div>
                In senior high school, I immersed myself in a diverse array of
                subjects, including Python, Java, JavaScript, PHP, HTML, and
                CSS, which fueled my passion for pursuing a career as a web
                developer. The opportunity to learn these programming languages
                and delve into web development techniques not only broadened my
                technical expertise but also ignited my creativity in creating
                dynamic, visually captivating designs and functional interfaces.
                I am driven by the challenge of crafting detailed solutions that
                not only meet technical standards but also enhance user
                experience and operational efficiency.
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-start md:text-end mb-10">
                <time className="font-mono italic">2020 - 2024</time>
                <div className="text-lg font-black">
                  University Of Mindanao - BSIT
                </div>
                "Currently, I am diligently enhancing my skills as a graduating
                student at the University of Mindanao, pursuing a Bachelor of
                Science in Information Technology. My coursework has provided me
                with a comprehensive understanding of core IT principles,
                including database management, software development, network
                administration, and cybersecurity. I am actively engaged in
                honing my practical skills through coursework, projects, and
                internships, where I have gained hands-on experience in applying
                theoretical knowledge to real-world scenarios. This academic
                journey has not only deepened my technical proficiency but also
                instilled in me a commitment to continuous learning and
                adaptation to emerging technologies.
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end mb-10">
                <time className="font-mono italic">2024 (February - June)</time>
                <div className="text-lg font-black">MediaOne Intern</div> •
                Enhanced and made the frontend POSIMS Systems made APIS passing
                data from backend to frontend using Laravel, MySQL, Bootstrap
                CSS, and Nginx. <br></br> • Enhanced the frontend of LGU-Kabacan
                Treasury using Bootstrap CSS and Laravel. CSS, and Nginx.{" "}
                <br></br> • Enhanced the frontend of MedtrackerPH.
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-start md:text-end mb-10">
                <time className="font-mono italic">2023 - Present</time>
                <div className="text-lg font-black">Freelance Developer</div>•
                Front end on H3Dev Team specializing in Web Development using
                Laravel, JavaScript and MySQL
              </div>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Timeline;
