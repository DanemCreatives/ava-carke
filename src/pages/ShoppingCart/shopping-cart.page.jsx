import "./shopping-cart.style.scss";
import IntroText from "../../components/IntroText/intro-text.component";
import Cart from "../../components/Cart/cart.component";

function ShoppingCart() {
  return (
    <div className="shopping-cart page">
      <IntroText header="Shopping Cart" />
      <Cart />
    </div>
  );
}

export default ShoppingCart;
