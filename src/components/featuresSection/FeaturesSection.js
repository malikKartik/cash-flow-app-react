import React from "react";
import "./FeaturesSection.css";
import image from "../../assets/cashexchange.png";
import FeaturesCard from "../featuresCard/FeaturesCard";

const FeaturesSection = () => {
  const list = [
    {
      heading: "Elegant interface",
      text: "A very user friendly interface made especially for your comfort.",
    },
    {
      heading: "Elegant interface",
      text: "A very user friendly interface made especially for your comfort.",
    },
    {
      heading: "Elegant interface",
      text: "A very user friendly interface made especially for your comfort.",
    },
    {
      heading: "Elegant interface",
      text: "A very user friendly interface made especially for your comfort.",
    },
  ];
  return (
    <div className="landing-features-container">
      <div className="features-sub">
        <div className="features-image">
          <img src={image} alt="exchange"></img>
        </div>
        <div className="features-sub-features">
          <div className="features-sub-text">
            <div className="features-sub-heading">Our Features</div>
            <div className="features-text">
              Here are some of the cool features provided by Cash Flow.
            </div>
            <div className="feature">
              {list.map((item) => {
                return (
                  <FeaturesCard
                    heading={item.heading}
                    text={item.text}
                  ></FeaturesCard>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
