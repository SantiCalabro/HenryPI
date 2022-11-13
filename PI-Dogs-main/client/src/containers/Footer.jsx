import React from "react";
import Foo from "../styles/Footer.module.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <hr className={Foo.line} />

      <div className={Foo.container}>
        <div className={Foo.dataContainer}>
          <div className={Foo.project}>
            <Link style={{ textDecoration: "none" }} to={"/home"}>
              <h3>Home</h3>
            </Link>
            <Link style={{ textDecoration: "none" }} to={"/create"}>
              <h3>Upload a dog</h3>
            </Link>
            <Link style={{ textDecoration: "none" }} to={"/created"}>
              <h3>Created dogs</h3>
            </Link>
          </div>
          <div className={Foo.about}>
            <p className={Foo.description}>
              This is a project for study purposes, for the HENRY bootcamp Lab
              instance
            </p>
            <p className={Foo.description}>
              Tecnologies used: React, Redux, Express, SQL and pure CSS.
            </p>
            <p className={Foo.created}>
              Created by Santiago Calabró, Full Stack Developer and Graphic
              Designer.
            </p>
          </div>
        </div>
        <div className={Foo.contact}>
          <a
            href="https://www.linkedin.com/in/santiago-calabr%C3%B3-5b7354219/"
            target="_blank"
          >
            Contact me!
          </a>
        </div>
      </div>
    </>
  );
}
