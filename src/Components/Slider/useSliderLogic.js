import { useState } from "react";

const useSliderLogic = (dataLength, slidesToShow) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + slidesToShow >= dataLength
        ? 0 // Reset to the beginning if we reach the end
        : prevIndex + slidesToShow
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - slidesToShow < 0
        ? dataLength - slidesToShow // Wrap around to the last slide
        : prevIndex - slidesToShow
    );
  };

  return { currentIndex, nextSlide, prevSlide };
};

export default useSliderLogic;