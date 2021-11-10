import React from "react";

import {
  CarsPage,
  WishesPage,
  AddCarPage,
  AddWishPage,
  ViewCarPage,
  ViewWishPage,
} from "./pages";

import { Routes, Route } from "react-router-dom";

const MainRoutes = (props) => {
  const {
    cars,
    wishes,
    onAddCar,
    onDeleteCar,
    onChangeCar,
    onAddWish,
    onDeleteWish,
    onChangeWish,
  } = props;
  return (
    <Routes>
      <Route path="/" element={<CarsPage cars={cars} />} />
      <Route path="/desejos" element={<WishesPage wishes={wishes} />} />
      <Route
        path="/adcionar/carro"
        element={<AddCarPage onSubmit={onAddCar} />}
      />
      <Route
        path="/carro/:id"
        element={
          <ViewCarPage
            cars={cars}
            onChange={onChangeCar}
            onDelete={onDeleteCar}
          />
        }
      />
      <Route
        path="/adcionar/desejo"
        element={<AddWishPage onSubmit={onAddWish} />}
      />
      <Route
        path="/desejo/:id"
        element={
          <ViewWishPage
            wishes={wishes}
            onChange={onChangeWish}
            onDelete={onDeleteWish}
          />
        }
      />
    </Routes>
  );
};

export default MainRoutes;
