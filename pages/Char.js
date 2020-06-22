import React from "react";
import Personaje from "../src/components/Personaje";
import {
  Link
} from "react-router-dom";

const Char = () => (
  <div className="container">
    <Link to="/personajes">Volver al listado</Link>
    <Personaje />
    <p> Anterior | Siguiente </p>
  </div>
);

export default Char;
