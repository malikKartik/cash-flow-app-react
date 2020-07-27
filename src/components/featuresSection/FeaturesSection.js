import React from "react";
import "./FeaturesSection.css";
import Card from "../featuresCard/FeaturesCard";
import team from "../../assets/teams.png";
import cash from "../../assets/cash.png";
import transactions from "../../assets/transactions.png";

const FeaturesSection = () => {
  return (
    <div className="landing-features-container">
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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffff"
            fill-opacity="1"
            d="M0,224L48,208C96,192,192,160,288,170.7C384,181,480,235,576,224C672,213,768,139,864,106.7C960,75,1056,85,1152,74.7C1248,64,1344,32,1392,16L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default FeaturesSection;
