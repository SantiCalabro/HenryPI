import React from "react";
import { Link } from "react-router-dom";

export default function landingPage() {
  return (
    <div>
      <h1>DogFinder</h1>
      <p>Reencontrate con tu mascota</p>

      <Link to="/home">
        <button>Ingresar</button>
      </Link>
    </div>
  );
}
