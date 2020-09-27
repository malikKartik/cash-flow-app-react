import React from "react";
import "./App.css";
import LandingPage from "./containers/landingPage/LandingPage";
import Navbar from "./components/navbar/Navbar";
import SignIn from "./components/signIn/SignIn";
import SignUp from "./components/signUp/SignUp";
import Dashboard from "./containers/dashboard/Dashboard";
import DashboardTransations from './containers/dashboardTransactions/DashboardTransactions'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  const [showSignIn, setShowSignIn] = React.useState(false);
  const [showSignUp, setShowSignUp] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(false);
  if (loggedIn !== window.localStorage.getItem("loggedIn"))
    setLoggedIn(window.localStorage.getItem("loggedIn"));
  return (
    <div className="App">
      <Router>
        {!loggedIn?<Redirect to="/"></Redirect>:null}
        <Navbar setShowSignIn={setShowSignIn} loggedIn={loggedIn} setLoggedIn={setLoggedIn}></Navbar>
        {showSignIn ? (
          <SignIn
            setLoggedIn={setLoggedIn}
            setShowSignIn={setShowSignIn}
            setShowSignUp={setShowSignUp}
          ></SignIn>
        ) : null}
        {showSignUp ? (
          <SignUp
            setShowSignIn={setShowSignIn}
            setShowSignUp={setShowSignUp}
          ></SignUp>
        ) : null}
        <Switch>
          <Route exact path="/">
            {loggedIn ? <Redirect to="/dashboard" /> : <LandingPage />}
          </Route>
          <Route path="/dashboard">
            <Dashboard loggedIn={loggedIn}></Dashboard>
          </Route>
          <Route path="/transactions">
            <DashboardTransations></DashboardTransations>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
