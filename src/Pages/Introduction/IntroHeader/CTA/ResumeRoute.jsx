import React from "react";

const ResumeRoute = () => {
  React.useEffect(() => {
    window.location.href = "/resume.pdf"; // redirect to static PDF
  }, []);

  return null; // nothing to render
};

export default ResumeRoute;
