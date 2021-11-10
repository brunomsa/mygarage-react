import React from "react";
import { Link } from "react-router-dom";

import { Wish } from "../../components";

const WishesList = (props) => {
  const { wishes } = props;

  return (
    <div className="componentContent">
      <ul>
        {wishes.map((w) => (
          <Link key={w.id} to={`/desejo/${w.id}`}>
            <Wish key={w.id} wish={w} />
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default WishesList;
