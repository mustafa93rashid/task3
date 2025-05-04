import LearnCard from "../LearnCard/LearnCard";
import TitleComponent from "../TitleComponent/TitleComponent";
import "./Learn.css";
import { WhatsLearnData } from "../../Data/WhatsLearnData";

const Learn = () => {
  return (
    <div className="px-162">
      {/* Section Title and Description */}
      <TitleComponent
        btnContnet="Our Features"
        title="What Students Learn"
        descrption="At Little Learners Academy, we strive to cultivate a love for learning and equip children with essential skills for their future success. Our academic programs cover a wide range of subjects, allowing students to develop a strong foundation and discover their interests. Some key areas of learning include"
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
