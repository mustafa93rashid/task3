import Hero from "./../../Components/Hero/Hero";
import FrequentlyAskedQuestions from "./../../Components/FrequentlyAskedQuestions/FrequentlyAskedQuestions";
import Navigate from "./../../Components/Navigate/Navigate";
import OurBenefits from "./../../Components/OurBenefits/OurBenefits";
import OurTestimonials from "./../../Components/OurTestimonials/OurTestimonials";
import { BenefitsData } from "../../Data/BenefitsData";

const Home = () => {
  return (
    <>
      <Hero />
      <OurBenefits
        benefits={BenefitsData}
        btnContnet="Children Deserve Bright Future"
        title="Our Benefits"
        descrption="With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child's future."
      />
      <OurTestimonials />
      <FrequentlyAskedQuestions />
      <Navigate />
    </>
  );
};

export default Home;
