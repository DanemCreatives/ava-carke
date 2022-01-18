import { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartQuantity,
  selectToggleCartValue,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import { FiShoppingBag } from "react-icons/fi";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import "./menu.style.scss";
import DropdownMenu from "../DropdownMenu/dropdown-menu.component";
import DropdownCart from "../DropdownCart/dropdown-cart.component";

function Menu({ toggleCartHidden, toggleCartValue, cartQuantity, cartTotal }) {
  const [activeDropdown, setActiveDropdown] = useState(false);
  return (
    <div className="menu">
      <div
        className="menu__dropdown-container"
        onMouseLeave={() => {
          setActiveDropdown(false);
        }}
      >
        <Link
          className="menu__link menu__link--account"
          to="/"
          onMouseEnter={() => {
            setActiveDropdown(true);
          }}
        >
          My Account
        </Link>
        {activeDropdown === true && <DropdownMenu />}
      </div>
      <div
        className="menu__cart-container"
        onMouseLeave={() => toggleCartHidden(false)}
      >
        <Link
          className="menu__link menu__link--items"
          to="/"
          onMouseEnter={() => toggleCartHidden(true)}
        >
          <span className="menu__text">
            {cartQuantity} Item(s) - £{cartTotal}
          </span>
          <FiShoppingBag className="menu__icon" stroke="#7d9492" />
        </Link>
        {toggleCartValue === true && <DropdownCart />}
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: (value) => dispatch(toggleCartHidden(value)),
});

const mapStateToProps = createStructuredSelector({
  toggleCartValue: selectToggleCartValue,
  cartQuantity: selectCartQuantity,
  cartTotal: selectCartTotal,
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
