import React from "react";
import SubHero from "../../Components/SubHero/SubHero";
import Mission from "../../Components/Mission/Mission";
import Awards from "../../Components/Awards/Awards";
import TeamsComponent from "../../Components/TeamsComponent/TeamsComponent";
import History from "../../Components/History/History";

const About = () => {
  return (
    <>
      <SubHero
        title="Welcome to Little Learners Academy"
        desc="A leading kinder garden school dedicated to providing a nurturing and stimulating environment for young learners. With a commitment to excellence in early education, we believe in shaping curious minds and building a strong foundation for a lifelong love of learning. Our holistic approach fosters intellectual, social, emotional, and physical development, ensuring that each child reaches their full potential."
      />
      <Mission />
      <Awards />
      <History />
      <TeamsComponent />
    </>
  );
};

export default About;
