import TitleComponent from "../TitleComponent/TitleComponent"
import "./Mission.css"
import { MissionData } from "../../Data/MissionData";
import MissionCard from "../MissionCard/MissionCard";

const Mission = () => {
  return (
    // === Main wrapper with horizontal padding ===
    <div className="px-162">

      {/* === Section Title === */}
      <TitleComponent
        btnContnet="Mission & Visions"
        title="Our Mission & Visions"
        descrption="We are here to provide a nurturing and inclusive environment where young minds can thrive, fostering a love for learning and personal growth."
      />

      {/* === Container for all mission cards === */}
      <div className="MR-allMissionCardContainer">
        {MissionData.map((data, index) => (
          <MissionCard 
            key={index}
            title={data.title}
            icon={data.icon}
            desc={data.desc}
          />
        ))}
      </div>
      
    </div>
  )
}

export default Mission
