import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

function ContactList({ contacts, handleDeleteContact }) {
  return (
    <ul className={s.listBox}>
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          contact={contact}
          handleDeleteContact={handleDeleteContact}
        />
      ))}
    </ul>
  );
}

export default ContactList;
