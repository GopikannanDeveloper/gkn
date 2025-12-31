import React from "react";
import ExploreBtn from "../../../../Components/ExploreBtn";
import resume from '../../../../../public/resume.pdf'
const CTASection = () => {
  const handleResumeClick = () => {
    window.open(
      resume,
      "_blank"
    );
  };
  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/gopikannan-k/", "_blank");
  };

  return (
    <div >

      <div className="d-flex  gap-3 flex-wrap ">
        <ExploreBtn btnLabel="Resume" onClick={handleResumeClick} />
        <ExploreBtn btnLabel="LinkedIn" onClick={handleLinkedInClick} />
      </div>
    </div>
  );
};

export default CTASection;
