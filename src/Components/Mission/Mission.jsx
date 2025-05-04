import TitleComponent from "../TitleComponent/TitleComponent";
import "./Mission.css";
import { MissionData } from "../../Data/MissionData";
import MissionCard from "../MissionCard/MissionCard";
import { SectionHeaders } from "../../Data/SectionHeadersData";


const Mission = () => {
  return (
    // === Main wrapper with horizontal padding ===
    <div className="px-162">
      {/* === Section Title === */}
      <TitleComponent
        btnContnet={SectionHeaders.mission.btnContent}
        title={SectionHeaders.mission.title}
        descrption={SectionHeaders.mission.description}
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
  );
};

export default Mission;
