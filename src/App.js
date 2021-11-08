import React, { useEffect, useState } from "react";

import { CarsPage, WishesPage, AddCarPage, AddWishPage } from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavBar } from "./components";

function App() {
  let storageCars = JSON.parse(localStorage.getItem("arrayCars"));
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
        tractio: "Dianteira",
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
  const [arrayCars, setArrayCars] = useState(storageCars);

  let storageWishes = JSON.parse(localStorage.getItem("arrayWishes"));
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
  const [arrayWishes, setArrayWishes] = useState(storageWishes);

  const handleAddCars = (t) => {
    // console.log(t);
    setArrayCars([...arrayCars, t]);
  };
  const handleAddWishes = (w) => setArrayWishes([...arrayWishes, w]);

  useEffect(() => console.log(arrayCars), [arrayCars]);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <CarsPage cars={arrayCars} />
          </Route>
          <Route path="/desejos">
            <WishesPage wishes={arrayWishes} onSubmit={handleAddWishes} />
          </Route>
          <Route path="/adcionar/carro">
            <AddCarPage onSubmit={handleAddCars} />
          </Route>
          <Route path="/adcionar/desejo">
            <AddWishPage />
          </Route>
        </Switch>
        <NavBar />
      </Router>
    </div>
  );
}

export default App;
