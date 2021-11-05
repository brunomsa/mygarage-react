import React from "react";

import { NavBar, Garage, Wishlist } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Garage />
          </Route>
          <Route path="/desejos">
            <Wishlist />
          </Route>
        </Switch>
        <NavBar />
      </Router>
    </div>
  );
}

export default App;
