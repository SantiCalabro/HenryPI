import React from "react";
import T from "../styles/Tags.module.css";
export default function Tags(props) {
  return (
    <div className={T.tag}>
      <span
        className={T.tagContainer}
        value={props.name}
        onClick={e => props.setTemp(e)}
      >
        {props.name}
      </span>
    </div>
  );
}
