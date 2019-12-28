import React, { Component } from "react";

class cardGallery extends Component {
  state = {
    prevCard: null
  };
  displayCard = e => {
    if (this.state.prevCard) {
      console.log(this.state.prevCard);
      this.state.prevCard.style.display = "none";
    }
    const currentCard = e.currentTarget.nextElementSibling;
    currentCard.style.display = "block";
    // prevCard = currentCard;
    this.setState({
      prevCard: currentCard
    });
  };
  render() {
    return (
      <div>
        <div>
          <h3>Intro</h3>
        </div>
        <div>
          <h3>Deck List</h3>
          {Object.keys(this.props.data.cards).map((element, idx) => {
            return (
              <div key={idx}>
                <h2>{element}</h2>
                <ul>
                  {this.props.data.cards[element].map(card => {
                    return (
                      <li key={card.name} style={{ width: "100%", margin: 0 }}>
                        <button onClick={e => this.displayCard(e)}>
                          {card.name}
                        </button>
                        <div style={{ display: "none", width: "100%" }}>
                          <img
                            src={require(`../../../assets/recent-expansions/cosmic-eclipse/cards/${card.image}`)}
                            alt=""
                          />
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <div>
          <h3>Sample Hand</h3>
        </div>
      </div>
    );
  }
}

export default cardGallery;
