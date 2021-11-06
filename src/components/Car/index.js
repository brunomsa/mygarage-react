import React from "react";
import {
  MdSpeed,
  MdSettingsInputComponent,
  MdSettings,
  MdStars,
} from "react-icons/md";

const Car = (props) => {
  const { car } = props;

  let random = Math.floor(Math.random() * 3) + 1;
  const iBackground = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url("../../../assets/img/placeholder_car${random}.png")`,
  };

  return (
    <li className="car" style={iBackground}>
      <div className="carYear">{car.year}</div>
      <h3 className="carName">{car.name}</h3>
      <div className="carAttributes">
        <div className="carAttachmets">
          <div>
            <div className="attachmentName">
              <MdSpeed />
              <div>Km</div>
            </div>
            <div className="attachmentValue">{car.km}</div>
          </div>
          <div>
            <div className="attachmentName">
              <MdSettingsInputComponent />
              <div>Câmbio</div>
            </div>
            <div className="attachmentValue">{car.march}</div>
          </div>
          <div>
            <div className="attachmentName">
              <MdSettings />
              <div>Motor</div>
            </div>
            <div className="attachmentValue">{car.engine}</div>
          </div>
        </div>
        <MdStars className="carIconFav" />
      </div>
    </li>
  );
};

export default Car;
