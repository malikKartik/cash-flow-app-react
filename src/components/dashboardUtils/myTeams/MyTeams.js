import React from "react";
import SimpleCard from "../myTeams/myTeamCard/MyTeamCard";
import MyInformation from "../myTeams/myInformation/MyInformation";
import "./MyTeams.css";

const teams = [
  {
    id: "12355",
    name: "First Team",
  },
  {
    id: "1235456",
    name: "Second Team",
  },
];

const MyTeams = () => {
  return (
    <div>
      <h1 style={{ marginTop: "20px" }}>My Teams</h1>
      <div class="my-teams-container">
        <div>
          {teams.map((item) => {
            return <SimpleCard title={item.name} id={item.id}></SimpleCard>;
          })}
        </div>
        <div>
          <MyInformation
            name="Prerna Budhraja"
            email="prernabudhraja8@gmail.com"
          ></MyInformation>
        </div>
      </div>
    </div>
  );
};

export default MyTeams;
