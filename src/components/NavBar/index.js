import React from "react";
import { NavLink } from "react-router-dom";
import { MdHome, MdFavorite } from "react-icons/md";

const NavBar = () => {
  return (
    <nav className="navBar bottom">
      <NavLink exact to="/" activeClassName="active">
        <MdHome />
        <span>Garagem</span>
      </NavLink>
      <NavLink exact to="/desejos" activeClassName="active">
        <MdFavorite />
        <span>Desejos</span>
      </NavLink>
    </nav>
  );
};

export default NavBar;
