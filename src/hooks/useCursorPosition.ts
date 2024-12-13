import { useCallback, useEffect, useState } from 'react';

interface Position {
  x: number;
  y: number;
}

export const useCursorPosition = () => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  const updatePosition = useCallback((event: MouseEvent) => {
    setPosition({ x: event.clientX, y: event.clientY });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', updatePosition);
    return () => window.removeEventListener('mousemove', updatePosition);
  }, [updatePosition]);

  return position;
};
