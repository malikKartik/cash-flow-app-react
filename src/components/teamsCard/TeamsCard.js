import React, { useState } from "react";
import "./TeamsCard.css";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";

const TeamsCard = (props) => {
  const [show, setShow] = useState(false);
  const onMouseEnter = () => {
    setShow(true);
  };
  const onMouseLeave = () => {
    setShow(false);
  };
  return (
    <>
      <div
        className="teams-card"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <img className="teams-img" src={props.image}></img>
        <div
          className="teams-cover"
          style={{ display: show ? "block" : "none" }}
        >
          <div className="teams-cover-icons">
            <img
              src={github}
              alt="github"
              style={{ marginRight: "1.5vw", cursor: "pointer" }}
            ></img>
            <img
              src={linkedin}
              alt="linkedin"
              style={{ cursor: "pointer" }}
            ></img>
          </div>
        </div>
      </div>
      <div className="member-name">{props.name}</div>
      <div className="member-description">{props.description}</div>
    </>
  );
};

export default TeamsCard;
