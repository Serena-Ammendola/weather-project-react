import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Weather app</h1>
        <Weather city="Dublin" />
      </header>
    </div>
  );
}

export default App;