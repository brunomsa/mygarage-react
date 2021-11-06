import React from "react";
import { Header, EmptyResource, CarsList, NavBar } from "../../components";

const CarsPage = (props) => {
  const { cars } = props;

  return (
    <section id="garage" className="component">
      <Header title="Garagem" subtitle="Minha" path="/adcionar/carro" />
      {cars.length > 0 ? (
        <CarsList cars={cars} />
      ) : (
        <EmptyResource icon="car" />
      )}
      <NavBar />
    </section>
  );
};

export default CarsPage;
