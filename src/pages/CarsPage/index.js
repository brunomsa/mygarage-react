import React from "react";
import { Header, EmptyResource, CarsList } from "../../components";

const CarsPage = (props) => {
  return (
    <>
      <Header
        title="Garagem"
        subtitle="Minha"
        onAdd={() => console.log("Garagem")}
      />
      {props.cars.length > 0 && <CarsList />}
      {props.cars.length <= 0 && <EmptyResource icon="car" />}
    </>
  );
};

export default CarsPage;
