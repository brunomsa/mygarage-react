import React, { useState, useEffect } from "react";
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
  const { cars, onChange, onDelete } = props;

  const i = cars.findIndex((x) => x.id === id);
  const car = cars[i];

  const [showEdit, setShowEdit] = useState(false);
  const [carFavorite, setCarFavorite] = useState(car.favorite);
  const [background, setBackground] = useState();

  const handlePreviewFile = (image) => {
    if (image) {
      let reader = new FileReader();

      reader.onloadend = () => {
        car.file = reader.result;
        setBackground(`${reader.result}`);
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

  const handleCarFavorite = (boolean) => {
    car.favorite = boolean;
    setCarFavorite(boolean);
  };

  const handleChange = (car) => {
    setShowEdit(false);
    onChange(car, car.id);
  };

  return (
    <section
      id="detailsCar"
      className={`component ${showEdit ? "editMode" : ""}`}
    >
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
          {({ values, setFieldValue, handleReset }) => (
            <Form>
              <div
                className="detailsCarHeader"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url(${background})`,
                }}
              >
                <div className="detailsCarControls">
                  <Link to="/">
                    <MdArrowBack />
                  </Link>
                  <div>
                    {!showEdit ? (
                      <MdEdit onClick={() => setShowEdit(true)} />
                    ) : (
                      <>
                        <MdClose
                          onClick={() => {
                            handleReset();
                            setShowEdit(false);
                          }}
                          className="btnCancelEdit"
                        />
                        <MdDone
                          type="submit"
                          onClick={() => handleChange(values)}
                        />
                      </>
                    )}
                  </div>
                </div>
                <div className="detailsCarTitle">
                  <div>
                    <Field
                      type="text"
                      className="detailsCarYear"
                      autoComplete="off"
                      readOnly={showEdit ? false : true}
                      name="year"
                    />
                    <Field
                      type="text"
                      className="detailsCarName"
                      autoComplete="off"
                      readOnly={showEdit ? false : true}
                      name="name"
                    />
                  </div>
                  {carFavorite ? (
                    <MdStar onClick={() => handleCarFavorite(false)} />
                  ) : (
                    <MdStarBorder onClick={() => handleCarFavorite(true)} />
                  )}
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
                      type="text"
                      className="attachmentValue"
                      autoComplete="off"
                      readOnly={showEdit ? false : true}
                      name="km"
                    />
                  </div>
                  <div>
                    <div className="attachmentName">
                      <MdSettingsInputComponent />
                      <div>Câmbio</div>
                    </div>
                    <Field
                      type="text"
                      className="attachmentValue"
                      autoComplete="off"
                      readOnly={showEdit ? false : true}
                      name="march"
                    />
                  </div>
                  <div>
                    <div className="attachmentName">
                      <MdSettings />
                      <div>Motor</div>
                    </div>
                    <Field
                      type="text"
                      className="attachmentValue"
                      autoComplete="off"
                      readOnly={showEdit ? false : true}
                      name="engine"
                    />
                  </div>
                  <div>
                    <div className="attachmentName">
                      <MdLocalGasStation />
                      <div>Combustível</div>
                    </div>
                    <Field
                      type="text"
                      className="attachmentValue"
                      autoComplete="off"
                      readOnly={showEdit ? false : true}
                      name="fuel"
                    />
                  </div>
                  <div>
                    <div className="attachmentName">
                      <MdOfflineBolt />
                      <div>Potência</div>
                    </div>
                    <Field
                      type="text"
                      className="attachmentValue"
                      autoComplete="off"
                      readOnly={showEdit ? false : true}
                      name="power"
                    />
                  </div>
                  <div>
                    <div className="attachmentName">
                      <MdAltRoute />
                      <div>Tração</div>
                    </div>
                    <Field
                      className="attachmentValue"
                      type="text"
                      autoComplete="off"
                      readOnly={showEdit ? false : true}
                      name="traction"
                    />
                  </div>
                </div>
                <div className="detailsCarDescription">
                  <h2>Descrição</h2>
                  <Field
                    className="inputEditDescription"
                    rows="2"
                    readOnly={showEdit ? false : true}
                    as="textarea"
                    name="description"
                  />
                </div>
                {showEdit && (
                  <div className="detailsCarImage ">
                    <label htmlFor="image">
                      <h2>Plano de fundo</h2>
                    </label>
                    <input
                      id="image"
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
                      <label htmlFor="image">
                        <MdFileUpload className="iconUpload" />
                      </label>
                      <label htmlFor="image">{values.filename}</label>
                    </div>
                  </div>
                )}
                <div className="buttonGroup">
                  <Link to="/" className="button">
                    <button
                      className="button btnDelete"
                      onClick={() => onDelete(car.id)}
                    >
                      Apagar carro
                    </button>
                  </Link>
                  {showEdit && (
                    <button
                      className="button primary"
                      onClick={() => handleChange(values)}
                    >
                      Alterar carro
                    </button>
                  )}
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
