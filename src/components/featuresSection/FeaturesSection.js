import React from "react";
import "./FeaturesSection.css";
import Card from "../featuresCard/FeaturesCard";
import team from "../../assets/teams.png";
import cash from "../../assets/cash.png";
import transactions from "../../assets/transactions.png";
import OurTeam from "../ourTeam/OurTeam";
import wave from "../../assets/wave green.svg";

const FeaturesSection = () => {
  return (
    <div className="features-container">
      <p className="features-heading">Our Features</p>
      <div className="card-container">
        <Card
          title="Form teams"
          description="Form teams with your friends and manage the cash flow."
          image={team}
        ></Card>
        <Card
          title="Add expenses"
          description="Add your expenses and split bills with your friends."
          image={cash}
        ></Card>
        <Card
          title="Simply transactions"
          description="Get simplified transactions and get easy handling of money."
          image={transactions}
        ></Card>
      </div>
      <div>
        <img src={wave}></img>
      </div>
    </div>
  );
};

export default FeaturesSection;
