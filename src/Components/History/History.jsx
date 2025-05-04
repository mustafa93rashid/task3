import HistoryDeatils from "../HistoryDeatils/HistoryDeatils";
import TitleComponent from "../TitleComponent/TitleComponent";
import "./History.css";
import { HistoryData } from "../../Data/HistoryData";
import { SectionHeaders } from "../../Data/SectionHeadersData";

const History = () => {
  return (
    <div className="px-162">
      {/* Section Title: Button text, title, and description taken from data file */}
      <TitleComponent
        btnContnet={SectionHeaders.history.btnContent}
        title={SectionHeaders.history.title}
        descrption={SectionHeaders.history.description}
      />
      
      {/* List of timeline entries rendered using the HistoryDetails component */}
      <div className="MR-historyContainer">
        <div className="MR-historyContentBox">
          <div className="MR-verticalConnector"></div>
          <div className="MR-historyDetailsList">
            {HistoryData.map((data, index) => (
              <HistoryDeatils
                key={index}
                year={data.year}
                title={data.title}
                desc={data.desc}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
