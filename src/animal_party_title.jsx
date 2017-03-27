import React from 'react';

export default function AnimalPartyTitle(props) {
  return (
    <h1 onClick={() => props.onClick()} className={props.value}>
      {props.value == 'moose' && <span> MAJESTIC </span> } {props.value.toUpperCase()} PARTY
    </h1>
  );
}
