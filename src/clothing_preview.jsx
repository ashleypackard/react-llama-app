import React from 'react';

function ClothingPreviewImg(props) {
  return (
    <img src={props.value} className="clothing-preview" onClick={() => props.onClick()}/>
  );
}

export default class ClothingPreview extends React.Component {
  render() {
    const arr = this.props.clothing_array;
    const clothes = arr.map((item, index) => {
        return (
          <ClothingPreviewImg key={this.props.clothing_type + "_" +item[0]} value={item[1]} onClick={() => this.props.onClick([this.props.clothing_type, item[0], item[1]])} />
        );
      })
    return (
      <div>
        {clothes}
      </div>
    );
  }
}
