import React from "react";
import { MdFileUpload } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import uniqueId from "lodash/uniqueId";

import { Header } from "../../components";

const AddCarPage = (props) => {
  const { onSubmit } = props;
  return (
    <section id="includeCar" className="component">
      <Header title="Novo Carro" action="close" path="/" />
      <div className="componentContent">
        <Formik
          initialValues={{
            id: uniqueId(),
            carName: "",
            year: "",
            km: "",
            march: "",
            engine: "",
            fuel: "",
            power: "",
            traction: "",
            description: "",
            image: null,
            filename: "",
            favorite: false,
          }}
          validationSchema={Yup.object({
            carName: Yup.string().max(15, "Must be 15 characters or less"),
            // .required("Required"),
          })}
        >
          {({ values, setFieldValue }) => (
            <Form>
              <div className="field">
                <label htmlFor="carName">Nome:</label>
                <Field id="carName" name="carName" autoComplete="off" />
                <ErrorMessage name="carName" />
              </div>
              <div className="field">
                <label htmlFor="year">Ano:</label>
                <Field id="year" name="year" autoComplete="off" />
                <ErrorMessage name="year" />
              </div>
              <div className="field">
                <label htmlFor="km">Km:</label>
                <Field id="km" name="km" autoComplete="off" />
              </div>
              <div className="field">
                <label htmlFor="march">Câmbio:</label>
                <Field id="march" name="km" autoComplete="off" />
              </div>
              <div className="field">
                <label htmlFor="engine">Motor:</label>
                <Field id="engine" name="engine" autoComplete="off" />
              </div>
              <div className="field">
                <label htmlFor="fuel">Combustível:</label>
                <Field id="fuel" name="fuel" autoComplete="off" />
              </div>
              <div className="field">
                <label htmlFor="power">Potência:</label>
                <Field id="power" name="power" autoComplete="off" />
              </div>
              <div className="field">
                <label htmlFor="traction">Tração:</label>
                <Field id="traction" name="traction" autoComplete="off" />
              </div>
              <div className="field">
                <label htmlFor="description">Descrição:</label>
                <Field
                  id="description"
                  name="description"
                  as="textarea"
                  rows="3"
                  className="inputAddDescription"
                />
              </div>
              <div className="field upload">
                <label className="labelImage" htmlFor="image">
                  Plano de Fundo:
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
                  <label htmlFor="image" className="iconUpload">
                    <MdFileUpload />
                  </label>
                  <label htmlFor="image" id="inputAddFilenameImage">
                    {values.filename}
                  </label>
                </div>
              </div>
              <div className="field fav end">
                <label htmlFor="favorite">Marcar como favorito:</label>
                <Field id="favorite" name="favorite" type="checkbox" />
              </div>
              <div className="buttonGroup">
                <NavLink exact to="/" className="button">
                  <button type="reset" className="button secondary">
                    Cancelar
                  </button>
                </NavLink>
                <NavLink exact to="/" className="button">
                  <button
                    type="submit"
                    className="button primary"
                    onClick={() => onSubmit(values)}
                  >
                    Adicionar
                  </button>
                </NavLink>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default AddCarPage;
