import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { showDetail, clearDetail } from "../redux/actions";
import D from "../styles/Detail.module.css";
import CatchError from "./Error";
import LoadingHome from "./LoadingHome";
import Error from "./ErrorConnection";

export default function DogDetail(props) {
  const dispatch = useDispatch();
  const dog = useSelector(state => state.dogDetail);
  const err = useSelector(state => state.error);
  const lang = useSelector(state => state.language);
  const id = props.match.params.idRaza;

  React.useEffect(() => {
    dispatch(clearDetail());
    dispatch(showDetail(id));
  }, []);

  return (
    <>
      {err == "error" ? (
        <Error />
      ) : (
        <div className={D.container}>
          {dog.length > 0 ? (
            dog.map(el => (
              <div key={el.id}>
                <div className={D.imageContainer}>
                  <img src={el.image} className={D.image} alt="" />
                </div>
                <div className={D.tempContainer}>
                  {lang === "English" ? (
                    <h4 className={D.tempTitle}>Temperament</h4>
                  ) : (
                    <h4 className={D.tempTitle}>Temperamento</h4>
                  )}
                  <div className={D.hashtags}>
                    <p className={D.temperament}>
                      {typeof el.temperaments[0] === "string"
                        ? el.temperaments.map(el => <span> {el}, </span>)
                        : el.temperaments.map(el => <span> {el.name}, </span>)}
                    </p>
                  </div>
                </div>

                <div className={D.breedContainer}>
                  {el.breedGroup ? (
                    <span className={D.breed}>{el.breedGroup}</span>
                  ) : (
                    <span className={D.breed}>
                      {lang === "English"
                        ? " Unknown breed"
                        : "Raza desconocida"}
                    </span>
                  )}
                </div>
                {lang === "English" ? (
                  <>
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
                  </>
                ) : (
                  <>
                    <p className={D.name}>{el.name}</p>

                    <h4 className={D.averages}>Promedios</h4>
                    <p className={D.yearsTitle}>Años de vida:</p>
                    <p className={D.years}>
                      {el.minYearsOfLife && el.maxYearsOfLife
                        ? el.minYearsOfLife + "-" + el.maxYearsOfLife + " años"
                        : el.minYearsOfLife + " años"}
                    </p>
                    <p className={D.weightTitle}>Peso:</p>
                    <p className={D.weight}>
                      {el.minWeight && el.maxWeight
                        ? el.minWeight + "-" + el.maxWeight + " libras"
                        : el.minWeight + " libras"}
                    </p>

                    <p className={D.heightTitle}>Altura:</p>
                    <p className={D.height}>
                      {el.minHeight && el.maxHeight
                        ? el.minHeight + "-" + el.maxHeight + " pies"
                        : el.minHeight + " pies"}
                    </p>
                  </>
                )}
              </div>
            ))
          ) : (
            <>
              {dog.e === "La raza que buscas no existe" ? (
                <div>
                  <CatchError />
                </div>
              ) : (
                <div className={D.loadingContainer}>
                  <LoadingHome />
                </div>
              )}
            </>
          )}
        </div>
      )}
    </>
  );
}
