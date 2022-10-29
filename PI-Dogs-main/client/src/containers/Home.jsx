import React from "react";
import Cards from "../components/Cards";
import { useDispatch } from "react-redux";
import FilterSection from "../components/FilterSection";
import { showDogs, showTemperaments } from "../redux/actions";

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
      <FilterSection />
      <div>
        <Cards />
      </div>
    </div>
  );
}
