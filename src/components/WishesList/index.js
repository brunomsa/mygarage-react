import React, { useState } from "react";
import { Wish } from "../../components";

const WishesList = (props) => {
  const { wishes } = props;
  const [arrayWishes, setArrayWishes] = useState([]);

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
