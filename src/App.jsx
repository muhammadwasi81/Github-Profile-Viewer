import React from "react";
import logo from "./components/logo.jpg";
import Profile from "./components/Profile.jsx";
import "./index.css";

const App = () => {
  return (
    <div>
      <header className="App-header">
        <img src={logo} alt="logo" className="App-logo" />
      </header>
      <Profile />
    </div>
  );
};

export default App;
