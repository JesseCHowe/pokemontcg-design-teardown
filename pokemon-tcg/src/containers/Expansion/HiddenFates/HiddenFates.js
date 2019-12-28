import React, { Component } from "react";

// import Nav from "../../components/Nav/Nav";
import Banner from "../../../components/Expansions/Banner/Banner";
import DeckFeatures from "../../../components/Expansions/DeckFeatures/DeckFeatures";
// import DeckDetails from "../../../components/Expansions/DeckDetails/DeckDetails";
// import CardDexDownload from "../../../components/Expansions/CardDexDownload/CardDexDownload";
// import CardGallery from "../../../components/Expansions/CardGallery/CardGallery";
// import FeaturedCollections from "../../../components/Expansions/FeaturedCollections/FeaturedCollections";

class HiddenFates extends Component {
  state = {
    logo: "logo-hidden-fates_2x.png",
    card1: "two-cards-feature-SM12-156_2x.png",
    card2: "SM5_119.png",
    card3: "SM5_125.png",
    activeCard: "two-cards-feature-SM12-156_2x.png"
  };
  renderCard = card => {
    console.log(card);
    this.setState({
      activeCard: card
    });
  };
  render() {
    return (
      <React.Fragment>
        <Banner logo={this.state.logo} />
        <DeckFeatures
          renderCard={this.renderCard}
          card1={this.state.card1}
          card2={this.state.card2}
          card3={this.state.card3}
          activeCard={this.state.activeCard}
        />
      </React.Fragment>
    );
  }
}

export default HiddenFates;
