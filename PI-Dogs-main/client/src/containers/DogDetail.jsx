import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { showDetail, clearDetail } from "../redux/actions";
import D from "../styles/Detail.module.css";
import loading from "../statics/loading.gif";
export default function DogDetail(props) {
  const dispatch = useDispatch();
  const dog = useSelector(state => state.dogDetail);
  const id = props.match.params.idRaza;

  React.useEffect(() => {
    dispatch(clearDetail());
    dispatch(showDetail(id));
  }, []);

  return (
    <div className={D.container}>
      {dog.length > 0 ? (
        dog.map(el => (
          <div key={el.id}>
            <div className={D.imageContainer}>
              <img src={el.image} className={D.image} alt="" />
            </div>
            <div className={D.tempContainer}>
              <h4 className={D.tempTitle}>Temperament</h4>
              <div className={D.hashtags}>
                <p className={D.temperament}>
                  {el.temperament.map(el => (
                    <span> {el}, </span>
                  ))}
                </p>
              </div>
            </div>

            <div className={D.breedContainer}>
              {el.breedGroup ? (
                <span className={D.breed}>{el.breedGroup}</span>
              ) : (
                <span className={D.breed}>Unknown breed</span>
              )}
            </div>
            <p className={D.name}>{el.name}</p>

            <h4 className={D.averages}>Averages</h4>
            <p className={D.yearsTitle}>Years of life:</p>
            <p className={D.years}>
              {el.minYearsOfLife && el.maxYearsOfLife
                ? el.minYearsOfLife + "-" + el.maxYearsOfLife + " years"
                : el.minYearsOfLife + " years"}
            </p>
            <p className={D.weightTitle}>Weight:</p>
            <p className={D.weight}>
              {el.minWeight && el.maxWeight
                ? el.minWeight + "-" + el.maxWeight + " pounds"
                : el.minWeight + " pounds"}
            </p>

            <p className={D.heightTitle}>Height:</p>
            <p className={D.height}>
              {el.minHeight && el.maxHeight
                ? el.minHeight + "-" + el.maxHeight + " feet"
                : el.minHeight + " feet"}
            </p>
          </div>
        ))
      ) : (
        <div className={D.background}>
          <div className={D.loading}>
            <img src={loading} alt="loading..." />
            <h1>Loading...</h1>
          </div>
        </div>
      )}
    </div>
  );
}
