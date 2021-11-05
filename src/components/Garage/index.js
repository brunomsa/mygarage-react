import React from "react";
import { Header } from "../../components";

const Garage = () => {
  return (
    <Header
      title="Garagem"
      subtitle="Minha"
      onAdd={() => console.log("Garagem")}
    />
  );
};

export default Garage;
