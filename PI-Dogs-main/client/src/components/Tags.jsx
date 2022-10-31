import React from "react";
import T from "../styles/Tags.module.css";
export default function Tags(props) {
  return (
    <div>
      <div className={T.tagContainer}>
        <input
          className={T.check}
          type="checkbox"
          id={props.id}
          value={props.name}
        />
        <label for={props.id}> {props.name}</label>
      </div>
    </div>
  );
}
