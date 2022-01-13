import "./filter-aside.style.scss";
import { GrClose } from "react-icons/gr";

function FilterAside() {
  return (
    <div className="filter-aside">
      <div className="filter-aside__head">
        <h2 className="filter-aside__header">Filter Products</h2>
        <span className="filter-aside__clear">
          <GrClose />
          Clear
        </span>
      </div>
      <div className="filter-aside__body"></div>
    </div>
  );
}

export default FilterAside;
