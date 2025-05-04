import "./GeneralCard.css"; 

const GeneralCard = ({ icon, title, desc }) => {
  return (
    <div className="MR-infoCardContainer" data-aos="flip-left">
      <div className="MR-infoCardIcon">
        <img src={icon} alt="icon" />
      </div>
      <h3 className="MR-infoCardTitle fs-28">{title}</h3>
      <p className="MR-infoCardDesc fs-20">{desc}</p>
    </div>
  );
};

export default GeneralCard;
