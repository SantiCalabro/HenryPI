import React from "react";
import SearchBar from "./searchBar";
import N from "../styles/navBar.module.css";

export default function navBar() {
  return (
    <div>
      <div className={N.container}>
        <h1 className={N.title}>DogFinder</h1>
        <SearchBar />
      </div>
    </div>
  );
}
