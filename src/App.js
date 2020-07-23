import React from 'react';
import './App.css';
import Landing from './containers/landing/Landing'
import Navbar from './components/navbar/Navbar'
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Landing></Landing>
    </div>
  );
}

export default App;
