import React from "react";
import SimpleCard from "../myTeams/myTeamCard/MyTeamCard";
import MyInformation from "../myTeams/myInformation/MyInformation";
import AddTeamCard from "../myTeams/addTeamCard/AddTeamCard";
import AddTeamPopup from "../myTeams/addTeamPopup/AddTeamPopup";
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
  {
    id: "3214",
    name: "Bangalore trip",
  },
  {
    id: "12343",
    name: "Roommates",
  },
];

const MyTeams = () => {
  const [showCard, setShowCard] = React.useState(false);
  const handleAddCard = () => {
    setShowCard(!showCard);
  };
  return (
    <div>
      <h1 style={{ marginTop: "20px" }}>My Teams</h1>
      <div style={{ display: showCard ? "block" : "none" }}>
        <AddTeamPopup setShowCard={setShowCard}></AddTeamPopup>
      </div>
      <div class="my-teams-container">
        <div class="my-teams-container-container">
          <div onClick={handleAddCard}>
            <AddTeamCard></AddTeamCard>
          </div>
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
