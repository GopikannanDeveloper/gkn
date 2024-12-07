import React from "react";

const IntroFooter = () => {
  return (
    <div className="d-flex justify-content-between">
      <div className="d-flex align-items-center gap-1">
        <span className="material-symbols-outlined text-primary-color">copyright</span>
        <span className="text-grey-color f-14 fw-400">2024 All Rights Reserved .</span>
      </div>
      <div className="d-lg-block d-none">
        <span className="text-grey-color f-14 fw-400">gopik.kumaresan@gmail.com</span>
      </div>
      <div>
        <span className="text-grey-color f-14 fw-400">Made By Gopikannan K <span style={{textShadow: "0px 0px 6px white"}}> &#x1f5a4; </span>.</span>
      </div>
    </div>
  );
};

export default IntroFooter;
