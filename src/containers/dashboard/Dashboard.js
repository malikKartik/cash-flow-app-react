import React from "react";
import ClearSpace from "../../components/clearSpace/ClearSpace";
import MyTeams from "../../components/dashboardUtils/myTeams/MyTeams";
import "./Dashboard.css";
const Dashboard = () => {
  return (
    <div className="dashboardContainer">
      <ClearSpace height="60px"></ClearSpace>
      <MyTeams></MyTeams>
    </div>
  );
};

export default Dashboard;
