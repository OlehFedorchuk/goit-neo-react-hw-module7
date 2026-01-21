import { useSelector, useDispatch } from "react-redux";
import clsx from "clsx";
import css from "./SearchBox.module.css";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={clsx(css.search)}>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={filter}
        onChange={handleChange}
        placeholder="Type name..."
      />
    </div>
  );
};

export default SearchBox;
