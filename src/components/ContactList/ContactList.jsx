import { useSelector } from "react-redux";
import clsx from "clsx";
import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import {
  selectError,
  selectFilteredContacts,
  selectLoading,
} from "../../redux/contactsSlice";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <ul className={clsx(css.list)}>
      {loading && (
        <li>
          <p>Loading...</p>
        </li>
      )}
      {error && (
        <li>
          <p>{error}</p>
        </li>
      )}
      {filteredContacts.map((contact) => (
        <li key={contact.id} className={clsx(css.item)}>
          <Contact data={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
