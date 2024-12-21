import { PropsWithChildren, useCallback, useEffect, useRef } from 'react';

import { useCursorPosition } from '@/hooks/useCursorPosition';
import { useDimensions } from '@/hooks/useDimensions';
import colors from '@/styles/colors.module.scss';
import styles from './styles.module.scss';

interface BackgroundContainerProps extends PropsWithChildren {
  pointSize?: number;
  pointsDistance?: number;
  distortionRadius?: number;
}

const hexValueToColor = (value: string) => {
  const hexValue = value.length > 1 ? value : `0${value}`;

  return `#${hexValue + hexValue + hexValue}`;
};

const darkValue = 20;
const lightValue = 180;
const darkHex = darkValue.toString(16);
const darkPointColor = hexValueToColor(darkHex);

export const BackgroundContainer: React.FC<BackgroundContainerProps> = ({
  pointSize = 2,
  pointsDistance = 16,
  distortionRadius = 120,
  children,
}) => {
  const canvas = useRef<HTMLCanvasElement>(null);

  const cursorPosition = useCursorPosition();
  const dimensions = useDimensions();

  const drawPoints = useCallback(() => {
    const { width, height } = dimensions;
    const { x: curx, y: cury } = cursorPosition;
    const ctx = canvas.current?.getContext('2d');
    const pointHalfSize = pointSize / 2;

    if (!ctx) {
      return;
    }

    const sectionSize = pointSize + pointsDistance;
    const columns = Math.ceil(width / sectionSize / 2) * 2 + 1;
    const rows = Math.ceil(height / sectionSize / 2) * 2 + 1;

    const offsetHor = (width - (columns * sectionSize - pointsDistance)) / 2;
    const offsetVer = (height - (rows * sectionSize - pointsDistance)) / 2;

    for (let i = 0; i < columns; i++) {
      for (let j = 0; j < rows; j++) {
        const x = offsetHor + i * sectionSize;
        const y = offsetVer + j * sectionSize;
        const cx = x + pointHalfSize;
        const cy = y + pointHalfSize;

        const distanceToCursor = Math.sqrt(Math.pow(curx - cx, 2) + Math.pow(cury - cy, 2));

        if (distanceToCursor <= distortionRadius) {
          const highlightCoefficient = 1 - Math.pow(distanceToCursor / distortionRadius, 2);
          const highlightValue = darkValue + (lightValue - darkValue) * highlightCoefficient;
          const hex = Math.round(highlightValue).toString(16);

          ctx.fillStyle = hexValueToColor(hex);
        } else {
          ctx.fillStyle = darkPointColor;
        }

        ctx.fillRect(x, y, pointSize, pointSize);
      }
    }
  }, [dimensions, cursorPosition, distortionRadius, pointSize, pointsDistance]);

  useEffect(() => {
    const { width, height } = dimensions;
    const ctx = canvas.current?.getContext('2d');

    if (!ctx) {
      return;
    }

    ctx.fillStyle = colors.primary900;
    ctx.fillRect(0, 0, width, height);

    drawPoints();
  }, [dimensions, drawPoints]);

  return (
    <>
      <canvas
        ref={canvas}
        id={styles.background}
        width={dimensions.width}
        height={dimensions.height}
      />
      <div className={styles.container}>{children}</div>
    </>
  );
};
