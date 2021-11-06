import React, { useEffect, useState } from "react";

import { Car } from "../../components";

const CarsList = (props) => {
  const { cars } = props;
  const [arrayFavCars, setArrayFavCars] = useState([]);

  useEffect(() => {
    setArrayFavCars(() => cars.filter((c) => c.favorite === true));
  }, [cars]);

  const showFavList = () => {
    return (
      <ul id="favCars">
        <h2>{cars.length === arrayFavCars.length ? "Todos" : "Favoritos"}</h2>
        {arrayFavCars.map((c) => (
          <Car key={c.id} car={c} />
        ))}
      </ul>
    );
  };

  const showCarsList = () => {
    return (
      <ul id="allCars">
        <h2>{arrayFavCars.length > 0 ? "Outros" : "Todos"}</h2>
        {cars.map((c) => (
          <Car key={c.id} car={c} />
        ))}
      </ul>
    );
  };

  return (
    <div className="componentContent">
      {arrayFavCars.length > 0 && showFavList()}
      {cars.length !== arrayFavCars.length && showCarsList()}
    </div>
  );
};

export default CarsList;
