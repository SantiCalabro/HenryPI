import React from "react";
import H from "../styles/HeaderCreate.module.css";
import { useSelector } from "react-redux";

export default function CreatedDog(props) {
  const lang = useSelector(state => state.language);
  return (
    <div>
      <hr />
      {lang === "English" ? (
        <>
          <div className={H.container}>
            <h1>Upload your buddy!</h1>
            <p className={H.subtitle}>
              Let the universe know who your best friend is
            </p>
          </div>
        </>
      ) : (
        <>
          <div className={H.container}>
            <h1>Sube tu perro a la web!</h1>
            <p className={H.subtitle}>
              Haz que el universo conozca a tu mejor amigo
            </p>
          </div>
        </>
      )}
    </div>
  );
}
