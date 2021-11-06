import React from "react";
import { MdDirectionsCar, MdLightbulb } from "react-icons/md";

const EmptyResource = (props) => {
  const { icon } = props;
  return (
    <div className="componentContent">
      <div id="blank">
        <div>
          {icon === "car" && (
            <>
              <MdDirectionsCar />
              <p>Nenhum carro adcionado</p>
            </>
          )}
          {icon === "wish" && (
            <>
              <MdLightbulb />
              <p>Nenhum desejo adcionado</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmptyResource;
