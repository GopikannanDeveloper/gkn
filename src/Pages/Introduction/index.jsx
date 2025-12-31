import React from "react";
import IntroHeader from "./IntroHeader/IntroHeader";
import IntroContent from "./IntroContent";

const Intro = () => {
  return (
    <div>
      <span
          className="material-symbols-outlined d-lg-none d-block text-primary-color mb-3"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample"
          style={{textShadow: "0px 0px 3px white"}}
        >
          menu
        </span>
      <div  className="intro-header" >
        <IntroHeader />
      </div>
      <div className="overflow-y-auto intro-content" >
        <IntroContent />
      </div>
    </div>
  );
};

export default Intro;
