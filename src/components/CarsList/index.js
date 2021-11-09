import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Car } from "../../components";

const CarsList = (props) => {
  const { cars } = props;
  const [arrayFavCars, setArrayFavCars] = useState([]);
  const [arrayOthrsCars, setArrayOthersCars] = useState([]);

  useEffect(() => {
    setArrayFavCars(() => cars.filter((c) => c.favorite === true));
    setArrayOthersCars(() => cars.filter((c) => c.favorite === false));
  }, [cars]);

  const handleShowFavList = () => {
    return (
      <ul id="favCars">
        <h2>{cars.length === arrayFavCars.length ? "Todos" : "Favoritos"}</h2>
        {arrayFavCars.map((c) => (
          <Link key={c.id} to={`/carro/${c.id}`}>
            <Car key={c.id} car={c} />
          </Link>
        ))}
      </ul>
    );
  };

  const handleShowCarsList = () => {
    return (
      <ul id="allCars">
        <h2>{arrayFavCars.length > 0 ? "Outros" : "Todos"}</h2>
        {arrayOthrsCars.map((c) => (
          <Link key={c.id} to={`/carro/${c.id}`}>
            <Car key={c.id} car={c} />
          </Link>
        ))}
      </ul>
    );
  };

  return (
    <div className="componentContent">
      {arrayFavCars.length > 0 && handleShowFavList()}
      {cars.length !== arrayFavCars.length && handleShowCarsList()}
    </div>
  );
};

export default CarsList;
