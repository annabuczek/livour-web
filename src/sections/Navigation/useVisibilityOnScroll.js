import { useState, useEffect } from 'react';

const useVisibilityOnScroll = () => {
  const [visible, setVisibility] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPositionCurrent = window.scrollY;
      const valuesPos = document
        .querySelector('.values__description')
        .getBoundingClientRect().top;

      if (
        valuesPos <= 0 ||
        (scrollPosition > scrollPositionCurrent &&
          scrollPositionCurrent !== 0)
      ) {
        setVisibility(true);
      } else {
        setVisibility(false);
      }
      setScrollPosition(scrollPositionCurrent);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return visible;
};

export default useVisibilityOnScroll;
