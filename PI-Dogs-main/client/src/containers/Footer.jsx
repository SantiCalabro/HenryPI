import React from "react";
import Foo from "../styles/Footer.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Footer() {
  const lang = useSelector(state => state.language);
  return (
    <>
      <hr className={Foo.line} />

      <div className={Foo.container}>
        <div className={Foo.dataContainer}>
          <div className={Foo.project}>
            <Link style={{ textDecoration: "none" }} to={"/home"}>
              {lang === "English" ? <h3>Home</h3> : <h3>Inicio</h3>}
            </Link>
            <Link style={{ textDecoration: "none" }} to={"/create"}>
              {lang === "English" ? (
                <h3>Upload a dog</h3>
              ) : (
                <h3>Crea un perro</h3>
              )}
            </Link>
            <Link style={{ textDecoration: "none" }} to={"/created"}>
              {lang === "English" ? (
                <h3>Created dogs</h3>
              ) : (
                <h3>Perros creados</h3>
              )}
            </Link>
          </div>
          <div className={Foo.about}>
            {lang === "English" ? (
              <>
                <p className={Foo.description}>
                  This is a project for study purposes, for the HENRY bootcamp
                  Lab instance
                </p>
                <p className={Foo.description}>
                  Tecnologies used: React, Redux, Express, SQL and pure CSS.
                </p>
                <p className={Foo.created}>
                  Created by Santiago Calabró, Full Stack Developer and Graphic
                  Designer.
                </p>
              </>
            ) : (
              <>
                <p className={Foo.description}>
                  Este es un proyecto con propósitos de estudio, para la
                  instancia Lab del bootcamp HENRY
                </p>
                <p className={Foo.description}>
                  Tecnologías utilizadas: React, Redux, Express, SQL y CSS puro.
                </p>
                <p className={Foo.created}>
                  Creado por Santiago Calabró, Desarrollador Full Stack y
                  Diseñador en Comunicación Visual.
                </p>
              </>
            )}
          </div>
        </div>
        <div className={Foo.contact}>
          {lang === "English" ? (
            <a
              href="https://www.linkedin.com/in/santiago-calabr%C3%B3-5b7354219/"
              target="_blank"
            >
              Contact me!
            </a>
          ) : (
            <a
              href="https://www.linkedin.com/in/santiago-calabr%C3%B3-5b7354219/"
              target="_blank"
            >
              Contactame!
            </a>
          )}
        </div>
      </div>
    </>
  );
}
