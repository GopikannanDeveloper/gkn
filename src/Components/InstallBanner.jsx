import React, { useEffect, useState } from "react";
import { usePWAInstall } from "../Hooks/usePWAInstall";
import "../Styles/style.css";

const InstallBanner = () => {
  const { isInstallable, installApp } = usePWAInstall();
  const [appName, setAppName] = useState("My Portfolio");
  const [iconUrl, setIconUrl] = useState("");
  const [showBanner, setShowBanner] = useState(true); // new state for dismiss

  const isMobile = /Mobi|Android/i.test(navigator.userAgent);

  // Fetch app name and icon from manifest
  useEffect(() => {
    fetch("/manifest.webmanifest")
      .then((res) => res.json())
      .then((data) => {
        setAppName(data.short_name || data.name);
        setIconUrl(data.icons[0].src);
      });
  }, []);

  if (!isInstallable || !showBanner) return null;

  return (
    <div className="pwa-banner">
      <img src={iconUrl} alt={appName} width={40} />
      <div className="pwa-banner-text">
        <strong>{appName}</strong>
        {isMobile ? (
          <p>Install {appName} for offline & faster experience!</p>
        ) : (
          <p>
            Click the Chrome menu → <strong>Install {appName}</strong>
          </p>
        )}
      </div>
      <div className="pwa-banner-buttons">
        {isMobile && (
          <button
            className="install-btn"
            onClick={() => {
              installApp();
              setShowBanner(false); // hide after install
            }}
          >
            Install
          </button>
        )}
        <button
          className="cancel-btn"
          onClick={() => setShowBanner(false)} // hide on cancel
        >
          Maybe Later
        </button>
      </div>
    </div>
  );
};

export default InstallBanner;
