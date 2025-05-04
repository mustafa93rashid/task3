import "./HistoryDeatils.css";

const HistoryDeatils = ({ year, title, desc }) => {
  return (
    <div className="MR-historyDetails">
      <div className="MR-historyDetailsRightSection">
        <div className="MR-horizontalConnector"></div>
        <div className="MR-historyDetails-yearBox">
          <img src="/task3/images/History/AbstractDesign.svg" alt="" />
          <h3 className="fs-68">{year}</h3>
        </div>
      </div>
      <div className="MR-historyDetailsLeftSection">
        <h3 className="fs-28">{title}</h3>
        <p className="fs-20">{desc}</p>
      </div>
    </div>
  );
};

export default HistoryDeatils;
