import React from "react";
import { Header, EmptyResource, WishesList, NavBar } from "../../components";

const WishesPage = (props) => {
  const { wishes } = props;
  return (
    <>
      <Header title="Desejos" subtitle="Lista de" path="/adcionar/desejo" />
      {wishes.length > 0 && <WishesList />}
      {wishes.length <= 0 && <EmptyResource icon="wish" />}
      <NavBar />
    </>
  );
};

export default WishesPage;
