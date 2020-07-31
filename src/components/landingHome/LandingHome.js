import React from "react";
import "./LandingHome.css";
import Button from "@material-ui/core/Button";
import wave from "../../assets/wave2.svg";
import landing from "../../assets/landing1.png";

const LandingFirstSection = () => {
  return (
    <div>
      <div className="landing-container">
        <div>
          <img src={landing} class="landing-image" alt="Landing"></img>
        </div>
        <div>
          <p class="landing-heading">Cash Flow</p>
          <p class="landing-subheading">
            Managing cash has never been this easy!!
          </p>
          <div className="landing-buttons">
            <Button
              variant="contained"
              style={{
                color: "white",
                backgroundColor: "#065cd0",
                width: "10vw",
                marginRight: "20px",
              }}
            >
              Signup
            </Button>
            <Button
              variant="contained"
              style={{
                color: "white",
                backgroundColor: "#065cd0",
                width: "10vw",
              }}
            >
              Login
            </Button>
            <Button
              variant="contained"
              style={{
                color: "white",
                backgroundColor: "#065cd0",
              }}
              className="how"
            >
              How it works?
            </Button>
          </div>
        </div>
      </div>
      <div>
        <img src={wave} className="landing-wave" alt="wave"></img>
      </div>
    </div>
  );
};

export default LandingFirstSection;
