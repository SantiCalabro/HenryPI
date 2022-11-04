import React from "react";
import SearchBar from "./searchBar";
import N from "../styles/navBar.module.css";
import Logo from "../statics/Logo.png";

export default function navBar() {
  return (
    <div>
      <div className={N.container}>
        <img src={Logo} className={N.logo} alt="" />
      </div>
    </div>
  );
}
