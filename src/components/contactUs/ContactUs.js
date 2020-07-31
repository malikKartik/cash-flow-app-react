import React from "react";
import "./ContactUs.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <p className="heading">Contact us</p>
      <form className="contact-us-form">
        <div className="form-comp">
          <TextField
            required
            id="outlined-required"
            label="Name"
            variant="outlined"
            defaultValue="name"
            fullWidth
          />
        </div>
        <div className="form-comp">
          <TextField
            required
            id="outlined-required"
            label="Email"
            variant="outlined"
            defaultValue="email"
            fullWidth
          />
        </div>
        <div className="form-comp-multiline">
          <TextField
            id="outlined-multiline-static"
            label="Feedback"
            multiline
            rows={4}
            defaultValue="Feedback"
            variant="outlined"
            fullWidth
          />
        </div>
        <div>
          <Button
            variant="contained"
            style={{
              color: "white",
              backgroundColor: "#065cd0",
              width: "10vw",
              marginRight: "20px",
            }}
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
