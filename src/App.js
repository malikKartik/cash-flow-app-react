import React from 'react';
import './App.css';
import Landing from './containers/landing/Landing'
import Navbar from './components/navbar/Navbar'
import SignIn from './components/signIn/SignIn'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [showSignIn,setShowSignIn] = React.useState(true)
  return (
    <div className="App">
      <Router>
        <Navbar setShowSignIn={setShowSignIn}></Navbar>
        {showSignIn?<SignIn setShowSignIn={setShowSignIn}></SignIn>:null}
        <Switch>
          <Route path="/">
            <Landing></Landing>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
