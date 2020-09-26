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
              description="Software Development Engineer"
            ></Card>
          </div>
          <div>
            <Card
              image={kartik}
              name="Kartik Malik"
              description="Software Development Engineer"
            ></Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
