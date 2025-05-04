import { useState, useEffect } from "react";

const useSlider = (
  dataLength,
  desktopCount = 3,
  tabletCount = 2,
  mobileCount = 1,
  desktopBreakpoint = 992,
  tabletBreakpoint = 768
) => {
  const [startIndex, setStartIndex] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(desktopCount);

  const updateCards = () => {
    const width = window.innerWidth;
    let newCount = desktopCount;

    if (width <= tabletBreakpoint) {
      newCount = mobileCount;
    } else if (width <= desktopBreakpoint) {
      newCount = tabletCount;
    }

    // Reset to prevent overflow
    setCardsPerSlide((prevCount) => {
      if (prevCount !== newCount) {
        setStartIndex(0); // إعادة ضبط الفهرس عند تغيير العدد
      }
      return newCount;
    });
  };

  useEffect(() => {
    updateCards();
    window.addEventListener("resize", updateCards);
    return () => window.removeEventListener("resize", updateCards);
  }, [desktopCount, tabletCount, mobileCount, desktopBreakpoint, tabletBreakpoint]);

  const next = () => {
    const nextIndex = startIndex + cardsPerSlide;
    if (nextIndex >= dataLength) {
      setStartIndex(0);
    } else {
      setStartIndex(nextIndex);
    }
  };

  const prev = () => {
    const prevIndex = startIndex - cardsPerSlide;
    if (prevIndex < 0) {
      const remainder = dataLength % cardsPerSlide;
      const lastStart = dataLength - (remainder === 0 ? cardsPerSlide : remainder);
      setStartIndex(lastStart);
    } else {
      setStartIndex(prevIndex);
    }
  };

  const getVisibleItems = (data) => {
    return data.slice(startIndex, startIndex + cardsPerSlide);
  };

  const currentIndex = startIndex;

  return { currentIndex, cardsPerSlide, getVisibleItems, next, prev };
};

export default useSlider;
