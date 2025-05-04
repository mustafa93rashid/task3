import FreAcc from "../FreAcc/FreAcc";
import TitleComponent from "../TitleComponent/TitleComponent";
import "./FrequentlyAskedQuestions.css";
import { FaqData } from "../../Data/FaqData";
import { SectionHeaders } from "../../Data/SectionHeadersData";


const FrequentlyAskedQuestions = () => {
  // Split the FAQ data into two parts: left and right sides
  const leftSideData = FaqData.slice(0, 4);
  const rightSideData = FaqData.slice(4, 8);

  return (
    <div className="px-162">
      {/* Section title and description */}
      <TitleComponent
  btnContnet={SectionHeaders.faq.btnContent}
  title={SectionHeaders.faq.title}
  descrption={SectionHeaders.faq.description}
/>
      {/* Container holding two columns of FAQ items */}
      <div className="Mr-FaqContainer">
        {/* Left side FAQs */}
        <div
          className="Mr-coloum"
          data-aos="fade-up"
     data-aos-duration="3000">
        
          {leftSideData.map((data, index) => (
            <FreAcc key={index} question={data.question} answer={data.answer} />
          ))}
        </div>

        {/* Right side FAQs */}
        <div
          className="Mr-coloum"
          data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500"
        >
          {rightSideData.map((data, index) => (
            <FreAcc key={index} question={data.question} answer={data.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;
