import React, { useState } from "react";
import "./App.css";
import { GameMasterScreen } from "./GameMasterScreen";
import { NavBar } from "./components/NavBar";

function App() {
  const [signedIn, onSignedInChange] = useState(false);

  return (
    <div className="App">
      <NavBar onSignedInChange={onSignedInChange} signedIn={signedIn} />
      {signedIn ? <GameMasterScreen /> : <div>Please sign in</div>}
    </div>
  );
}

export default App;
