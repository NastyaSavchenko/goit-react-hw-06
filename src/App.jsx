import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { useSelector } from "react-redux";
import { selectContacts } from "./redux/contactsSlice";
import { selectFilters } from "./redux/filtersSlice";

function App() {
  const contacts = useSelector(selectContacts);
  const searchName = useSelector(selectFilters);

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
