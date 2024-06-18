import React from "react";

export const About = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col text-justfiy lg:flex-row">
          <div className="">
            <h1 className="lg:text-7xl text-start text-4xl font-bold">
              Hi my name is Zoren Jake Sarillana A Web Developer Based in Davao
              City, Philippines
            </h1>
            <p className="py-6 text-justify">
              you can call me Zo. I'm a Front and Back End Developer from Davao
              City. I take pleasure in unleashing creativity and crafting
              websites and applications that align perfectly with your
              preferences, leveraging the latest technologies and implementing
              clean design patterns.
            </p>
            <div className="flex space-x-4 items-center">
              <a
                className="btn btn-primary pr-4"
                target="_blank"
                rel="noopener noreferrer">
                View Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
