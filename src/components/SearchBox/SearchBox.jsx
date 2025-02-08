import s from "./SearchBox.module.css";

function SearchBox({ searchName, setSearchName }) {
  const handleInputChange = (e) => {
    setSearchName(e.target.value);
  };
  return (
    <div className={s.searchBox}>
      <h2 className={s.title}>Find contact by name</h2>
      <input type="text" value={searchName} onChange={handleInputChange} />
    </div>
  );
}

export default SearchBox;
