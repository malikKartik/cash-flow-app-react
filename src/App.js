import React from 'react';
import './App.css';
import Landing from './containers/landing/Landing'
import Navbar from './components/navbar/Navbar'
import SignIn from './components/signIn/SignIn'
import SignUp from './components/signUp/SignUp'
import Dashboard from './containers/dashboard/Dashboard'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [showSignIn,setShowSignIn] = React.useState(false)
  const [showSignUp,setShowSignUp] = React.useState(false)
  return (
    <div className="App">
      <Router>
        <Navbar setShowSignIn={setShowSignIn}></Navbar>
        {showSignIn?<SignIn setShowSignIn={setShowSignIn} setShowSignUp={setShowSignUp}></SignIn>:null}
        {showSignUp?<SignUp setShowSignIn={setShowSignIn} setShowSignUp={setShowSignUp}></SignUp>:null}
        <Switch>
          <Route exact path="/">
            <Landing></Landing>
          </Route>
          <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
