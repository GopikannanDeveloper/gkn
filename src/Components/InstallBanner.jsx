import React, { useEffect, useState } from "react";
import { usePWAInstall } from "../Hooks/usePWAInstall";

const InstallBanner = () => {
  const { isInstallable, installApp } = usePWAInstall();
  const [appName, setAppName] = useState("My Portfolio");
  const [iconUrl, setIconUrl] = useState("");

  useEffect(() => {
    fetch("/manifest.webmanifest")
      .then(res => res.json())
      .then(data => {
        setAppName(data.short_name || data.name);
        setIconUrl(data.icons[0].src); // pick first icon
      });
  }, []);

  if (!isInstallable) return null;

  return (
    <div className="pwa-banner">
      <img src={iconUrl} alt={appName} width={40} />
      <div>
        <strong>{appName}</strong>
        <p>Install {appName} for offline & faster experience!</p>
      </div>
      <button onClick={installApp}>Install</button>
    </div>
  );
};

export default InstallBanner;
