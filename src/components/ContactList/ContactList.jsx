import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { selectFilters } from "../../redux/filtersSlice";

function ContactList() {
  const contacts = useSelector(selectContacts);
  const searchName = useSelector(selectFilters);

  const filteredContact = contacts?.filter((contact) =>
    contact.name.toLowerCase().includes(searchName.toLowerCase())
  );

  const contactsList = searchName ? filteredContact : contacts;

  return (
    <ul className={s.listBox}>
      {contactsList?.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
}

export default ContactList;
