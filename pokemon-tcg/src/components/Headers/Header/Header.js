import React from "react";
import styles from "./Header.module.css";

const header = props => {
  return (
    <React.Fragment>
      <div className={styles.Set}>
        <div className={styles.Hero}>
          <video
            className={styles.Banner}
            src={require(`../../../assets/headers/${props.banner}`)}
            type="video/mp4"
            autoPlay
            loop=""
            playsInline=""
            muted=""
            preload="auto"
          ></video>
        </div>

        <div className={styles.SubContent}>
          <div>
            <img
              className={styles.Logo}
              src={require(`../../../assets/logos/expansions/${props.logo}_2x.png`)}
              alt=""
            />
          </div>
          <div className={styles.FeatureCard}>
            <img
              className={styles.Front}
              src={require("../../../assets/feature-cards/two-cards-feature-SM12-158_2x.png")}
              alt=""
            />
            <img
              className={styles.Back}
              src={require("../../../assets/feature-cards/two-cards-feature-SM12-158_2x.png")}
              alt=""
            />
          </div>
          <button>
            Learn More <span>></span>
          </button>
        </div>
      </div>
      <div className={styles.Divider}></div>
    </React.Fragment>
  );
};

export default header;
