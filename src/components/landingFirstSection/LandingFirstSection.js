import React from "react";
import "./LandingFirstSection.css";
import Button from "@material-ui/core/Button";
import wave from "../../assets/wave1.svg";

const LandingFirstSection = () => {
  return (
    <div className="container">
      <p className="heading">Cash Flow</p>
      <div className="buttons">
        <Button
          variant="contained"
          style={{
            backgroundColor: "#065cd0",
            color: "white",
            marginRight: "10vw",
          }}
        >
          Signup
        </Button>
        <Button
          variant="contained"
          style={{ backgroundColor: "#065cd0", color: "white" }}
        >
          Login
        </Button>
        <Button
          variant="contained"
          style={{
            backgroundColor: "#065cd0",
            color: "white",
            marginLeft: "6vw",
          }}
        >
          How it works?
        </Button>
      </div>
      <img src={wave}></img>
    </div>
  );
};

export default LandingFirstSection;
