import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import {
  MdArrowBack,
  MdSpeed,
  MdSettingsInputComponent,
  MdSettings,
  MdEdit,
  MdClose,
  MdDone,
  MdStarBorder,
  MdLocalGasStation,
  MdOfflineBolt,
  MdFileUpload,
  MdAltRoute,
  MdStar,
} from "react-icons/md";
import { Formik, Form, Field, ErrorMessage } from "formik";

const ViewCarPage = (props) => {
  const { id } = useParams();
  const { cars, onDelete } = props;

  let i = cars.findIndex((x) => x.id === id);
  const car = cars[i];

  return (
    <section id="detailsCar" className="component">
      <div className="componentContent">
        <Formik
          initialValues={{
            id: car.id,
            name: car.name,
            year: car.year,
            km: car.km,
            march: car.march,
            engine: car.engine,
            fuel: car.fuel,
            power: car.power,
            traction: car.traction,
            description: car.description,
            image: car.image,
            file: car.file,
            filename: car.filename,
            favorite: car.favorite,
          }}
        >
          {({ values, setFieldValue }) => (
            <Form id="formEditCar">
              <div
                className="detailsCarHeader"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url(${car.file})`,
                }}
              >
                <div className="detailsCarControls">
                  <Link to="/">
                    <MdArrowBack />
                  </Link>
                  <div>
                    <MdEdit />
                    <MdClose className="btnCancelEdit hidden" />
                    <MdDone className="hidden" />
                  </div>
                </div>
                <div className="detailsCarTitle">
                  <div>
                    <Field
                      id="inputEditYear"
                      type="text"
                      className="detailsCarYear"
                      autoComplete="off"
                      readOnly
                      name="year"
                    />
                    <Field
                      id="inputEditName"
                      type="text"
                      className="detailsCarName"
                      autoComplete="off"
                      readOnly
                      name="name"
                    />
                  </div>
                  {car.favorite ? <MdStar /> : <MdStarBorder />}
                </div>
              </div>
              <div className="detailsCarContent">
                <h2>Ficha Técninca</h2>
                <div className="detailsCarAttachmets">
                  <div>
                    <div className="attachmentName">
                      <MdSpeed />
                      <div>Km</div>
                    </div>
                    <Field
                      id="inputEditKm"
                      type="text"
                      className="attachmentValue"
                      autoComplete="off"
                      readOnly
                      name="km"
                    />
                  </div>
                  <div>
                    <div className="attachmentName">
                      <MdSettingsInputComponent />
                      <div>Câmbio</div>
                    </div>
                    <Field
                      id="inputEditMarch"
                      type="text"
                      className="attachmentValue"
                      autoComplete="off"
                      readOnly
                      name="march"
                    />
                  </div>
                  <div>
                    <div className="attachmentName">
                      <MdSettings />
                      <div>Motor</div>
                    </div>
                    <Field
                      id="inputEditEngine"
                      type="text"
                      className="attachmentValue"
                      autoComplete="off"
                      readOnly
                      name="engine"
                    />
                  </div>
                  <div>
                    <div className="attachmentName">
                      <MdLocalGasStation />
                      <div>Combustível</div>
                    </div>
                    <Field
                      id="inputEditFuel"
                      type="text"
                      className="attachmentValue"
                      autoComplete="off"
                      readOnly
                      name="fuel"
                    />
                  </div>
                  <div>
                    <div className="attachmentName">
                      <MdOfflineBolt />
                      <div>Potência</div>
                    </div>
                    <Field
                      id="inputEditPower"
                      type="text"
                      className="attachmentValue"
                      autoComplete="off"
                      readOnly
                      name="power"
                    />
                  </div>
                  <div>
                    <div className="attachmentName">
                      <MdAltRoute />
                      <div>Tração</div>
                    </div>
                    <Field
                      id="inputEditTraction"
                      className="attachmentValue"
                      type="text"
                      autoComplete="off"
                      readOnly
                      name="traction"
                    />
                  </div>
                </div>
                <div className="detailsCarDescription">
                  <h2>Descrição</h2>
                  <Field
                    id="inputEditDescription"
                    rows="2"
                    readOnly
                    as="textarea"
                    name="description"
                  />
                </div>
                <div className="detailsCarImage hidden">
                  <label htmlFor="inputEditImage">
                    <h2>Plano de fundo</h2>
                  </label>
                  <input
                    id="inputEditImage"
                    type="file"
                    accept=".jpg, .jpeg, .png"
                    className="hidden"
                    onChange={(e) => {
                      setFieldValue("image", e.target.files[0]);
                      setFieldValue(
                        "filename",
                        e.target.files[0] ? e.target.files[0].name : ""
                      );
                    }}
                  />
                  <div>
                    <MdFileUpload className="iconUpload" />
                    <label
                      htmlFor="inputEditImage"
                      id="inputEditFilenameImage"
                    ></label>
                  </div>
                </div>
                <div className="buttonGroup">
                  <Link to="/" className="button">
                    <button
                      id="btnDeleteCar"
                      className="button btnDelete"
                      onClick={() => onDelete(car.id)}
                    >
                      Apagar carro
                    </button>
                  </Link>
                  <button id="btnDoneEdit2" className="button primary hidden">
                    Alterar carro
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default ViewCarPage;
