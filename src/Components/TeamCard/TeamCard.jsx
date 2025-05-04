import "./TeamCard.css";

const TeamCard = ({ name, image, degree, desc, alt }) => {
  return (
    // Main container for the team card
    <div className="MR-teamCard" data-aos="flip-left">
      
      {/* Header section: includes image, name, and icon */}
      <div className="MR-teamCardHeader">

        {/* Left part: Image and Name */}
        <div className="MR-teamInfo">
          {/* Team member image */}
          <div className="MR-teamImage">
            <img src={image} alt={alt} />
          </div>

          {/* Team member name */}
          <h4 className="fs-30">{name}</h4>
        </div>

        {/* Right part: Icon (e.g., contact, social, or decorative) */}
        <div className="MR-teamIcon">
          <img src="/task3/images/Team/Icon.svg" alt={alt} />
        </div>
      </div>

      {/* Card body: displays degree and description */}
      <div className="MR-teamCardBody">
        {/* Degree or job title */}
        <p className="fs-24 MR-teamDegree">{degree}</p>

        {/* Description or short bio */}
        <p className="fs-20 MR-teamDesc">{desc}</p>
      </div>
    </div>
  );
};

export default TeamCard;
