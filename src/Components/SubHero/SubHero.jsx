import TitleComponent from "../TitleComponent/TitleComponent";
import "./SubHero.css";

const SubHero = ({ title, desc }) => {
  return (
    // === Outer container with padding and AOS animation ===
    <div className="px-50" data-aos="zoom-in-down">

      {/* === Main content wrapper === */}
      <div className="MR-subHeroContainer">

        {/* === Decorative background shape === */}
        <img
          src="/task3/images/SubHero/img.svg"
          alt=""
          className="MR-subHeroDecorativeShape"
        />

        {/* === Left section: title block === */}
        <div className="MR-subHeroSideSize">
          <TitleComponent
            flag="subhero"
            btnContnet="Overview"
            title={title}
          />
        </div>

        {/* === Right section: description paragraph === */}
        <div className="MR-subHeroSideSize">
          <p className="fs-20 subHeroPargraph">
            {desc}
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default SubHero;
