import TitleComponent from "../TitleComponent/TitleComponent";
import TeamCard from "../TeamCard/TeamCard";
import { TeamData } from "../../data/TeamData";
import "./TeamsComponent.css";
import { SectionHeaders } from "../../Data/SectionHeadersData";


const TeamsComponent = () => {
  return (
    <div className="px-162">
      {/* Section title with a button label, main title, and description */}
      <TitleComponent
        btnContnet={SectionHeaders.team.btnContent}
        title={SectionHeaders.team.title}
        descrption={SectionHeaders.team.description}
      />

      {/* Container for rendering each team card */}
      <div className="team-cards">
        {/* Mapping through team data and rendering each TeamCard */}
        {TeamData.map((data, index) => (
          <TeamCard
            key={index}
            name={data.name}
            degree={data.degree}
            desc={data.desc}
            image={data.image}
            alt={data.alt}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamsComponent;
