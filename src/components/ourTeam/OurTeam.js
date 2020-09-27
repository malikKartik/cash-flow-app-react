import React from "react";
import Card from "../../components/teamsCard/TeamsCard";
import "./OurTeam.css";
import prerna from "../../assets/prerna.png";
import kartik from "../../assets/kartik.png";

const OurTeam = () => {
  return (
    <div className="our-teams-container">
      <div className="our-team-sub">
        <center className="our-team-heading">Meet our team</center>
        <div className="team-photos">
          <div style={{ marginRight: "5vw" }}>
            <Card
              image={prerna}
              name="Prerna Budhraja"
              description="I am a software development engineer. I love to make beutiful websites and apps."
            ></Card>
          </div>
          <div>
            <Card
              image={kartik}
              name="Kartik Malik"
              description="I am a software development engineer. I love to make beutiful websites and apps."
            ></Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
