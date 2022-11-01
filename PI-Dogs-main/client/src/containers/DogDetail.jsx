import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { showDetail, clearDetail } from "../redux/actions";

export default function DogDetail(props) {
  const dispatch = useDispatch();
  const dog = useSelector(state => state.dogDetail);
  const id = props.match.params.idRaza;

  React.useEffect(() => {
    dispatch(clearDetail());
    dispatch(showDetail(id));
  }, []);

  return (
    <div>
      {dog.length > 0 ? (
        dog.map(el => (
          <div key={el.id}>
            <img src={el.image} alt="" />
            <p>{el.name}</p>
            <p>{el.breedGroup}</p>
            <p>{el.temperament}</p>
            <p>{el.minYearsOfLife}</p>
            <p>{el.maxYearsOfLife}</p>
            <p>{el.minWeight}</p>
            <p>{el.maxWeight}</p>
            <p>{el.minHeight}</p>
            <p>{el.maxHight}</p>
          </div>
        ))
      ) : (
        <h1>Holi</h1>
      )}
    </div>
  );
}
