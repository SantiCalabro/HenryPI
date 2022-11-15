import React from "react";
import S from "../styles/searchBar.module.css";
import { useSelector } from "react-redux";

export default function SearchBar(props) {
  const lang = useSelector(state => state.language);
  return (
    <div>
      <input
        type="text"
        placeholder={lang === "English" ? "Search a dog" : "Busca un perro"}
        className={S.search}
        onChange={e => props.handleSearch(e)}
      />
    </div>
  );
}
