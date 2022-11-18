import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { showDetail, clearDetail, dogDelete } from "../redux/actions";
import { useState } from "react";
import D from "../styles/Detail.module.css";
import CatchError from "./Error";
import LoadingHome from "./LoadingHome";
import Error from "./ErrorConnection";
import editBtn from "../statics/edit.png";
import EditForm from "../components/EditForm";
import exit from "../statics/exit.png";
import deleteIcon from "../statics/delete.png";
import confirm from "../statics/confirm.jpg";
import success from "../statics/successDelete.jpg";
import { Link } from "react-router-dom";
export default function DogDetail(props) {
  const dispatch = useDispatch();
  const dog = useSelector(state => state.dogDetail);
  const err = useSelector(state => state.error);
  const lang = useSelector(state => state.language);
  const id = props.match.params.idRaza;

  const [active, setActive] = useState({
    exit: false,
    edit: false,
    success: false,
    filter: false,
    msg: false,
  });

  function setMsg(e) {
    console.log(e.target.id);
    if (e.target.id === "edit") {
      setActive({ ...active, edit: true, filter: true });
    }
    if (e.target.id === "exit") {
      setActive({ ...active, edit: false, filter: false });
    }
    if (e.target.id === "delete") {
      setActive({ ...active, msg: true, filter: true });
    }
    if (e.target.id === "no") {
      setActive({ ...active, msg: false, filter: false });
    }
    if (e.target.id === "yes") {
      dispatch(dogDelete(id));
      setActive({ ...active, msg: false, success: true, filter: true });
    }
  }

  React.useEffect(() => {
    dispatch(clearDetail());
    dispatch(showDetail(id));
  }, []);

  return (
    <>
      {err == "error" ? (
        <Error />
      ) : (
        <>
          {active.success && (
            <div className={D.confirmCont}>
              <Link to="/created">
                <h4 className={D.createdBtn}>Go to created dogs</h4>
              </Link>
              <Link to="/create">
                <h4 className={D.createBtn}>Create another dog</h4>
              </Link>

              <img className={D.confirmImg} src={success} alt="" />
            </div>
          )}
          {active.msg && (
            <div className={D.confirmCont}>
              <h1 className={D.ConfirmTitle}>Are you sure?</h1>
              <h4 id="yes" onClick={e => setMsg(e)} className={D.yes}>
                Yes
              </h4>
              <h4 id="no" onClick={e => setMsg(e)} className={D.no}>
                No
              </h4>
              <img className={D.confirmImg} src={confirm} alt="" />
            </div>
          )}
          <div className={D.popup}>
            {dog.length > 0 &&
              dog.map((el, i) => (
                <>
                  {active.edit && (
                    <>
                      <div key={i} className={D.editFormContainer}>
                        <img
                          id="exit"
                          className={D.exit}
                          src={exit}
                          alt=""
                          onClick={e => setMsg(e)}
                        />

                        <EditForm
                          name={el.name}
                          minYears={el.minYearsOfLife}
                          maxYears={el.maxYearsOfLife}
                          minWeight={el.minWeight}
                          maxWeight={el.maxWeight}
                          minHeight={el.minHeight}
                          maxHeight={el.maxHeight}
                        />
                      </div>
                      <div className={D.editBackground}></div>
                    </>
                  )}
                </>
              ))}
          </div>

          <div className={D.container}>
            {active.filter && <div className={D.filter}></div>}
            {dog.length > 0 ? (
              dog.map(el => (
                <div key={el.id}>
                  <div key={el.id} className={D.imageContainer}>
                    <img
                      key={el.id}
                      src={el.image}
                      className={D.image}
                      alt=""
                    />
                  </div>
                  <div className={D.tempContainer}>
                    {lang === "English" ? (
                      <h4 className={D.tempTitle}>Temperament</h4>
                    ) : (
                      <h4 className={D.tempTitleEsp}>Temperamento</h4>
                    )}
                    <div className={D.hashtags}>
                      <p className={D.temperament}>
                        {typeof el.temperaments[0] === "string"
                          ? el.temperaments.map((el, i) => (
                              <span key={i}>
                                {el}
                                {dog[0].temperaments.length - 1 === i ? null : (
                                  <span>, </span>
                                )}
                              </span>
                            ))
                          : el.temperaments.map((el, i) => (
                              <span key={i}> {el.name}, </span>
                            ))}
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
                      {typeof el.id === "string" && (
                        <>
                          <div className={D.btnContainer}>
                            <label
                              id="edit"
                              className={D.editCont}
                              onClick={e => setMsg(e)}
                            >
                              {" "}
                              <img className={D.editBtn} src={editBtn} alt="" />
                              Edit dog
                            </label>

                            <label
                              id="delete"
                              onClick={e => setMsg(e)}
                              className={D.deleteCont}
                            >
                              <img
                                className={D.deleteIcon}
                                src={deleteIcon}
                                alt=""
                              />
                              Delete
                            </label>
                          </div>
                        </>
                      )}
                      <p className={D.name}>{el.name}</p>

                      <h4 className={D.averages}>Averages</h4>
                      <p className={D.yearsTitle}>Years of life:</p>
                      <p className={D.years}>
                        {el.minYearsOfLife && el.maxYearsOfLife
                          ? el.minYearsOfLife +
                            "-" +
                            el.maxYearsOfLife +
                            " years"
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
                      <p className={D.yearsEsp}>
                        {el.minYearsOfLife && el.maxYearsOfLife
                          ? el.minYearsOfLife +
                            "-" +
                            el.maxYearsOfLife +
                            " años"
                          : el.minYearsOfLife + " años"}
                      </p>
                      <p className={D.weightTitle}>Peso:</p>
                      <p className={D.weightEsp}>
                        {el.minWeight && el.maxWeight
                          ? el.minWeight + "-" + el.maxWeight + " libras"
                          : el.minWeight + " libras"}
                      </p>

                      <p className={D.heightTitle}>Altura:</p>
                      <p className={D.heightEsp}>
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
        </>
      )}
    </>
  );
}
