import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { useSelector } from "react-redux";

function ContactList() {
  const contacts = useSelector((state) => state.contacts.items);
  return (
    <ul className={s.listBox}>
      {contacts?.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
}

export default ContactList;
