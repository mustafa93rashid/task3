import OurTestimonialsCard from "../OurTestimonialsCard/OurTestimonialsCard";
import TitleComponent from "../TitleComponent/TitleComponent";
import { TestimonialsData } from "../../Data/TestimonialsData";
import "./OurTestimonials.css";
import Slider from "../Slider/slider";
import { SectionHeaders } from "../../Data/SectionHeadersData";



const OurTestimonials = () => {
  const { next, prev, getVisibleItems } = Slider(TestimonialsData.length, 3, 1);
  const visibleCards = getVisibleItems(TestimonialsData);

  return (
    <div className="px-162">
<TitleComponent
  btnContnet={SectionHeaders.testimonials.btnContent}
  title={SectionHeaders.testimonials.title}
  descrption={SectionHeaders.testimonials.description}
/>

      <div className="Mr-TestimonialsAllCard">
        <div className="Mr-wideScreenButton">
          <button className="Mr-TestimonialsBtn" onClick={prev}>
            <img src="/task3/images/Testimonials/leftIcon.svg" alt="Previous" />
          </button>
        </div>

        <div className="Mr-sliderCard">
          {visibleCards.map((data, index) => (
            <OurTestimonialsCard
              key={index}
              icon={data.Image}
              title={data.Name}
              desc={data.desc}
            />
          ))}

          <div className="Mr-mobileButton">
            <button className="Mr-TestimonialsBtn" onClick={prev}>
              <img src="/task3/images/Testimonials/leftIcon.svg" alt="Previous" />
            </button>
            <button className="Mr-TestimonialsBtn" onClick={next}>
              <img src="/task3/images/Testimonials/RightIcon.svg" alt="Next" />
            </button>
          </div>
        </div>

        <div className="Mr-wideScreenButton">
          <button className="Mr-TestimonialsBtn" onClick={next}>
            <img src="/task3/images/Testimonials/RightIcon.svg" alt="Next" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurTestimonials;