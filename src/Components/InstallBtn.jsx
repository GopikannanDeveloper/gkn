import React from "react";
import '../Styles/style.css'
import InstallBanner from "./InstallBanner";
const InstallButton = () => {

  return (
    <div className="install-modal-backdrop">
      <div className="install-modal">
      <InstallBanner/>
      </div>
    </div>
  );
};

export default InstallButton;
