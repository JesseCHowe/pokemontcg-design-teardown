import React, { Component } from "react";

// import Nav from "../../components/Nav/Nav";
import Banner from "../../../components/Expansions/Banner/Banner";
import DeckFeatures from "../../../components/Expansions/DeckFeatures/DeckFeatures";
// import DeckDetails from "../../../components/Expansions/DeckDetails/DeckDetails";
// import CardDexDownload from "../../../components/Expansions/CardDexDownload/CardDexDownload";
// import CardGallery from "../../../components/Expansions/CardGallery/CardGallery";
// import FeaturedCollections from "../../../components/Expansions/FeaturedCollections/FeaturedCollections";

class UnbrokenBonds extends Component {
  render() {
    return (
      <React.Fragment>
        <Banner />
        <DeckFeatures />
      </React.Fragment>
    );
  }
}

export default UnbrokenBonds;
