import { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { FiShoppingBag } from "react-icons/fi";
import "./menu.style.scss";
import DropdownMenu from "../DropdownMenu/dropdown-menu.component";
import DropdownCart from "../DropdownCart/dropdown-cart.component";

function Menu({ itemCount, cartSubtotal }) {
  const [activeDropdown, setActiveDropdown] = useState(false);
  const [activeCart, setActiveCart] = useState(false);
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
        onMouseLeave={() => {
          setActiveCart(false);
        }}
      >
        <Link
          className="menu__link menu__link--items"
          to="/"
          onMouseEnter={() => {
            setActiveCart(true);
          }}
        >
          <span className="menu__text">
            {itemCount} Item(s) - £{cartSubtotal}
          </span>
          <FiShoppingBag className="menu__icon" stroke="#7d9492" />
        </Link>
        {activeCart === true && <DropdownCart />}
      </div>
    </div>
  );
}

const mapStateToProps = ({ cart: { cartItems, cartSubtotal } }) => {
  return {
    itemCount: cartItems.reduce(
      (totalQuantity, cartItem) => totalQuantity + cartItem.quantity,
      0
    ),
    cartSubtotal: cartSubtotal,
  };
};

export default connect(mapStateToProps)(Menu);
