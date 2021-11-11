import React from "react";
import { MdClose, MdFileUpload } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { Header } from "../../components";

const ViewWishPage = (props) => {
  const { id } = useParams();
  const { wishes, onChange, onDelete } = props;

  const i = wishes.findIndex((x) => x.id === id);
  const wish = wishes[i];

  return (
    <section id="editWish" className="component">
      <Header title="Editar Desejo" action="close" path="/desejos" />
      <div className="componentContent">
        <Formik
          initialValues={{
            id: wish.id,
            name: wish.name,
            year: wish.year,
            price: wish.price,
            image: wish.image,
            file: wish.file,
            filename: wish.filename,
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
          {({ values, setFieldValue }) => (
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
                <Link to="/desejos" className="button">
                  <button type="reset" className="button secondary">
                    Cancelar
                  </button>
                </Link>
                <Link to="/desejos" className="button">
                  <button
                    type="submit"
                    className="button primary"
                    onClick={() => onChange(values, values.id)}
                  >
                    Alterar
                  </button>
                </Link>
              </div>
              <Link to="/desejos" className="button">
                <button
                  id="btnDeleteWish"
                  className="button btnDelete"
                  onClick={() => onDelete(wish.id)}
                >
                  Apagar desejo
                </button>
              </Link>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default ViewWishPage;
