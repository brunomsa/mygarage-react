import React from "react";
import { MdFileUpload } from "react-icons/md";
import { Link } from "react-router-dom";
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
            name: "",
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
            name: Yup.string()
              .max(15, "O número máximo de caracteres é 19")
              .required("Campo obrigatório"),
            year: Yup.string()
              .max(4, "O número máximo de caracteres é 4")
              .required("Campo obrigatório"),
            km: Yup.string()
              .max(11, "O número máximo de caracteres é 11")
              .required("Campo obrigatório"),
            march: Yup.string()
              .max(11, "O número máximo de caracteres é 11")
              .required("Campo obrigatório"),
            engine: Yup.string()
              .max(11, "O número máximo de caracteres é 11")
              .required("Campo obrigatório"),
          })}
        >
          {({ values, setFieldValue, isValid }) => (
            <Form>
              <div className="field">
                <label htmlFor="name">Nome:</label>
                <div>
                  <Field id="name" name="name" autoComplete="off" />
                  <ErrorMessage name="name">
                    {(msg) => <div className="errorMsg">{msg}</div>}
                  </ErrorMessage>
                </div>
              </div>
              <div className="field">
                <label htmlFor="year">Ano:</label>
                <div>
                  <Field
                    id="year"
                    name="year"
                    type="number"
                    autoComplete="off"
                  />
                  <ErrorMessage name="year">
                    {(msg) => <div className="errorMsg">{msg}</div>}
                  </ErrorMessage>
                </div>
              </div>
              <div className="field">
                <label htmlFor="km">Km:</label>
                <div>
                  <Field id="km" name="km" autoComplete="off" />
                  <ErrorMessage name="km">
                    {(msg) => <div className="errorMsg">{msg}</div>}
                  </ErrorMessage>
                </div>
              </div>
              <div className="field">
                <label htmlFor="march">Câmbio:</label>
                <div>
                  <Field id="march" name="march" autoComplete="off" />
                  <ErrorMessage name="march">
                    {(msg) => <div className="errorMsg">{msg}</div>}
                  </ErrorMessage>
                </div>
              </div>
              <div className="field">
                <label htmlFor="engine">Motor:</label>
                <div>
                  <Field id="engine" name="engine" autoComplete="off" />
                  <ErrorMessage name="engine">
                    {(msg) => <div className="errorMsg">{msg}</div>}
                  </ErrorMessage>
                </div>
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
                  <label htmlFor="image" className="labelUpload">
                    <MdFileUpload className="iconUpload" />
                  </label>
                  <label htmlFor="image" className="inputAddFilenameImage">
                    {values.filename}
                  </label>
                </div>
              </div>
              <div className="field fav end">
                <label htmlFor="favorite">Marcar como favorito:</label>
                <Field name="favorite" type="checkbox" />
              </div>
              <div className="buttonGroup">
                <Link to="/" className="button">
                  <button type="reset" className="button secondary">
                    Cancelar
                  </button>
                </Link>
                <Link to="/" className="button">
                  <button
                    type="submit"
                    className="button primary"
                    disabled={!isValid || !values.name}
                    onClick={() => onSubmit(values)}
                  >
                    Adicionar
                  </button>
                </Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default AddCarPage;
