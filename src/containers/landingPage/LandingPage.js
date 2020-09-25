import React from "react";
import LandingHome from "../../components/landingHome/LandingHome";
import LandingWorking from "../../components/landingWorking/LandingWorking";
import FeaturesSection from "../../components/featuresSection/FeaturesSection";

const LandingPage = (props) => {
  return (
    <>
      <LandingHome></LandingHome>
      <LandingWorking></LandingWorking>
      <FeaturesSection></FeaturesSection>
    </>
  );
};

export default LandingPage;
