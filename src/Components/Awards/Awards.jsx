import "./Awards.css";
import TitleComponent from "../TitleComponent/TitleComponent";
import { AwardsData } from "../../Data/AwardsData";
import GeneralCard from "../GeneralCard/GeneralCard";
import { useState, useEffect } from "react";

const Awards = () => {

  // State to track the current starting index of visible testimonials
  const [currentIndex, setCurrentIndex] = useState(0);

  // State to determine how many testimonial cards to show based on screen width
  const [cardsPerSlide, setCardsPerSlide] = useState(3);

  // Function to update number of cards per slide depending on window width
  const updateCardsPerSlide = () => {
    if (window.innerWidth <= 992) {
      setCardsPerSlide(1); // Mobile view: show 1 card
    } else {
      setCardsPerSlide(3); // Desktop view: show 3 cards
    }
  };

  // Effect to set up resize listener when component mounts
  useEffect(() => {
    updateCardsPerSlide(); // Set initial cards count
    window.addEventListener("resize", updateCardsPerSlide); // Update on resize

    return () => {
      window.removeEventListener("resize", updateCardsPerSlide); // Cleanup on unmount
    };
  }, []);

  // Go to the next testimonial slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % AwardsData.length);
  };

  // Go to the previous testimonial slide
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + AwardsData.length) % AwardsData.length
    );
  };

  // Determine which testimonial cards are currently visible
  const visibleCards = [];
  for (let i = 0; i < cardsPerSlide; i++) {
    visibleCards.push(
        AwardsData[(currentIndex + i) % AwardsData.length]
    );
  }

  return (
    <div className="px-162">
      {/* Section title with a button label, main title, and description */}
      <TitleComponent
        btnContnet="Our Achievements"
        title="Our Awards and Recognitions"
        descrption="Little Learners Academy takes pride in our commitment to delivering high-quality education and outstanding student experiences. We are honored to have received various awards and recognitions for our dedication to early childhood education. These accolades reflect our team's relentless efforts in creating an exceptional learning environment for our students."
      />

      <div>
        <div className="MR-allAwardsCardContainer">
        {visibleCards.map((data, index) => (
            <GeneralCard 
              key={index}
              icon={data.icon2}
              title={data.title}
              desc={data.desc}
            />
          ))}
        </div>

        <div className="MR-awardsButtonContainer">
          <span className="fs-22">8 More Awards</span>
          <div className="buttonCon">
            <button onClick={nextSlide}>
              <img src="/task3/images/Awards/leftIcon.svg" alt="" />
            </button>
            <button onClick={prevSlide}>
              <img src="/task3/images/Awards/RightIcon.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
