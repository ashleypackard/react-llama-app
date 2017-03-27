import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/index.scss';
import DressUp from './dressup.jsx';
import ClothingPreview from './clothing_preview.jsx';
import AnimalPartyTitle from './animal_party_title.jsx';
import Animal from './animal.jsx';

import noItem from "../imgs/do-not-enter.png";
import partyHat from "../imgs/hats/partyhat.png";
import winterHat from "../imgs/hats/winterHat.gif";
import crownHat from "../imgs/hats/crown.png";

import bowtieNeck from "../imgs/neckwear/bowtie.png";
import scarfNeck from "../imgs/neckwear/scarf.png";
import capeNeck from "../imgs/neckwear/cape.png";

const default_no_item = noItem;

const hat_array = [
  ["no_item", default_no_item],
  ["party", partyHat],
  ["winter", winterHat],
  ["crown", crownHat]
];

const neckwear_array = [
  ["no_item", default_no_item],
  ["bowtie", bowtieNeck],
  ["scarf", scarfNeck],
  ["cape", capeNeck]
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      mode: "llama",
      clothing_types: ["hat", "neckwear"],
      wardrobe: [noItem, noItem],
      clothes_id: ["no_item", "no_item"]
    };
  }

  handleTitleClick(mode) {
    let new_mode = this.state.mode === "llama" ? 'moose' : 'llama';
    this.setState({
      mode: new_mode
    });
  }

  handleClothingClick(what_to_wear) {
    // what_to_wear is the array of the clothing type and the name of item to put on, and the item to put on
    let wearing = this.state.wardrobe.slice();
    let cid = this.state.clothes_id.slice();
    const pos = this.state.clothing_types.indexOf(what_to_wear[0]);

    wearing[pos] = what_to_wear[2];
    cid[pos] = what_to_wear[1];

    this.setState({
      wardrobe: wearing,
      clothes_id: cid
    });
  }

  render() {
    return (
      <div>
        <div id="header">
          <AnimalPartyTitle value={this.state.mode} onClick={() => this.handleTitleClick(this.state.mode)} />
          <p>Click on a different clothing items to dress up the llama!</p>
        </div>
        <div id="left-container">
          <DressUp wardrobe_names={this.state.clothes_id} wardrobe={this.state.wardrobe} mode={this.state.mode} />
          <Animal value={this.state.mode} />
        </div>
        <div id="right-container">
          <div className="hats">
            <ClothingPreview clothing_array={hat_array} clothing_type={this.state.clothing_types[0]} onClick={(i) => this.handleClothingClick(i)} />
          </div>
          <div className="neckwear">
            <ClothingPreview clothing_array={neckwear_array} clothing_type={this.state.clothing_types[1]} onClick={(i) => this.handleClothingClick(i)} />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

