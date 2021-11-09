import React from "react";
import { Wish } from "../../components";

const WishesList = (props) => {
  const { wishes } = props;

  return (
    <div className="componentContent">
      <ul>
        {wishes.map((w) => (
          <Wish key={w.id} wish={w} />
        ))}
      </ul>
    </div>
  );
};

export default WishesList;
