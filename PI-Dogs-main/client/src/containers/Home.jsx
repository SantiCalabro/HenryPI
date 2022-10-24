import React from "react";
import Cards from "../components/Cards";
import { showDogs } from "../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import FilterSection from "../components/FilterSection";

export default function Home() {
  const dispatch = useDispatch();
  //   const dogs = useSelector(state => state.loadedDogs);

  React.useEffect(() => {
    dispatch(showDogs());
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
