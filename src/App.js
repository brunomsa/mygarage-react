import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import MainRoutes from "./routes";
import { NavBar } from "./components";

function App() {
  let storageCars = JSON.parse(localStorage.getItem("cars"));
  if (!storageCars) storageCars = [];
  const [cars, setCars] = useState(storageCars);

  let storageWishes = JSON.parse(localStorage.getItem("wishes"));
  if (!storageWishes) storageWishes = [];
  const [wishes, setWishes] = useState(storageWishes);

  const handleAddCars = (car) => setCars([...cars, car]);

  const handleDeleteCar = (id) => setCars(cars.filter((car) => car.id !== id));

  const handleChangeCar = (c, id) => {
    const i = cars.findIndex((car) => car.id === id);
    // console.log(cars[i]);
    const newList = [...cars];
    newList[i] = c;
    setCars(newList);
  };

  const handleAddWishes = (w) => setWishes([...wishes, w]);

  useEffect(() => console.log(cars), [cars]);

  return (
    <div className="App">
      <Router>
        <MainRoutes
          cars={cars}
          wishes={wishes}
          onAddCar={handleAddCars}
          onDeleteCar={handleDeleteCar}
          onChangeCar={handleChangeCar}
          onAddWish={handleAddWishes}
        />
        <NavBar />
      </Router>
    </div>
  );
}

export default App;
