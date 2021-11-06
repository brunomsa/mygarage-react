import React from "react";
import { MdAdd } from "react-icons/md";

import { NavLink } from "react-router-dom";

const Header = (props) => {
  const { title, subtitle, path } = props;
  return (
    <div className="componentHeader">
      <h1 className="componentTitle">
        <div>{subtitle}</div>
        {title}
      </h1>
      <NavLink to={path}>
        <MdAdd className="addIcon" />
      </NavLink>
    </div>
  );
};

export default Header;
