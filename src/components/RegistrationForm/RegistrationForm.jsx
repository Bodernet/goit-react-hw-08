import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
// import { IoPersonAddSharp } from "react-icons/io5"; // 🤷‍♀️

// import css from './RegistrationForm.module.css';

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

  const handleSubmit = (data, formActions) => {
    onRegister(data);
    formActions.resetForm();
  };

  return (
    <>
      <Formik
        validationSchema={UserRegisterSchema}
        initialValues={INITIAL_FORM_DATA}
        onSubmit={handleSubmit}
      >
        <Form>
          <h2>Register</h2>

          <label>
            <span>User name:</span>
            <Field placeholder="Alex Mihalich" type="text" name="name" />
            <ErrorMessage name="name" component="span" />
          </label>
          <label>
            <span>Email:</span>
            <Field placeholder="alex@patron.com" type="text" name="email" />
            <ErrorMessage name="email" component="span" />
          </label>
          <label>
            <span>Password:</span>
            <Field
              placeholder="Enter your password"
              type="password"
              name="password"
            />
            <ErrorMessage name="password" component="span" />
          </label>

          <button
            type="submit"
            title="Click to register user"
            aria-label="Register button"
          >
            Sign Up
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default RegisterForm;
