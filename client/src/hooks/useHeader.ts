import { useState, useEffect } from 'react';

interface UseHeaderOptions {
  scrollThreshold?: number;
}

export const useHeader = ({ scrollThreshold = 800 }: UseHeaderOptions = {}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollThreshold]);

  return {
    isScrolled,
  };
};
