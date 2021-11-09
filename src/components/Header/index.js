import React from "react";
import { MdAdd, MdClose } from "react-icons/md";

import { Link } from "react-router-dom";

const Header = (props) => {
  const { title, subtitle, path, action } = props;

  const renderButton = () => {
    switch (action) {
      case "add":
        return <MdAdd className="addIcon" />;
      case "close":
        return <MdClose className="closeIcon" />;
      default:
        return "";
    }
  };
  return (
    <div className="componentHeader">
      <h1 className="componentTitle">
        {subtitle && <div>{subtitle}</div>}
        {title}
      </h1>
      <Link to={path}>{renderButton()}</Link>
    </div>
  );
};

export default Header;
