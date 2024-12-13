import { useEffect, useState } from 'react';

interface Dimensions {
  width: number;
  height: number;
}

const getDimensions = (): Dimensions => {
  const { innerWidth: width, innerHeight: height } = window;

  return {
    width,
    height,
  };
};

export const useDimensions = (): Dimensions => {
  const [dimensions, setDimensions] = useState(getDimensions());

  const updateDimensions = () => setDimensions(getDimensions());

  useEffect(() => {
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return dimensions;
};
