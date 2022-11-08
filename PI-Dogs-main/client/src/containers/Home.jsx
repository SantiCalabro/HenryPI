import React from "react";
import Cards from "../components/Cards";
import { useDispatch } from "react-redux";
import FilterSection from "../components/FilterSection";
import { showDogs, showTemperaments } from "../redux/actions";
import H from "../styles/Home.module.css";
import sidePic from "../statics/astronaut.png";
import barkSound from "../statics/bark.mp3";
import createBtn from "../statics/createBtn.png";
import { Link } from "react-router-dom";

export default function Home() {
  const dispatch = useDispatch();
  var audio = new Audio(barkSound);

  function handleClick() {
    audio.play();
  }
  React.useEffect(() => {
    dispatch(showDogs());
  }, []);
  React.useEffect(() => {
    dispatch(showTemperaments());
  }, []);

  return (
    <div>
      <hr />
      <img
        src={sidePic}
        alt=""
        className={H.sidePic}
        onClick={() => handleClick()}
      />

      <FilterSection />
      <div>
        <Link to="/create">
          <img
            src={createBtn}
            alt=""
            className={H.createBtn}
            onClick={() => {}}
          />
        </Link>
        <Cards />
      </div>
    </div>
  );
}
