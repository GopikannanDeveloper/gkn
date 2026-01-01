import React, { useState, useEffect } from "react";
import { usePWAInstall } from "../Hooks/usePWAInstall";
import '../Styles/style.css'
const InstallButton = () => {
  const { isInstallable, installApp } = usePWAInstall();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (isInstallable) {
      setShowModal(true); // show modal only when app is installable
    }
  }, [isInstallable]);

  if (!showModal) return null;

  return (
    <div className="install-modal-backdrop">
      <div className="install-modal">
        <h2>Install Our App</h2>
        <p>
          Install this app for a faster, offline-friendly experience!
        </p>
        <div className="modal-buttons">
          <button
            className="install-btn"
            onClick={() => {
              installApp();
              setShowModal(false);
            }}
          >
            Install
          </button>
          <button
            className="cancel-btn"
            onClick={() => setShowModal(false)}
          >
            Maybe Later
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstallButton;
