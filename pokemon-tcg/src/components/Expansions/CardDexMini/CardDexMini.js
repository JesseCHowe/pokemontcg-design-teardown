import React from "react";
import styles from "./CardDexMini.module.css";

const cardDexMini = () => {
  return (
    <div className={styles.CardDexMini}>
      <img
        src={require("../../../assets/recent-expansions/cosmic-eclipse/common/app-icon-2x.png")}
        alt=""
      />
      <div className={styles.InnerOval}>
        <p>
          Manage your collection with the Pokemon Trading Card Game{" "}
          <span>Card Dex</span>!
        </p>
      </div>
    </div>
  );
};

export default cardDexMini;
