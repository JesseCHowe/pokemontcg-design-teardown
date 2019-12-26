import React from "react";
import styles from "./Nav.module.css";

const nav = () => {
  const initDisplay = {
    display: "none"
  };
  const openMenu = function(selectedID) {
    const dropdown = document.getElementById(selectedID);
    const dropdowns = document.querySelectorAll("#SelectionMenu ul");

    if (dropdown.style.display === "none") {
      dropdowns.forEach(dropdown => {
        dropdown.style.display = "none";
      });
      dropdown.style.display = "flex";
    } else {
      dropdowns.forEach(dropdown => {
        dropdown.style.display = "none";
      });
    }
  };
  return (
    <React.Fragment>
      <div className={styles.Nav}>
        <a className={styles.Logo} href="https://www.pokemontcg.com/en-us/">
          <img
            src={require("../../assets/logos/general/tcg-logo_2x.png")}
            alt=""
          />
        </a>
        <nav>
          <span>Menu</span>
          <div className={styles.Hamburger}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </nav>
      </div>
      <ul id="SelectionMenu" className={styles.SelectionMenu}>
        <li>
          <button onClick={e => openMenu("ExpansionMenu")}>
            RECENT EXPANSIONS
          </button>
          <ul
            id="ExpansionMenu"
            style={initDisplay}
            className={[styles.RecentExpansions, "hide"].join(" ")}
          >
            <li>Cosmic Eclipse</li>
            <li>Hidden Fates</li>
            <li>Unified Minds</li>
            <li>Unbroken Bonds</li>
            <li>Detective Pikachu</li>
            <li>Team Up</li>
          </ul>
        </li>
        <li>
          <button onClick={e => openMenu("CardMenu")}>CARDS</button>
          <ul id="CardMenu" style={initDisplay} className={styles.Cards}>
            <li>Cosmic Eclipse</li>
            <li>Hidden Fates</li>
            <li>Unified Minds</li>
            <li>Unbroken Bonds</li>
            <li>Detective Pikachu</li>
            <li>Team Up</li>
          </ul>
        </li>
        <li>HOW TO PLAY</li>
        <li>WHERE TO PLAY</li>
      </ul>
    </React.Fragment>
  );
};

export default nav;
