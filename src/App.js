import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import MainRoutes from "./routes";
import { NavBar } from "./components";

function App() {
  let storageCars = JSON.parse(localStorage.getItem("cars"));
  if (!storageCars)
    storageCars = [
      {
        id: "a",
        name: "Ford Ka",
        year: "2012",
        km: "68.000",
        march: "Manual",
        engine: "1.0",
        fuel: "Flex",
        power: "150Cv",
        traction: "Dianteira",
        description: "Carro para uso diário",
        favorite: true,
      },
      {
        id: "b",
        name: "Ford Ka",
        year: "2012",
        km: "68.000",
        march: "Manual",
        engine: "1.0",
        fuel: "Flex",
        power: "150Cv",
        tractio: "Dianteira",
        description: "Carro para uso diário",
        favorite: false,
      },
    ];
  const [cars, setCars] = useState(storageCars);

  let storageWishes = JSON.parse(localStorage.getItem("wishes"));
  if (!storageWishes)
    storageWishes = [
      {
        id: 1,
        name: "BMW",
        year: "2017",
        price: "RS 200.000",
        lastUpdate: new Date(),
      },
      {
        id: 2,
        name: "BMW",
        year: "2017",
        price: "RS 200.000",
        lastUpdate: new Date(),
      },
    ];
  const [wishes, setWishes] = useState(storageWishes);

  const handleAddCars = (c) => setCars([...cars, c]);

  const handleDeleteCar = (c) => setCars(cars.filter((car) => car.id !== c));

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
          onAddWish={handleAddWishes}
        />
        <NavBar />
      </Router>
    </div>
  );
}

export default App;
