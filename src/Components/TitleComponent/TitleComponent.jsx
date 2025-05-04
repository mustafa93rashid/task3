import "./TitleComponent.css";

const TitleComponent = ({ title, descrption, btnContnet, className, flag }) => {
  return (
    <div className={`MR-titleSection  ${className} ${flag ? `flag-${flag}` : ""}`}>
      {/* Small button-like text above the title */}
      <span className="fs-18">{btnContnet}</span>

      {/* Main title of the section */}
      <h3 className="fs-58 Mr-Title">{title}</h3>

      {/* Descriptive paragraph below the title */}
      <p className="fs-20 Mr-pargraph">{descrption}</p>
    </div>
  );
};

export default TitleComponent;
