import HistoryDeatils from "../HistoryDeatils/HistoryDeatils";
import TitleComponent from "../TitleComponent/TitleComponent";
import "./History.css";
import { HistoryData } from "../../Data/HistoryData";

const History = () => {
  return (
    <div className="px-162">
      {/* Section Title */}
      <TitleComponent
        btnContnet="Our Progressive Journey"
        title="Our History"
        descrption="Founded with a passion for early education in 2005, our kindergarten school boasts a rich history of empowering young learners to reach their potential through innovative teaching methods and a supportive learning environment"
      />

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
