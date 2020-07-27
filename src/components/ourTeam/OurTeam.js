import React from "react";
import Card from "../../components/teamsCard/TeamsCard";
import "./OurTeam.css";
import prerna from "../../assets/prerna.jpeg";
import kartik from "../../assets/kartik.jpg";

const OurTeam = () => {
  return (
    <div className="our-teams-container">
      <p className="team-heading">Meet our Team</p>
      <div className="team-card-container">
        <Card
          title="Prerna Budhraja"
          description="Full Stack Engineer"
          image={prerna}
        ></Card>
        <Card
          title="Kartik Malik"
          description="Full Stack Engineer"
          image={kartik}
        ></Card>
      </div>
    </div>
  );
};

export default OurTeam;
