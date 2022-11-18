import React from "react";
import successPic from "../statics/successUpdate.png";
import { Link } from "react-router-dom";
import SU from "../styles/SuccessUpdate.module.css";
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
        <div className={SU.container}>
          {lang === "English" ? (
            <>
              <Link to="/created">
                <p className={SU.createdBtn}>Visit your new friends</p>
              </Link>
              <Link to="/create">
                <p onClick={() => setHide()} className={SU.btn}>
                  Create other dog
                </p>
              </Link>{" "}
            </>
          ) : (
            <>
              <Link to="/created">
                <p className={SU.createdBtn}>Visita a tus nuevos amigos</p>
              </Link>
              <Link to="/create">
                <p onClick={() => setHide()} className={SU.btn}>
                  Crea otro perro
                </p>
              </Link>{" "}
            </>
          )}
          <img className={SU.pic} src={successPic} alt="" />
          <div className={SU.full}></div>
        </div>
      )}
    </>
  );
}
