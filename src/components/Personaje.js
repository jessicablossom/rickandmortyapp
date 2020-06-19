import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

const Personaje = () => {
  const params = useParams();
  const [char, setChar] = useState({});
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${params.id}`)
      .then((data) => {
        return data.json();
      })
      .then((dataJson) => {
        setChar(dataJson);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h3>Nombre: {char.name}</h3>
      <img src={char.image} />
    <p>Status: {char.status}</p>
    <p>Especie: {char.species}</p>
    <p>Genero: {char.gender}</p>
    </div>
  );
};
export default Personaje;
