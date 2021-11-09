import React from "react";

import {
  CarsPage,
  WishesPage,
  AddCarPage,
  AddWishPage,
  ViewCarPage,
} from "./pages";

import { Routes, Route } from "react-router-dom";

const MainRoutes = (props) => {
  const { cars, wishes, onAddCar, onAddWish } = props;
  return (
    <Routes>
      <Route path="/" element={<CarsPage cars={cars} />} />
      <Route path="/desejos" element={<WishesPage wishes={wishes} />} />
      <Route
        path="/adcionar/carro"
        element={<AddCarPage onSubmit={onAddCar} />}
      />
      <Route
        path="/adcionar/desejo"
        element={<AddWishPage onSubmit={onAddWish} />}
      />
      <Route path="/carro/:id" element={<ViewCarPage cars={cars} />} />
    </Routes>
  );
};

export default MainRoutes;
