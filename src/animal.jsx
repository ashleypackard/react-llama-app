import React from 'react';
import llamaPic from "../imgs/llama.jpg";
import moosePic from "../imgs/mystic_moose.gif";

export default function Animal(props) {
  let animal_type = props.value == "llama" ? llamaPic : moosePic;
  return (
    <div id={props.value}>
      <img src={animal_type} />
    </div>
  );
}
