import React, { Component } from "react";
import styles from "./CosmicEclipseDeck.module.css";

class cosmicEclipseDeck extends Component {
  componentDidMount() {
    const images = document.querySelector(".anim");
    const observer = new IntersectionObserver(entries => {
      console.log(entries);
      if (entries[0].intersectionRatio > 0) {
        entries[0].target.style.animation = "anim1 1s forwards ease-out";
      } else {
        entries[0].target.style.animation = "none";
      }
    });
    observer.observe(images);
  }

  render() {
    return (
      <div style={{ position: "relative", overflow: "hidden" }}>
        <div className={styles.Corners}>
          <img
            id="myUp"
            className={[styles.UpperCorner, "anim"].join(" ")}
            src={require("../../../assets/recent-expansions/cosmic-eclipse/common/sm12-corner-full.png")}
            alt=""
          />
          <img
            id="myDwn"
            className={styles.BottomCorner}
            src={require("../../../assets/recent-expansions/cosmic-eclipse/common/sm12-corner-full.png")}
            alt=""
          />
        </div>
        <div className={styles.ChildContain}>{this.props.children}</div>
      </div>
    );
  }
}

export default cosmicEclipseDeck;
