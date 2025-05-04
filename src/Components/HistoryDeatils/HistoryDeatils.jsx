import "./HistoryDeatils.css";

const HistoryDeatils = ({ year, title, desc }) => {
  return (
    // Main container for one timeline item
    <div className="MR-historyDetails">
      
      {/* Right section containing the year and decorative connector */}
      <div className="MR-historyDetailsRightSection">
        {/* Horizontal line connecting the vertical timeline to the year */}
        <div className="MR-horizontalConnector"></div>

        {/* Year display with an abstract image background */}
        <div className="MR-historyDetails-yearBox">
          <img src="/task3/images/History/AbstractDesign.svg" alt="" />
          <h3 className="fs-68">{year}</h3>
        </div>
      </div>

      {/* Left section with the event title and description */}
      <div className="MR-historyDetailsLeftSection">
        <h3 className="fs-28">{title}</h3> {/* Event title */}
        <p className="fs-20">{desc}</p>    {/* Event description */}
      </div>

    </div>
  );
};

export default HistoryDeatils;
