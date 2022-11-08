import React from "react";
import SearchBar from "./searchBar";
import N from "../styles/navBar.module.css";
import Logo from "../statics/Logo.png";
import { Link } from "react-router-dom";
export default function navBar() {
  return (
    <div>
      <div className={N.container}>
        <Link to="/home">
          <img src={Logo} className={N.logo} alt="" />
        </Link>
        <SearchBar />
      </div>
    </div>
  );
}
