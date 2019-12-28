import React, { Component } from "react";

import cosmicEclipseData from "../../../data/cosmicEclipse.json";
// import Nav from "../../components/Nav/Nav";
import Banner from "../../../components/Expansions/Banner/Banner";
import DeckFeatures from "../../../components/Expansions/DeckFeatures/DeckFeatures";
import DeckDetails from "../../../components/Expansions/DeckDetails/DeckDetails";
// import CardDexDownload from "../../../components/Expansions/CardDexDownload/CardDexDownload";
import CardGallery from "../../../components/Expansions/CardGallery/CardGallery";
// import FeaturedCollections from "../../../components/Expansions/FeaturedCollections/FeaturedCollections";
import CosmicEclipseDeck from "./CosmicEclipseDeck";

class CosmicEclipse extends Component {
  constructor() {
    super();
    this.state = {
      data: cosmicEclipseData,
      logo: "logo-cosmic-eclipse_2x.png",
      card1: "two-cards-feature-SM12-156_2x.png",
      card2: "SM5_119.png",
      card3: "SM5_125.png",
      activeCard: "two-cards-feature-SM12-156_2x.png"
    };
  }

  renderCard = card => {
    this.setState({
      activeCard: card
    });
  };

  render() {
    return (
      <React.Fragment>
        <Banner id="submit" logo={this.state.logo} />
        <DeckFeatures
          renderCard={this.renderCard}
          card1={this.state.card1}
          card2={this.state.card2}
          card3={this.state.card3}
          activeCard={this.state.activeCard}
        />

        <CosmicEclipseDeck>
          <DeckDetails />
        </CosmicEclipseDeck>

        <CardGallery data={this.state.data} displayCard={this.displayCard} />
      </React.Fragment>
    );
  }
}

export default CosmicEclipse;
