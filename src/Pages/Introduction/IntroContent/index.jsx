import React from "react";
import About from "./About/About";
import Experience from "./Experience/Experience";
import Education from "./Education/Education";
import Projects from "./Projects/Projects";

const IntroContent = () => {
  return (
    <div>
      <div className="card-body secondary-box-shadow mt-3">
        <About />
      </div>
      <div className="card-body secondary-box-shadow mt-3">
        <Experience />
      </div>
      <div className="card-body secondary-box-shadow mt-3">
        <Education />
      </div>
    </div>
  );
};

export default IntroContent;
