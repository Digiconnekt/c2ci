import HeroSection from "./partials/HeroSection";
import WhyChooseUs from "./partials/WhyChooseUs/WhyChooseUs";
import MissionVisionValues from "./partials/MissionVisionValues/MissionVisionValues";
import AboutUs from "./partials/AboutUs/AboutUs";
import NumCounter from "./partials/AboutUs/NumCounter";
import IndustryAssociation from "./partials/IndustryAssociation/IndustryAssociation";
import WhatOurClientSays from "./partials/WhatOurClientSays/WhatOurClientSays";

const Home = () => {
  return (
    <>
      <main className="pt-[88px]">
        <HeroSection />

        <WhyChooseUs />

        <MissionVisionValues />

        <AboutUs />

        <NumCounter />

        <IndustryAssociation />

        <WhatOurClientSays />
      </main>
    </>
  );
};

export default Home;
