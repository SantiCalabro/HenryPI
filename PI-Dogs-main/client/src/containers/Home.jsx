import React from "react";
import Cards from "../components/Cards";
import { useDispatch, useSelector } from "react-redux";
import FilterSection from "../components/FilterSection";
import {
  showDogs,
  showTemperaments,
  showBreeds,
  getFiltered,
} from "../redux/actions";
import H from "../styles/Home.module.css";
import sidePic from "../statics/astronaut.png";
import barkSound from "../statics/bark.mp3";
import createBtn from "../statics/createBtn.png";
import LoadingHome from "./LoadingHome";
import { Link } from "react-router-dom";
import SearchBar from "../components/searchBar";
import { useState } from "react";
import Error from "./ErrorConnection";

export default function Home() {
  const dispatch = useDispatch();
  const dogs = useSelector(state => state.showDogs);
  const err = useSelector(state => state.error);
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    dispatch(showDogs());
    dispatch(showTemperaments());
    dispatch(showBreeds());
    setLoading(false);
  }, []);

  var audio = new Audio(barkSound);

  function handleClick() {
    audio.play();
  }

  function handleSearch(e) {
    const filter = dogs.filter(
      el =>
        el.name && el.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    const msg = { msg: "Ups! Dog not found!" };
    if (filter.length > 0) {
      dispatch(getFiltered(filter));
    } else {
      dispatch(getFiltered(msg));
    }
  }
  return (
    <div className={H.general}>
      <hr />
      {err == "error" ? (
        <Error />
      ) : !dogs.length ? (
        <div className={H.loadingContainer}>
          <LoadingHome />
        </div>
      ) : (
        <div>
          <div className={H.picPointer} onClick={() => handleClick()}></div>
          <img src={sidePic} alt="" className={H.sidePic} />

          <div>
            <div className={H.SearchBar}>
              <SearchBar handleSearch={handleSearch} />
              <Link to="/created" style={{ textDecoration: "none" }}>
                <h4 className={H.created}>Created dogs</h4>
              </Link>
            </div>
            <Link to="/create">
              <img src={createBtn} alt="" className={H.createBtn} />
            </Link>
            <Cards />
            <FilterSection />
          </div>
        </div>
      )}
    </div>
  );
}
