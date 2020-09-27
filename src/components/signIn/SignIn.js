import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
import "./SignIn.css";
import illus from "../../assets/illus1.svg";
import axios from "axios";
import {
  Redirect,
} from "react-router-dom";

const SignIn = (props) => {
  const [formData, setFormData] = React.useState({
    email: "kartik1@malik.com",
    password: "kartik@1",
  });
  const [loginSuccess,setLoginSuccess] = React.useState(false)
  const goToSignUp = () => {
    props.setShowSignIn(false);
    props.setShowSignUp(true);
  };
  const onChangeEmail = (e) => {
    setFormData({ ...formData, email: e.target.value });
  };
  const onChangePassword = (e) => {
    setFormData({ ...formData, password: e.target.value });
  };
  const loginClick = () => {
    axios
      .post(
        "http://localhost:3001/api/users/login",
        { ...formData },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res.data);
        localStorage.setItem('loggedIn', true);
        setLoginSuccess(true)
        props.setShowSignIn(false)
        props.setShowSignUp(false)
      })
      .catch((e) => {
        console.log(e);
      });
    // axios.get('http://localhost:3000/api/users/logout').then((res)=>{
    //     console.log(res.data)
    // }).catch(e=>{
    //     console.log(e)
    // })
  };
  return (
    <div className="sign-in">
      {loginSuccess?<Redirect to="/dashboard" />:null}
      <div className="sign-in-inner">
        <div className="sign-in-illustration">
          <img src={illus} alt="sign in illustration" width="80%" />
        </div>
        <div className="sign-in-form">
          <div
            className="close-sign-in"
            onClick={() => props.setShowSignIn(false)}
          >
            <CloseIcon></CloseIcon>
          </div>
          <div className="signin-form-container">
            <h1>SignIn</h1>
            <div className="signin-form-main">
              <TextField
                id="signin-username"
                label="Email/Username"
                variant="outlined"
                fullWidth
                value={formData.email}
                onChange={onChangeEmail}
              />
              <br />
              <br />
              <TextField
                id="signin-password"
                label="Password"
                variant="outlined"
                fullWidth
                value={formData.password}
                onChange={onChangePassword}
              />
              <br />
              <Button
                variant="contained"
                color="primary"
                style={{ marginTop: "40px" }}
                onClick={loginClick}
              >
                SignIn
              </Button>
              <p onClick={goToSignUp}>Don't have an account!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
