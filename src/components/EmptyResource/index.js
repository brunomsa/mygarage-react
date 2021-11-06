import React from "react";
import { MdDirectionsCar, MdLightbulb } from "react-icons/md";

const EmptyResource = (props) => {
  return (
    <div className="componentContent">
      <div id="blank">
        <div>
          {props.icon === "car" && <MdDirectionsCar />}
          {props.icon === "wish" && <MdLightbulb />}
          <p>Nenhum carro adcionado</p>
        </div>
      </div>
    </div>
  );
};

export default EmptyResource;
