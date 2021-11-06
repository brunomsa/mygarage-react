import React, { useState } from "react";

import { CarsPage, WishesPage, AddCarPage, AddWishPage } from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  let storageCars = JSON.parse(localStorage.getItem("arrayCars"));
  if (!storageCars)
    storageCars = [
      {
        id: 1,
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
        id: 2,
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
  if (!storageWishes) storageWishes = [];
  const [arrayWishes, setArrayWishes] = useState(storageWishes);

  const addCars = (t) => setArrayCars([...arrayCars, t]);
  const addWishes = (w) => setArrayWishes([...arrayWishes, w]);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <CarsPage cars={arrayCars} onSubmit={addCars} />
          </Route>
          <Route path="/desejos">
            <WishesPage wishes={arrayWishes} onSubmit={addWishes} />
          </Route>
          <Route path="/adcionar/carro">
            <AddCarPage />
          </Route>
          <Route path="/adcionar/desejo">
            <AddWishPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
