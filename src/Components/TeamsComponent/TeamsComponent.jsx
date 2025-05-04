import TitleComponent from "../TitleComponent/TitleComponent";
import TeamCard from "../TeamCard/TeamCard";
import { TeamData } from "../../data/TeamData";
import "./TeamsComponent.css";

const TeamsComponent = () => {
  return (
    <div className="px-162">
      {/* Section title with a button label, main title, and description */}
      <TitleComponent
        btnContnet="Our Teachers With Expertise"
        title="Our Team Members"
        descrption="At Little Learners Academy, our teaching team is the heart of our educational journey. We take great pride in employing highly qualified and passionate educators who possess a deep understanding of early childhood development. Our teachers create a warm and engaging atmosphere, encouraging curiosity, instilling confidence, and fostering a love for learning."
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
