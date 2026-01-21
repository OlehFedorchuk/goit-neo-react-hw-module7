import { useSelector } from "react-redux";
import clsx from "clsx";
import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { selectFilteredContacts } from "../../redux/contactsSlice";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  return (
    <ul className={clsx(css.list)}>
      {filteredContacts.map((contact) => (
        <li key={contact.id} className={clsx(css.item)}>
          <Contact data={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
