import "./MissionCard.css";

const MissionCard = ({ title, icon, desc }) => {
  return (
    // === Main container with AOS animation effect ===
    <div className="MR-missionCardContainer" data-aos="flip-left">
      
      {/* === Header section: title + icon === */}
      <div className="MR-missionCardHead">
        <h3 className="fs-48">{title}</h3>
        <img src={icon} alt="" />
      </div>
      
      {/* === Description paragraph === */}
      <p className="fs-20">{desc}</p>
    </div>
  );
};

export default MissionCard;
