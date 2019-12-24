import React, { Component } from "react";
import Headers from "../../components/Headers/Headers";

class Home extends Component {
  state = {
    sets: {
      cosmicEclipse: {
        banner: "cosmic-eclipse.mp4",
        logo: "logo-cosmic-eclipse"
      },
      hiddenFates: {
        banner: "hidden-fates.mp4",
        logo: "logo-hidden-fates"
      },
      unifiedMinds: {
        banner: "unified-minds.mp4",
        logo: "logo-unified-minds"
      }
    }
  };
  render() {
    return (
      <div>
        <Headers sets={this.state.sets} />
      </div>
    );
  }
}

export default Home;
