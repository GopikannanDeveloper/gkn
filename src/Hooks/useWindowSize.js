import { useState, useEffect } from 'react';

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    isMobile: undefined,
    isLaptop: undefined,
  });

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      const isMobile = width <= 768;
      const isLaptop = width > 768;

      setWindowSize({
        width,
        isMobile,
        isLaptop,
      });
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}

export default useWindowSize;
