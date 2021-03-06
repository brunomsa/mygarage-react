import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

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
import * as Yup from "yup";

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
            fuel: car.fuel || "N/A",
            power: car.power || "N/A",
            traction: car.traction || "N/A",
            description: car.description || "N/A",
            image: car.image,
            file: car.file,
            filename: car.filename,
            favorite: car.favorite,
          }}
          validationSchema={Yup.object({
            name: Yup.string()
              .max(19, "O n??mero m??ximo de caracteres ?? 19")
              .required("Campo obrigat??rio"),
            year: Yup.string()
              .max(4, "O n??mero m??ximo de caracteres ?? 4")
              .required("Campo obrigat??rio"),
            km: Yup.string()
              .max(11, "O n??mero m??ximo de caracteres ?? 11")
              .required("Campo obrigat??rio"),
            march: Yup.string()
              .max(11, "O n??mero m??ximo de caracteres ?? 11")
              .required("Campo obrigat??rio"),
            engine: Yup.string()
              .max(11, "O n??mero m??ximo de caracteres ?? 11")
              .required("Campo obrigat??rio"),
            fuel: Yup.string().max(11, "O n??mero m??ximo de caracteres ?? 11"),
            power: Yup.string().max(11, "O n??mero m??ximo de caracteres ?? 11"),
            traction: Yup.string().max(
              11,
              "O n??mero m??ximo de caracteres ?? 11"
            ),
            description: Yup.string().max(
              40,
              "O n??mero m??ximo de caracteres ?? 40"
            ),
          })}
        >
          {({ values, setFieldValue, handleReset, isValid }) => (
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
                          onClick={() => isValid && handleChange(values)}
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
                    <ErrorMessage name="year">
                      {(msg) => <div className="errorMsg">{msg}</div>}
                    </ErrorMessage>
                    <Field
                      type="text"
                      className="detailsCarName"
                      autoComplete="off"
                      readOnly={showEdit ? false : true}
                      name="name"
                    />
                    <ErrorMessage name="name">
                      {(msg) => <div className="errorMsg">{msg}</div>}
                    </ErrorMessage>
                  </div>
                  {carFavorite ? (
                    <MdStar onClick={() => handleCarFavorite(false)} />
                  ) : (
                    <MdStarBorder onClick={() => handleCarFavorite(true)} />
                  )}
                </div>
              </div>
              <div className="detailsCarContent">
                <h2>Ficha T??cninca</h2>
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
                    <ErrorMessage name="km">
                      {(msg) => <div className="errorMsg">{msg}</div>}
                    </ErrorMessage>
                  </div>
                  <div>
                    <div className="attachmentName">
                      <MdSettingsInputComponent />
                      <div>C??mbio</div>
                    </div>
                    <Field
                      type="text"
                      className="attachmentValue"
                      autoComplete="off"
                      readOnly={showEdit ? false : true}
                      name="march"
                    />
                    <ErrorMessage name="march">
                      {(msg) => <div className="errorMsg">{msg}</div>}
                    </ErrorMessage>
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
                    <ErrorMessage name="engine">
                      {(msg) => <div className="errorMsg">{msg}</div>}
                    </ErrorMessage>
                  </div>
                  <div>
                    <div className="attachmentName">
                      <MdLocalGasStation />
                      <div>Combust??vel</div>
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
                      <div>Pot??ncia</div>
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
                      <div>Tra????o</div>
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
                  <h2>Descri????o</h2>
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
                      {values.filename && (
                        <MdClose
                          className="iconDeleteUpload"
                          onClick={() => {
                            setFieldValue("image", undefined);
                            setFieldValue("filename", "");
                          }}
                        />
                      )}
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
                      disabled={!isValid}
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
