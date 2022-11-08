import React from "react";
import H from "../styles/HeaderCreate.module.css";

export default function CreatedDog(props) {
  return (
    <div>
      <hr />
      <div className={H.container}>
        <h1>Upload your buddy!</h1>
        <p>Let the universe know who your best friend is</p>
      </div>
    </div>
  );
}
