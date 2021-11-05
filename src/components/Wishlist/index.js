import React from "react";
import { Header } from "../../components";

const Wishlist = () => {
  return (
    <Header
      title="Desejos"
      subtitle="Lista de"
      onAdd={() => console.log("Desejos")}
    />
  );
};

export default Wishlist;
