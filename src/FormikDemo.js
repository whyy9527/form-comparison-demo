// src/FormikDemo.js
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import RenderCount from "./RenderCount";

const validationSchema = Yup.object({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
});

const FormikDemo = () => {
  return (
    <div style={{ border: "1px solid green", padding: 20 }}>
      <h2>Formik Demo</h2>
      <RenderCount />
      <Formik
        initialValues={{ firstName: "", lastName: "", email: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log("Formik Data:", values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label>First Name:</label>
              <Field type="text" name="firstName" />
              <ErrorMessage name="firstName" component="span" style={{ color: "red" }} />
            </div>
            <div>
              <label>Last Name:</label>
              <Field type="text" name="lastName" />
              <ErrorMessage name="lastName" component="span" style={{ color: "red" }} />
            </div>
            <div>
              <label>Email:</label>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="span" style={{ color: "red" }} />
            </div>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikDemo;
