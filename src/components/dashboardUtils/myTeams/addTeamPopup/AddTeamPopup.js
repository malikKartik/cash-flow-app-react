import React from "react";
import "./AddTeamPopup.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";

const AddTeamPopup = (props) => {
  const [addTeam, setAddTeam] = React.useState(true);
  if (addTeam) {
    return (
      <div className="my-team-add-card">
        <div className="add-team-switch">
          <div>
            <button
              className="button-switch button-switch-add"
              style={{ backgroundColor: addTeam ? "#2a75ff" : "" }}
            >
              <p className="button-name">Add Team</p>
            </button>
          </div>
          <div>
            <button
              className="button-switch button-switch-join"
              style={{
                backgroundColor: addTeam ? "" : "#2a75ff",
              }}
              onClick={() => setAddTeam(false)}
            >
              <p className="button-name">Join Team</p>
            </button>
          </div>
        </div>
        <div style={{ marginTop: "20px" }}>
          <TextField
            id="outlined-password-input"
            label="Team Name"
            type="text"
            autoComplete="current-password"
            variant="outlined"
          />
        </div>
        <Button
          variant="contained"
          style={{ backgroundColor: "#2a75ff", marginTop: "20px" }}
        >
          Create Team
        </Button>
        <div className="close-popup" onClick={() => props.setShowCard(false)}>
          <CloseIcon></CloseIcon>
        </div>
      </div>
    );
  } else {
    return (
      <div className="my-team-add-card">
        <div className="add-team-switch">
          <div>
            <button
              className="button-switch button-switch-add"
              style={{ backgroundColor: addTeam ? "#2a75ff" : "" }}
              onClick={() => setAddTeam(true)}
            >
              <p className="button-name">Add Team</p>
            </button>
          </div>
          <div>
            <button
              className="button-switch button-switch-join"
              style={{
                backgroundColor: addTeam ? "" : "#2a75ff",
              }}
            >
              <p className="button-name">Join Team</p>
            </button>
          </div>
        </div>
        <div style={{ marginTop: "20px" }}>
          <TextField
            id="outlined-password-input"
            label="Team ID"
            type="text"
            autoComplete="current-password"
            variant="outlined"
          />
        </div>
        <div style={{ marginTop: "20px" }}>
          <TextField
            id="outlined-password-input"
            label="Password"
            type="text"
            autoComplete="current-password"
            variant="outlined"
          />
        </div>
        <Button
          variant="contained"
          style={{ backgroundColor: "#2a75ff", marginTop: "20px" }}
        >
          Join Team
        </Button>
        <div
          className="close-popup-join"
          onClick={() => props.setShowCard(false)}
        >
          <CloseIcon></CloseIcon>
        </div>
      </div>
    );
  }
};

export default AddTeamPopup;
