import React from "react";
import Learn from "../../Components/Learn/Learn";
import SubHero from "../../Components/SubHero/SubHero";
import { FeaturesData } from "../../Data/FeaturesData";
import OurBenefits from "../../Components/OurBenefits/OurBenefits";
import Gallary from "../../Components/Gallary/Gallary";

const Academics = () => {
  return (
    <>
      <SubHero
        title="Nurturing Young Minds for Success"
        desc="Welcome to our Academics page, where we take pride in providing a comprehensive and stimulating educational experience for your child. Our kindergarten school's academic program is thoughtfully designed to foster a love for learning while building a strong foundation of essential skills and knowledge. From language arts and mathematics to science and social studies, our curriculum is carefully crafted to spark curiosity and encourage active exploration."
      />
      <OurBenefits
        benefits={FeaturesData}
        btnContnet="Our Features"
        title="Our Special Features"
        descrption="Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!"
      />
      <Learn />
      <Gallary />
    </>
  );
};

export default Academics;
