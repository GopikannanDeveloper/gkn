import React, { useEffect, useState } from "react";
import "../Styles/style.css";
import { usePWAInstall } from "../Hooks/usePWAInstall";

const InstallButton = () => {
  const { isInstallable, installApp } = usePWAInstall();
  const [appName, setAppName] = useState("My Portfolio");
  const [iconUrl, setIconUrl] = useState("");
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    fetch("/manifest.webmanifest")
      .then(res => res.json())
      .then(data => {
        setAppName(data.short_name || data.name);
        setIconUrl(data.icons?.[0]?.src || "");
      });
  }, []);

  if (!isInstallable || !showModal) return null;

  return (
    <div className="install-modal-backdrop">
      <div className="install-modal">
        
        {/* Header */}
        <div className="install-header">
          <img src={iconUrl} alt={appName} />
          <h3>{appName}</h3>
        </div>

        {/* Content */}
        <p className="install-text">
          Install this app for a faster, offline-friendly experience.
        </p>

        {/* Actions */}
        <div className="install-actions">
          <button
            className="cancel-btn"
            onClick={() => setShowModal(false)}
          >
            Later
          </button>

          <button
            className="install-btn"
            onClick={installApp}
          >
            Install
          </button>
        </div>

      </div>
    </div>
  );
};

export default InstallButton;
