import HeroSection from "./partials/HeroSection";
import WhyChooseUs from "../AboutUs/partials/WhyChooseUs/WhyChooseUs";
import AboutUs from "./partials/AboutUs/AboutUs";
import NumCounter from "./partials/AboutUs/NumCounter";
import IndustryAssociation from "./partials/IndustryAssociation/IndustryAssociation";
import WhatOurClientSays from "./partials/WhatOurClientSays/WhatOurClientSays";
import SkilledDevelopers from "./partials/SkilledDevelopers/SkilledDevelopers";
import OneLiner from "../../components/OneLiner/OneLiner";

const oneLinerHeading = [
  {
    text: "We fuel your ideas and ",
    color: "text-white",
  },
  {
    text: "Boost your Business's Profitability ",
    color: "text-orange-500",
  },
  {
    text: "with our solutions",
    color: "text-white",
  },
];

const Home = () => {
  return (
    <>
      <main className="pt-[88px]">
        <HeroSection />

        <AboutUs />

        {/* <MissionVisionValues /> */}

        <NumCounter />

        <WhyChooseUs />

        <IndustryAssociation />

        <SkilledDevelopers />

        <OneLiner heading={oneLinerHeading} />

        <WhatOurClientSays />
      </main>
    </>
  );
};

export default Home;
