import { usePWAInstall } from "../Hooks/usePWAInstall";

const InstallButton = () => {
  const { isInstallable, installApp } = usePWAInstall();

  if (!isInstallable) return null;

  return (
    <button onClick={installApp}>
      Install App
    </button>
  );
};

export default InstallButton;
