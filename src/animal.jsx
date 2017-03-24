import React from 'react';

export default function Animal(props) {
  let animal_type = props.value == "llama" ? llamaPic : moosePic;
  return (
    <div id={props.value}>
      <img src={animal_type} />
    </div>
  );
}

export default function AnimalParty(props) {
  return (
    <h1 onClick={() => props.onClick()} className={props.value}>
      {props.value.toUpperCase()} PARTY
    </h1>
  );
}
