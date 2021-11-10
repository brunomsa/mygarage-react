import React, { useEffect, useState } from "react";
import {
  MdSpeed,
  MdSettingsInputComponent,
  MdSettings,
  MdStars,
} from "react-icons/md";

const Car = (props) => {
  const { car, cars } = props;
  const [background, setBackground] = useState();

  const handlePreviewFile = (image) => {
    if (image) {
      let reader = new FileReader();

      reader.onloadend = () => {
        car.file = reader.result;
        setBackground(`${reader.result}`);
        localStorage.setItem("cars", JSON.stringify(cars));
      };

      //Leitor de arquivos para dataUrl.
      reader.readAsDataURL(image);
    } else {
      handleRandomFile();
    }
  };

  const handleRandomFile = () => {
    let random = Math.floor(Math.random() * 3) + 1;
    car.file = `../../../assets/img/placeholder_car${random}.png`;
    setBackground(`../../../assets/img/placeholder_car${random}.png`);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => handlePreviewFile(car.image), [car.image]);

  return (
    <li
      className="car"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url(${background})`,
      }}
    >
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
        {car.favorite === true && <MdStars className="carIconFav" />}
      </div>
    </li>
  );
};

export default Car;
