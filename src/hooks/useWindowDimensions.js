import { useEffect, useState } from 'react';

const getWindowDimensions = () => {
  const { innerWidth: windowWidth, innerHeight: windowHeight } = window;

  return {
    windowWidth,
    windowHeight,
  };
};

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };

    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowDimensions;
};

export { useWindowDimensions };
