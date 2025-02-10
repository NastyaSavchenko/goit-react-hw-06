import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

function ContactList({ contacts }) {
  return (
    <ul className={s.listBox}>
      {contacts?.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
}

export default ContactList;
