import "./filter-nav.style.scss";
import CustomSelect from "../../objects/CustomSelect/custom-select.object";

function FilterNav() {
  return (
    <div className="filter-nav">
      <div className="filter-nav__sort">
        <span className="filter-nav__label">Sort By:</span>
        <CustomSelect className="filter-nav__select">
          <option>Name (A - Z)</option>
          <option>Name (Z - A)</option>
          <option>Price (Low - High)</option>
          <option>Price (High - Low)</option>
          <option>Model (A - Z)</option>
          <option>Model (Z - A)</option>
        </CustomSelect>
      </div>
      <div className="filter-nav__sort">
        <span className="filter-nav__label">Show:</span>
        <CustomSelect className="filter-nav__select">
          <option>25</option>
          <option>50</option>
          <option>75</option>
          <option>100</option>
        </CustomSelect>
      </div>
    </div>
  );
}

export default FilterNav;
