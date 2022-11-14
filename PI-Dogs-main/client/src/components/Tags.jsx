import React from "react";
import T from "../styles/Tags.module.css";
import { useState } from "react";
export default function Tags(props) {
  const [state, setState] = useState({
    active: false,
    clicks: 0,
  });

  const toggleClass = e => {
    const currentState = state.active;
    // setState({ ...state, clicks: state.clicks + 1 });
    if (props.temperaments.length < 3) {
      setState({ ...state, active: !currentState });
      props.setTemp(e);
    }
    if (
      props.temperaments.length === 3 &&
      !props.temperaments.includes(e.target.innerText)
    ) {
      setState({ ...state, active: currentState });
      props.setTemp(e);
    }
    if (
      props.temperaments.length === 3 &&
      props.temperaments.includes(e.target.innerText)
    ) {
      setState({ ...state, active: !currentState });
      props.handleClear(e);
    }
    if (props.temperaments.includes(e.target.innerText)) {
      setState({ ...state, active: !currentState });
      props.handleClear(e);
    }
  };

  return (
    <div className={T.tag}>
      <span
        className={state.active ? T.active : T.tagContainer}
        value={props.name}
        onClick={e => {
          toggleClass(e);
        }}
      >
        {props.name}
      </span>
    </div>
  );
}
