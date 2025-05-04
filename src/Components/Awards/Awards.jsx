import "./Awards.css";
import TitleComponent from "../TitleComponent/TitleComponent";
import { AwardsData } from "../../Data/AwardsData";
import GeneralCard from "../GeneralCard/GeneralCard";
import Slider from "../Slider/slider";
import { SectionHeaders } from "../../Data/SectionHeadersData";


const Awards = () => {
  // Use custom slider hook to manage visible items and navigation
  const { next, prev, getVisibleItems } = Slider(AwardsData.length, 3, 1);
  const visibleCards = getVisibleItems(AwardsData);

  return (
    <div className="px-162">
      {/* Section title with a button label, main title, and description */}
      <TitleComponent
        btnContnet={SectionHeaders.awards.btnContent}
        title={SectionHeaders.awards.title}
        descrption={SectionHeaders.awards.description}
      />

      <div>
        {/* Awards card slider container */}
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

        {/* Navigation controls and label for more awards */}
        <div className="MR-awardsButtonContainer">
          <span className="fs-22">8 More Awards</span>

          {/* Left and Right navigation buttons */}
          <div className="buttonCon">
            <button onClick={next}>
              <img src="/task3/images/Awards/leftIcon.svg" alt="" />
            </button>
            <button onClick={prev}>
              <img src="/task3/images/Awards/RightIcon.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
