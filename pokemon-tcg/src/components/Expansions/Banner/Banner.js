import React from "react";
import CardDexMini from "../CardDexMini/CardDexMini";
import baseStyles from "./Banner.module.css";

const banner = props => {
  const expansionStyles = require(`./${"Banner"}.module.css`);

  return (
    <header className={[baseStyles.Banner].join(" ")}>
      <div className={baseStyles.BannerContainer}>
        <video type="video/mp4" autoPlay loop playsInline muted preload="auto">
          <source
            src={require("../../../assets/recent-expansions/cosmic-eclipse/video/cosmic-eclipse-mobile.mp4")}
          />
        </video>
        <img
          src={require(`../../../assets/logos/expansions/${props.logo}`)}
          alt=""
        />
      </div>
      <CardDexMini />
    </header>
  );
};

export default banner;
