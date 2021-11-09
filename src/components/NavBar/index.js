import React from "react";
import { NavLink } from "react-router-dom";
import { MdHome, MdFavorite } from "react-icons/md";

const NavBar = () => {
  return (
    <nav className="navBar bottom primary">
      <NavLink to="/" activeclassname="active">
        <MdHome />
        <span>Garagem</span>
      </NavLink>
      <NavLink to="/desejos" activeclassname="active">
        <MdFavorite />
        <span>Desejos</span>
      </NavLink>
    </nav>
  );
};

export default NavBar;
