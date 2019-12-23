import React, { Component } from "react";
import Headers from "./components/Headers/Headers";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <h1>My Pokemon TCG App</h1>
        <Headers />
      </div>
    );
  }
}

export default App;
