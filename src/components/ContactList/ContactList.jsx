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
  const isError = useSelector(selectPhonebookIsError);
  const isLoading = useSelector(selectPhonebookIsLoading);
  const contacts = useSelector(selectFilteredContacts);
  useEffect(() => {
    dispatch(apiGetUserContacts());
  }, [dispatch]);

  return (
    <div className={css.cardList}>
      {isError && <MessageError />}
      {isLoading && <Loader />}
      {contacts === null || contacts.length === 0 ? (
        <p>There is no list. Add more contacts.</p>
      ) : (
        <ul className={css.cardItem}>
          {contacts.map((contact) => {
            return (
              <li key={contact.id}>
                <Contact {...contact} />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
export default ContactList;
