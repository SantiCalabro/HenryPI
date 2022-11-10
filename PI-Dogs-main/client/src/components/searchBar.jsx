import React from "react";
import S from "../styles/searchBar.module.css";

export default function searchBar(props) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search your dog"
        className={S.search}
        onChange={e => props.handleSearch(e)}
      />
    </div>
  );
}
