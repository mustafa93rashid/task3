import NavigateCard from "../NavigateCard/NavigateCard";
import TitleComponent from "../TitleComponent/TitleComponent";
import "./Navigate.css";
import { NavigateData } from "../../Data/NavigateData";
import { SectionHeaders } from "../../Data/SectionHeadersData";

const Navigate = () => {
  return (
    <div className="px-162">
      <TitleComponent
        btnContnet={SectionHeaders.Navigate.btnContent}
        title={SectionHeaders.Navigate.title}
        descrption={SectionHeaders.Navigate.description}
      />

      <div className="Mr-navigateSectionContiner">
        {NavigateData.map((data, index) => (
          <NavigateCard key={index} title={data.title} desc={data.desc} />
        ))}
      </div>
    </div>
  );
};

export default Navigate;
