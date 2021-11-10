import React from "react";
import { MdFileUpload } from "react-icons/md";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import uniqueId from "lodash/uniqueId";

import { Header } from "../../components";

const AddWishPage = (props) => {
  const { onSubmit } = props;
  return (
    <section id="includeWish" className="component">
      <Header title="Novo Desejo" action="close" path="/desejos" />
      <div className="componentContent">
        <Formik
          initialValues={{
            id: uniqueId(),
            name: "",
            year: "",
            price: "",
            image: null,
            filename: "",
          }}
          validationSchema={Yup.object({
            name: Yup.string()
              .max(15, "O número máximo de caracteres é 15")
              .required("Required"),
            year: Yup.string()
              .max(4, "O número máximo de caracteres é 4")
              .required("Required"),
            price: Yup.string()
              .max(15, "O número máximo de caracteres é 15")
              .required("Required"),
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
                <label htmlFor="price">Price:</label>
                <div>
                  <Field id="price" name="price" autoComplete="off" />
                  <ErrorMessage name="price">
                    {(msg) => <div className="errorMsg">{msg}</div>}
                  </ErrorMessage>
                </div>
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
              <div className="buttonGroup">
                <Link to="/" className="button">
                  <button type="reset" className="button secondary">
                    Cancelar
                  </button>
                </Link>
                <Link to="/desejos" className="button">
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

export default AddWishPage;
