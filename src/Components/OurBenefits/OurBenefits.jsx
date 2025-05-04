import GeneralCard from "../GeneralCard/GeneralCard";
import TitleComponent from "../TitleComponent/TitleComponent";
import "./OurBenefits.css";

const OurBenefits = ({ benefits, btnContnet, title, descrption }) => {
  const leftSideBenefitsData = benefits.slice(0, 3);
  const rightSideBenefitsData = benefits.slice(3, 6);

  const isBenefits = title === "Our Benefits"; 

  return (
    <div className="px-162">
      <TitleComponent 
        btnContnet={btnContnet}
        title={title}
        descrption={descrption}
        className={isBenefits ? "mt_0" : ""}
      />

      <div className="Mr-benefitsAllCard">
        <div className="Mr-benfitRow">
          {leftSideBenefitsData.map((data, index) => (
            <GeneralCard
              key={index}
              icon={data.icon}
              title={data.title}
              desc={data.desc}
            />
          ))}
        </div>
        <div className="Mr-benfitRow" data-aos="zoom-in-down">
          {rightSideBenefitsData.map((data, index) => (
            <GeneralCard  
              key={index}
              icon={data.icon}
              title={data.title}
              desc={data.desc}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurBenefits;
