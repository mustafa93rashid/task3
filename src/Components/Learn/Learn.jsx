import LearnCard from "../LearnCard/LearnCard";
import TitleComponent from "../TitleComponent/TitleComponent";
import "./Learn.css";
import { WhatsLearnData } from "../../Data/WhatsLearnData";
import { SectionHeaders } from "../../Data/SectionHeadersData";

const Learn = () => {
  return (
    <div className="px-162">
      {/* Section Title and Description */}
      <TitleComponent
        btnContnet={SectionHeaders.learn.btnContent}
        title={SectionHeaders.learn.title}
        descrption={SectionHeaders.learn.description}
      />

      {/* Container for all LearnCard components */}
      <div className="MR-allLearnCardContainer">
        {WhatsLearnData.map((data, index) => (
          // Rendering each LearnCard with data from WhatsLearnData
          <LearnCard
            key={index}
            image={data.image}
            title={data.title}
            desc={data.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default Learn;
