import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import css from "./RegistrationForm.module.css";
import { apiRegisterUser } from "../../redux/auth/operations";

const UserRegisterSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters!")
    .max(50, "Name must be less than 50 characters!")
    .required("Name is required!"),
  email: Yup.string()
    .email("Must be a valid email!")
    .required("Email is required!"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters!")
    .required("Password is required!"),
});

const INITIAL_FORM_DATA = {
  name: "",
  email: "",
  password: "",
};

const RegisterForm = () => {
  const dispatch = useDispatch();
  const onRegister = (formData) => {
    dispatch(apiRegisterUser(formData));
  };
  const onSubmit = (data, formActions) => {
    onRegister(data);
    formActions.resetForm();
  };

  return (
    <div>
      <Formik
        validationSchema={UserRegisterSchema}
        initialValues={INITIAL_FORM_DATA}
        onSubmit={onSubmit}
      >
        <Form className={css.form}>
          <h2 className={css.title}>Register</h2>
          <label className={css.label}>
            <span className={css.text}>User name:</span>
            <Field
              className={css.input}
              placeholder="Bohdan Stupka"
              type="text"
              name="name"
            />
            <ErrorMessage
              className={css.errorMsg}
              name="name"
              component="span"
            />
          </label>
          <label className={css.label}>
            <span className={css.text}>Email:</span>
            <Field
              className={css.input}
              placeholder="TarasShevchenko@gmail.com"
              type="text"
              name="email"
            />
            <ErrorMessage
              className={css.errorMsg}
              name="email"
              component="span"
            />
          </label>
          <label className={css.label}>
            <span className={css.text}>Password:</span>
            <Field
              className={css.input}
              placeholder="Enter your password"
              type="password"
              name="password"
            />
            <ErrorMessage
              className={css.errorMsg}
              name="password"
              component="span"
            />
          </label>
          <button
            className={css.submitBtn}
            type="submit"
            title="Click to register user"
            aria-label="Register button"
          >
            Sign Up
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterForm;
