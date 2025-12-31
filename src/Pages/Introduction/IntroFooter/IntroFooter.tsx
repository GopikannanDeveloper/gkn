import React from "react";

const IntroFooter = () => {
  return (
    <div className="d-flex justify-content-between align-items-center p-2">
      <div className="d-flex align-items-center gap-1">
        <span className="material-symbols-outlined text-primary-color">
          copyright
        </span>
        <span className="text-grey-color f-12 fw-400">
          2024 All Rights Reserved .
        </span>
      </div>
      <div className="d-lg-block d-none">
        <span className="text-grey-color f-12 fw-400">
          gopik.kumaresan@gmail.com
        </span>
      </div>
      <div>
        <span className="text-grey-color f-12 fw-600">
          Made By Gopikannan K <span> 💜 </span>.
        </span>
      </div>
    </div>
  );
};

export default IntroFooter;
