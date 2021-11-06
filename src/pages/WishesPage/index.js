import React from "react";
import { Header, EmptyResource } from "../../components";

const WishesPage = (props) => {
  return (
    <>
      <Header
        title="Desejos"
        subtitle="Lista de"
        onAdd={() => console.log("Desejos")}
      />
      {props.wishes.length > 0 && <div>oi</div>}
      {props.wishes.length <= 0 && <EmptyResource icon="wish" />}
    </>
  );
};

export default WishesPage;
