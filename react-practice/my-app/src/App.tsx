import React from "react";

import "./App.css";
import RefInput from "./components/RefInput";
import StateInput from "./components/StateInput";

function App() {
  return (
    <div className="App">
      <StateInput />
      <hr />
      <RefInput />
    </div>
  );
}

export default App;
