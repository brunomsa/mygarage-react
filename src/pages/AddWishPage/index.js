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
            name: Yup.string().max(15, "Must be 15 characters or less"),
            // .required("Required"),
          })}
        >
          {({ values, setFieldValue }) => (
            <Form>
              <div className="field">
                <label htmlFor="name">Nome:</label>
                <Field id="name" name="name" autoComplete="off" />
                <ErrorMessage name="name" />
              </div>
              <div className="field">
                <label htmlFor="year">Ano:</label>
                <Field id="year" name="year" autoComplete="off" />
                <ErrorMessage name="year" />
              </div>
              <div className="field">
                <label htmlFor="km">Price:</label>
                <Field id="price" name="price" autoComplete="off" />
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
                  <label htmlFor="image" class="inputAddFilenameImage">
                    {values.filename}
                  </label>
                </div>
              </div>
              <div className="buttonGroup">
                <Link to="/desejos" className="button">
                  <button
                    type="submit"
                    className="button primary"
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
