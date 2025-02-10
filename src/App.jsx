import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { useSelector } from "react-redux";

function App() {
  const contacts = useSelector((state) => state.contacts.contacts.items);
  const searchName = useSelector((state) => state.contacts.filters?.name);

  const filteredContact = contacts?.filter((contact) =>
    contact.name.toLowerCase().includes(searchName.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList contacts={searchName ? filteredContact : contacts} />
    </div>
  );
}

export default App;
