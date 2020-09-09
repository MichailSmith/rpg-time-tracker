import React from "react";
import "./App.css";
import { GameMasterScreen } from "./GameMasterScreen";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <GameMasterScreen />
    </div>
  );
}

export default App;
