import "./search-input.style.scss";
import { FiSearch } from "react-icons/fi";
function SearchInput({ className, ...otherProps }) {
  return (
    <div className="o-search">
      <input
        className={`o-search__field ${className ? className : ""}`}
        {...otherProps}
        type="search"
        onChange={(e) => {}}
      />
      <button className="o-search__btn">
        <FiSearch className="o-search__img" stroke="white" />
      </button>
    </div>
  );
}

export default SearchInput;
