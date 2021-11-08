import React from "react";
import { Header, EmptyResource, WishesList } from "../../components";

const WishesPage = (props) => {
  const { wishes } = props;
  return (
    <section id="wishlist" className="component">
      <Header
        title="Desejos"
        subtitle="Lista de"
        action="add"
        path="/adcionar/desejo"
      />
      {wishes.length > 0 ? (
        <WishesList wishes={wishes} />
      ) : (
        <EmptyResource icon="wish" />
      )}
    </section>
  );
};

export default WishesPage;
