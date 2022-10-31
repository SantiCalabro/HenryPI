import React from "react";
import D from "../styles/Detail.module.css";
import { useSelector } from "react-redux";

export default function Detail(props) {
  const dog = useSelector(state => state.dogDetail);
  return (
    <div>
      <h1>holis</h1>
      <h1>{props.name}</h1>
    </div>
  );
}
