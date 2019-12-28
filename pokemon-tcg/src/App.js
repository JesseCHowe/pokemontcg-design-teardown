import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Home from "./containers/Home/Home";
import CosmicEclipse from "./containers/Expansion/CosmicEclipse/CosmicEclipse";
import HiddenFates from "./containers/Expansion/HiddenFates/HiddenFates";
import UnifiedMinds from "./containers/Expansion/UnifiedMinds/UnifiedMinds";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link
                  to={{
                    pathname: "/cosmic-eclipse"
                  }}
                >
                  Cosmic Eclipse
                </Link>
              </li>
              <li>
                <Link to="/hidden-fates">Hidden Fates</Link>
              </li>
              <li>
                <Link to="/unified-minds">Unified Minds</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/cosmic-eclipse" exact component={CosmicEclipse} />
        <Route path="/hidden-fates" exact component={HiddenFates} />
        <Route path="/unified-minds" exact component={UnifiedMinds} />
      </div>
    );
  }
}

export default App;
