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
    <div className="card">
      <h2>{char.name}</h2>
      <img src={char.image} />
      <div >
        <p>Status: {char.status}</p>
        <p>Especie: {char.species}</p>
        <p>Genero: {char.gender}</p>
      </div>
    </div>
  );
};
export default Personaje;
