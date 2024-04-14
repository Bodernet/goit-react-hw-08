import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { toast } from "react-hot-toast";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { apiAddUserContact } from "../../redux/contacts/operations";
import { nanoid } from "nanoid";

const initialValues = {
  name: "",
  number: "",
};

const ContactFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters!")
    .max(50, "Name must be less than 50 characters!")
    .required("Name is required!"),
  number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, {
      message: "Invalid number",
      excludeEmptyString: false,
    })
    .required("Number is required!"),
});

const ContactForm = () => {
  const dispatch = useDispatch();
  const onAddContacts = (contactData) => {
    const contactEndData = {
      ...contactData,
      id: nanoid(),
    };
    dispatch(apiAddUserContact(contactEndData));
  };

  const onFormSubmit = (data, formActions) => {
    onAddContacts(data);
    toast.success("Contact was added successfully");
    formActions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onFormSubmit}
      validationSchema={ContactFormSchema}
    >
      <Form className={css.form}>
        <div>
          <h2 className={css.formTitle}>Add New Contact</h2>
          <label>Name</label>
          <Field type="text" name="name" placeholder="Serhiy Dykyy" />
          <ErrorMessage name="name" component="span" />
        </div>
        <div>
          <label>Number</label>
          <Field type="tel" name="number" placeholder="000-00-00" />
          <ErrorMessage name="number" component="span" />
        </div>
        <button className={css.fotmBtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
