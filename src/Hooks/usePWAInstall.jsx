import { useEffect, useState } from "react";

let deferredPromptGlobal = null; // store globally

export const usePWAInstall = () => {
  const [isInstallable, setIsInstallable] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      console.log("🔥 beforeinstallprompt fired!", e);
      deferredPromptGlobal = e;
      setIsInstallable(true);
    };
    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const installApp = async () => {
    if (!deferredPromptGlobal) {
      console.log("No deferred prompt available");
      return;
    }

    deferredPromptGlobal.prompt();
    const { outcome } = await deferredPromptGlobal.userChoice;
    console.log("Install outcome:", outcome);

    deferredPromptGlobal = null;
    setIsInstallable(false);
  };

  return { isInstallable, installApp };
};
