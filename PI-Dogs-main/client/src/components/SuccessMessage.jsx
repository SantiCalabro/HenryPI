import React from "react";
import successPic from "../statics/success.png";
import { Link } from "react-router-dom";
import S from "../styles/Success.module.css";
import { useState } from "react";

export default function SuccessMessage() {
  const [active, setActive] = useState(false);

  const setHide = () => {
    setActive(true);
  };

  return (
    <>
      {active === false && (
        <div className={S.container}>
          <Link to="/home">
            <p className={S.createdBtn}>Visit your new friends</p>
          </Link>
          <p onClick={() => setHide()} className={S.btn}>
            Create other dog
          </p>
          <img className={S.pic} src={successPic} alt="" />
          <div className={S.full}></div>
        </div>
      )}
    </>
  );
}
