import s from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { filter } from "../../redux/actions";

function SearchBox() {
  const dispatch = useDispatch();
  const searchName = useSelector((state) => state.filters?.name);
  const handleInputChange = (e) => {
    dispatch(filter(e.target.value));
  };
  return (
    <div className={s.searchBox}>
      <h2 className={s.title}>Find contact by name</h2>
      <input type="text" value={searchName} onChange={handleInputChange} />
    </div>
  );
}

export default SearchBox;
