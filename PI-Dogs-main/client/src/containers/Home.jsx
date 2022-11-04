import React from "react";
import Cards from "../components/Cards";
import { useDispatch } from "react-redux";
import FilterSection from "../components/FilterSection";
import { showDogs, showTemperaments } from "../redux/actions";
import H from "../styles/Home.module.css";
import sidePic from "../statics/astronaut.png";

export default function Home() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(showDogs());
  }, []);
  React.useEffect(() => {
    dispatch(showTemperaments());
  }, []);

  return (
    <div>
      <hr />
      <img src={sidePic} alt="" className={H.sidePic} />
      <FilterSection />
      <div>
        <Cards />
      </div>
    </div>
  );
}
