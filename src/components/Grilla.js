import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Grilla = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((data) => data.json())
      .then((dataJson) => setCharacters(dataJson.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="lista">
      {characters.map((char) => {
        return (
          <Link key={char.id} to={`/char/${char.id}`}>
            <div className="personaje">
            <p>• {char.name}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Grilla;
