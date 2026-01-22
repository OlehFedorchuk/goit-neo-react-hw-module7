import { useSelector } from "react-redux";
import clsx from "clsx";
import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import {
  selectFilteredContacts,
  selectLoading,
} from "../../redux/contactsSlice";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectLoading);

  console.log("loading", loading);
  return (
    <ul className={clsx(css.list)}>
      {loading && (
        <li>
          <p>Loading...</p>
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
