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
  const { cars, wishes, onAddCar, onDeleteCar, onAddWish } = props;
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
      <Route
        path="/carro/:id"
        element={<ViewCarPage cars={cars} onDelete={onDeleteCar} />}
      />
    </Routes>
  );
};

export default MainRoutes;
