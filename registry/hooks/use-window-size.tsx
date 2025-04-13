'use client';

import { useEffect, useState } from 'react';

interface UseWindowSizeOptions {
  initialWidth?: number;
  initialHeight?: number;
  onChange?: (width: number, height: number) => void;
}

interface WindowSize {
  width: number;
  height: number;
}

export function useWindowSize(options: UseWindowSizeOptions = {}): WindowSize {
  const {
    initialWidth = window.innerWidth,
    initialHeight = window.innerHeight,
    onChange,
  } = options;

  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: initialWidth,
    height: initialHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      setWindowSize({ width, height });

      if (onChange) {
        onChange(width, height);
      }
    };

    window.addEventListener('resize', handleResize);

    // Call handler right away to update size on mount
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [onChange]);

  return windowSize;
}
