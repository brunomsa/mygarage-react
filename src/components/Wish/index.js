import React from "react";

const Wish = (props) => {
  const { wish } = props;

  let now = new Date();
  let lastUpdate = new Date(wish.lastUpdate);
  let diff = Math.abs(now.getTime() - lastUpdate.getTime()) - 1;

  let days = Math.ceil(diff / (1000 * 60 * 60 * 24)) - 1;

  if (days === 1) {
    days = "1 dia atrás";
  } else if (days > 1) {
    days = days + " dias atrás";
  } else {
    days = "Hoje";
  }

  let random = Math.floor(Math.random() * 3) + 1;
  const iBackground = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url("../../../assets/img/placeholder_car${random}.png")`,
  };

  return (
    <li className="wishCars">
      <div className="wishCarsImg" style={iBackground}></div>
      <div className="wishCarsAbout">
        <div className="wishCarsYear">{wish.year}</div>
        <h3 className="wishCarsName">{wish.name}</h3>
        <div className="lastUpdate">
          Última atualização: <br />
          {days}
        </div>
      </div>
      <div className="wishCarsPrice">
        <div className="">{wish.price}</div>
      </div>
    </li>
  );
};

export default Wish;
