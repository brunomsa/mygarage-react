import React from "react";
import { MdClose, MdFileUpload } from "react-icons/md";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { Header } from "../../components";

const AddWishPage = (props) => {
  const { onSubmit } = props;
  return (
    <section id="includeWish" className="component">
      <Header title="Novo Desejo" action="close" path="/desejos" />
      <div className="componentContent">
        <Formik
          initialValues={{
            id: Math.random().toString().replace("0.", ""),
            name: "",
            year: "",
            price: "",
            image: undefined,
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
              .required("Required")
              .matches(
                /^\s*(?:[1-9]\d{0,2}(?:\.\d{3})*|0),\d{2}$/,
                "Formato de preço inválido! (Ex.:1.000.000,00)"
              ),
          })}
        >
          {({ values, setFieldValue, isValid }) => (
            <Form>
              <div className="field">
                <label htmlFor="name">Nome:</label>
                <div>
                  <Field
                    id="name"
                    name="name"
                    placeholder="BMW"
                    autoComplete="off"
                  />
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
                    placeholder="2021"
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
                  <Field
                    id="price"
                    name="price"
                    placeholder="50.000,00"
                    autoComplete="off"
                  />
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
