import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Contact from "../Contact/Contact.jsx";
import css from "./ContactList.module.css";
import {
  selectPhonebookIsError,
  selectFilteredContacts,
  selectPhonebookIsLoading,
} from "../../redux/contacts/selectors.js";
import Loader from "../Loader/Loader.jsx";
import MessageError from "../MessageError/MessageError.jsx";
import { apiGetUserContacts } from "../../redux/contacts/operations";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const isError = useSelector(selectPhonebookIsError);
  const isLoading = useSelector(selectPhonebookIsLoading);

  useEffect(() => {
    dispatch(apiGetUserContacts());
  }, [dispatch]);

  return (
    <div>
      {isError && <MessageError />}
      {isLoading && <Loader />}
      <ul className={css.cardList}>
        {contacts.map((contact) => (
          <li className={css.cardItem} key={contact.id}>
            <Contact {...contact} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ContactList;
