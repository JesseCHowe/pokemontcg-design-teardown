import React from "react";
import styles from "./DeckFeatures.module.css";

const deckFeatures = props => {
  return (
    <div className={styles.DeckFeatures}>
      <div className={styles.Card}>
        <img
          src={require(`../../../assets/recent-expansions/cosmic-eclipse/cards/${props.activeCard}`)}
          alt=""
        />
      </div>
      <button>View the Card Gallery</button>
      <h2>Dynamic Text Here</h2>
      <p>
        Soar to new heights with the first TAG TEAM trio, Moltres & Zapdos &
        Articuno-GX! These three Legendary Pokémon combine their considerable
        strength to overwhelm all challengers! Just be careful—when your TAG
        TEAM gets Knocked Out, your opponent takes three Prize cards!
      </p>
      <div>
        <ul>
          <li onClick={() => props.renderCard(props.card1)}>Button 1</li>
          <li onClick={() => props.renderCard(props.card2)}>Button 2</li>
          <li onClick={() => props.renderCard(props.card3)}>Button 3</li>
        </ul>
      </div>
    </div>
  );
};

export default deckFeatures;
