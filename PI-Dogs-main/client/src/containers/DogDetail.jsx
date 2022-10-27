import React from "react";
import Detail from "../components/Detail";
import { useSelector, useDispatch } from "react-redux";
import { showDetail } from "../redux/actions";
// import { useParams } from "react-router-dom";

export default function DogDetail(props) {
  const dispatch = useDispatch();
  const dogs = useSelector(state => state.showDogs);
  const id = props.match.params.idRaza;

  React.useEffect(() => {
    dispatch(showDetail(id));
  }, []);
  console.log(dogs);

  return (
    <div>
      <Detail
        name={dogs[0].name}
        image={dogs[0].image}
        minHeight={dogs[0].minHeight}
        maxHeight={dogs[0].maxHeight}
        minWeight={dogs[0].minWeight}
        maxWeight={dogs[0].maxWeight}
        yearsOfLife={dogs[0].yearsOfLife}
      />
    </div>
  );
}
