import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import css from "./LoginForm.module.css";
import { apiLoginUser } from "../../redux/auth/operations";

const UserRegisterSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required!")
    .email("Must be a valid email!"),
  password: Yup.string()
    .required("Password is required!")
    .min(8, "Password must be at least 8 characters!"),
});

const INITIAL_FORM_DATA = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const onLogin = (formData) => {
    dispatch(apiLoginUser(formData));
  };
  const handleSubmit = (data, formActions) => {
    onLogin(data);
    formActions.resetForm();
  };

  return (
    <Formik
      validationSchema={UserRegisterSchema}
      initialValues={INITIAL_FORM_DATA}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <h2 className={css.title}>Login</h2>
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
          title="Click to login user"
          aria-label="Login button"
        >
          Sign In
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
