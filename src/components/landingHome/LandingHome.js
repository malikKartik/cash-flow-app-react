import React from "react";
import "./LandingHome.css";
import cashflow from "../../assets/android.svg";

const LandingFirstSection = () => {
  return (
    <>
      <div className="cover-image">
        <img src={cashflow} alt="cash"></img>
      </div>
      <div className="landing-home-container">
        <div className="tilted-bg"></div>
        <div className="landing-heading">
          <div className="main-heading">Cash Flow</div>
          <div className="main-subheading">
            Handling transactions has never been this easy!
          </div>
          <div className="landing-buttons">
            <button className="login">LOGIN</button>
            <button className="landing-button">SIGNUP</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingFirstSection;
