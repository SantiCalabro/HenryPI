import React from "react";
import successPic from "../statics/success.png";
import { Link } from "react-router-dom";
import S from "../styles/Success.module.css";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function SuccessMessage() {
  const [active, setActive] = useState(false);
  const lang = useSelector(state => state.language);

  const setHide = () => {
    setActive(true);
  };

  return (
    <>
      {active === false && (
        <div className={S.container}>
          {lang === "English" ? (
            <>
              <Link to="/created">
                <p className={S.createdBtn}>Visit your new friends</p>
              </Link>
              <Link to="/create">
                <p onClick={() => setHide()} className={S.btn}>
                  Create other dog
                </p>
              </Link>{" "}
            </>
          ) : (
            <>
              <Link to="/created">
                <p className={S.createdBtn}>Visita a tus nuevos amigos</p>
              </Link>
              <Link to="/create">
                <p onClick={() => setHide()} className={S.btn}>
                  Crea otro perro
                </p>
              </Link>{" "}
            </>
          )}
          <img className={S.pic} src={successPic} alt="" />
          <div className={S.full}></div>
        </div>
      )}
    </>
  );
}
