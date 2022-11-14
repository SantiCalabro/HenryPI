import React from "react";
import N from "../styles/navBar.module.css";
import Logo from "../statics/Logo.png";
import { Link } from "react-router-dom";
import Linkedin from "../statics/linkedin.png";
import Github from "../statics/github.png";

export default function NavBar() {
  return (
    <div>
      <div className={N.container}>
        <Link to="/home">
          <img src={Logo} className={N.logo} alt="" />
        </Link>
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
