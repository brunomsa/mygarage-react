import React, { useState } from "react";
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

  const handleAddCar = (car) => setCars([...cars, car]);

  const handleDeleteCar = (id) => setCars(cars.filter((car) => car.id !== id));

  const handleChangeCar = (car, id) => {
    const i = cars.findIndex((c) => c.id === id);
    const newList = [...cars];
    newList[i] = car;
    setCars(newList);
  };

  const handleAddWish = (wish) => setWishes([...wishes, wish]);

  const handleDeleteWish = (id) =>
    setWishes(wishes.filter((wish) => wish.id !== id));

  const handleChangeWish = (wish, id) => {
    const i = wishes.findIndex((w) => w.id === id);
    const newList = [...wishes];
    newList[i] = wish;
    setWishes(newList);
  };

  return (
    <div className="App">
      <Router>
        <MainRoutes
          cars={cars}
          wishes={wishes}
          onAddCar={handleAddCar}
          onDeleteCar={handleDeleteCar}
          onChangeCar={handleChangeCar}
          onAddWish={handleAddWish}
          onDeleteWish={handleDeleteWish}
          onChangeWish={handleChangeWish}
        />
        <NavBar />
      </Router>
    </div>
  );
}

export default App;
