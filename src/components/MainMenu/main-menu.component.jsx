import "./main-menu.style.scss";
import { Link } from "react-router-dom";

function MainMenu() {
  return (
    <div className="main-menu">
      <ul className="main-menu__list">
        <li className="main-menu__item">
          <Link to="/">Home</Link>
        </li>
        <li className="main-menu__item">
          <Link to="/">Shop By Category</Link>
        </li>
        <li className="main-menu__item">
          <Link to="/">Shop By Type</Link>
        </li>
        <li className="main-menu__item">
          <Link to="/">Shop By Availability</Link>
        </li>
        <li className="main-menu__item">
          <Link to="/products">All Products</Link>
        </li>
      </ul>
    </div>
  );
}

export default MainMenu;
