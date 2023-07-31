import { useRef, useState, useEffect, useCallback } from 'react';

const ScrollableImageGrid = ({ images }) => {
  const imageGridRef = useRef(null);
  const [isLeftDisabled, setIsLeftDisabled] = useState(true);
  const [isRightDisabled, setIsRightDisabled] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollLeft = imageGridRef.current.scrollLeft;
    const scrollWidth = imageGridRef.current.scrollWidth;
    const clientWidth = imageGridRef.current.clientWidth;
    const isAtStart = scrollLeft === 0;
    const isAtEnd = scrollLeft + clientWidth >= scrollWidth;

    setIsLeftDisabled(isAtStart);
    setIsRightDisabled(isAtEnd);
  }, []);

  useEffect(() => {
    const currentImageGridRef = imageGridRef.current;
    currentImageGridRef.addEventListener('scroll', handleScroll);
    return () => {
      currentImageGridRef.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const scrollLeft = () => {
    imageGridRef.current.scrollBy({ left: -500, behavior: 'smooth' });
  };

  const scrollRight = () => {
    imageGridRef.current.scrollBy({ left: 500, behavior: 'smooth' });
  };

  return {
    imageGridRef,
    isLeftDisabled,
    isRightDisabled,
    scrollLeft,
    scrollRight
  };
};

export default ScrollableImageGrid;
