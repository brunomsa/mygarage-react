import React, { useState } from "react";

import { NavBar } from "./components";
import { CarsPage, WishesPage } from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  let storageCars = JSON.parse(localStorage.getItem("arrayCars"));
  if (!storageCars) storageCars = [];
  const [arrayCars, setArrayCars] = useState(storageCars);

  let storageWishes = JSON.parse(localStorage.getItem("arrayWishes"));
  if (!storageWishes) storageWishes = [];
  const [arrayWishes, setArrayWishes] = useState(storageWishes);

  const addCars = (t) => setArrayCars([...arrayCars, t]);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <CarsPage cars={arrayCars} onSubmit={addCars} />
          </Route>
          <Route path="/desejos">
            <WishesPage wishes={arrayWishes} />
          </Route>
        </Switch>
        <NavBar />
      </Router>
    </div>
  );
}

export default App;
