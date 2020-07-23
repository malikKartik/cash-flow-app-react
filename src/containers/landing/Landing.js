import React from "react";
import "./Landing.css";
import ClearSpace from "../../components/clearSpace/ClearSpace";
import LandingFirstSection from "../../components/landingFirstSection/LandingFirstSection";
const Landing = () => {
  return (
    <div className="landing">
      <ClearSpace height="60px"></ClearSpace>
      <div className="first">
        <LandingFirstSection></LandingFirstSection>
      </div>
      <div className="second">
        <h1>Second section</h1>
      </div>
    </div>
  );
};

export default Landing;
