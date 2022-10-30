import React from "react";

export default function Tags(props) {
  return (
    <div>
      <label for={props.id}> {props.name}</label>
      <input type="checkbox" id={props.id} value={props.name} />
    </div>
  );
}
