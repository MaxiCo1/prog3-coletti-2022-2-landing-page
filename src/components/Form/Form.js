import React from "react";
import { useFormik } from "formik";
import styles from "./Form.module.css";

const validate = (values) => {
  const errors = {};

  if (!values.nombre) {
    errors.nombre = "Required";
  } else if (values.nombre.length > 15) {
    errors.nombre = "Must be 15 characters or less";
  }

  if (!values.apellido) {
    errors.apellido = "Required";
  } else if (values.apellido.length > 20) {
    errors.apellido = "Must be 20 characters or less";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

const Formulario = ({ handleShowPopUp }) => {
  const formik = useFormik({
    initialValues: {
      nombre: "",
      apellido: "",
      email: "",
    },
    validate,
    onSubmit: (values) => {
      setTimeout(() => {
        handleShowPopUp(false);
      }, 500);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className={styles["form"]}>
      <h2>
        Suscribase a nuestra pagina para recibir notificaciones de lo ultimo en
        Lenovo{" "}
      </h2>
      <label htmlFor="nombre">
        Nombre
        {formik.touched.nombre && formik.errors.nombre ? (
          <div>{formik.errors.nombre}</div>
        ) : null}
      </label>
      <input
        id="nombre"
        name="nombre"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.nombre}
      />

      <label htmlFor="apellido">
        Apellido{" "}
        {formik.touched.apellido && formik.errors.apellido ? (
          <div>{formik.errors.apellido}</div>
        ) : null}
      </label>
      <input
        id="apellido"
        name="apellido"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.apellido}
      />

      <label htmlFor="email">
        Email{" "}
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
      </label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />

      <button type="submit" className="button">
        Enviar
      </button>
    </form>
  );
};
export default Formulario;
