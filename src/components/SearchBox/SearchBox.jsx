import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter, selectNameFilter } from "../../redux/filters/slice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  return (
    <div className={css.container}>
      <p className={css.searchText}> Find contacts by name</p>
      <input
        className={css.searchInput}
        name="filter"
        type="text"
        placeholder="Search"
        value={filter}
        onChange={(evt) => dispatch(changeFilter(evt.target.value))}
      />
    </div>
  );
};

export default SearchBox;
