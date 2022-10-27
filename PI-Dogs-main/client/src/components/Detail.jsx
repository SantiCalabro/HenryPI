import React from "react";
import D from "../styles/Detail.module.css";

export default function Detail(props) {
  return (
    <div>
      {/* <div>
        <img src={props.image.url} alt="" />
      </div> */}
      <img src={props.image} alt="" />
      <h1 className={D.title}>{props.name}</h1>
      <h1 className={D.title}>{props.minHeight}</h1>
      <h1 className={D.title}>{props.maxHeight}</h1>
      <h1 className={D.title}>{props.minWeight}</h1>
      <h1 className={D.title}>{props.maxWeight}</h1>
      <h1 className={D.title}>{props.yearsOfLife}</h1>
    </div>
  );
}
