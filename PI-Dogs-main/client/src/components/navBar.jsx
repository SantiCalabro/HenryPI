import React from "react";
import N from "../styles/navBar.module.css";
import Logo from "../statics/Logo.png";
import { Link } from "react-router-dom";
import Linkedin from "../statics/linkedin.png";
import Github from "../statics/github.png";
import { setLanguage } from "../redux/actions";
import { useSelector, useDispatch } from "react-redux";

export default function NavBar() {
  const lang = useSelector(state => state.language);
  const dispatch = useDispatch();

  const setLang = e => {
    dispatch(setLanguage(e.target.innerText));
  };
  return (
    <div>
      <div className={N.container}>
        <Link to="/home">
          <img src={Logo} className={N.logo} alt="" />
        </Link>

        <ul className={N.btnContainer}>
          <Link to="/created" style={{ textDecoration: "none" }}>
            {lang === "English" ? (
              <li className={N.created}>Created dogs</li>
            ) : (
              <li className={N.created}>Perros creados</li>
            )}
          </Link>
          <Link to="/create" style={{ textDecoration: "none" }}>
            {lang === "English" ? (
              <li className={N.created}>Upload a dog</li>
            ) : (
              <li className={N.created}>Crea un perro</li>
            )}
          </Link>
        </ul>
        <li className={N.language} onClick={e => setLang(e)}>
          {lang === "English" ? "Español" : "English"}
        </li>

        <div className={N.contact}>
          <a
            href="https://www.linkedin.com/in/santiago-calabr%C3%B3-5b7354219/"
            target="_blank"
          >
            <img className={N.linkedin} src={Linkedin} alt="" />
          </a>
          <a href="https://github.com/SantiCalabro" target="_blank">
            <img className={N.github} src={Github} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
