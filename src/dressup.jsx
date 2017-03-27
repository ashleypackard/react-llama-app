import React from 'react';
import '../styles/index.scss';

import noItem from "../imgs/do-not-enter.png";
const default_no_item = noItem;

export default class DressUp extends React.Component {
  render() {
    const wardrobe_names = this.props.wardrobe_names
    const wardrobe = this.props.wardrobe;

    const dress_up = wardrobe.map((item, index) => {
      let item_css = "wearing-clothing";
      if(item === default_no_item) {
        item_css = item_css.concat(" " + wardrobe_names[index]);
      } else {
        item_css = item_css.concat(" " + wardrobe_names[index] + "-" + this.props.mode );
      }
      return (
        <img key={"wearing_" + wardrobe_names[index] + index} src={item} className={item_css} />
      );
    })
    return (
      <div>
        {dress_up}
      </div>
    );
  }
}
