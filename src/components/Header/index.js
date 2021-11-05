import React from "react";
import { MdAdd } from "react-icons/md";

const Header = (props) => {
  return (
    <header className="componentHeader">
      <h1 className="componentTitle">
        <div>{props.subtitle}</div>
        {props.title}
      </h1>
      <MdAdd className="addIcon" onClick={props.onAdd} />
    </header>
  );
};

export default Header;
