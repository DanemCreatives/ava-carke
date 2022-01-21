import "./shopping-cart.style.scss";
import IntroText from "../../components/IntroText/intro-text.component";
import Cart from "../../components/Cart/cart.component";
import { Container } from "../../grid/TailwindGrid/tailwind-grid.component";

function ShoppingCart() {
  return (
    <div className="shopping-cart page">
      <IntroText header="Shopping Cart" />
      <Container>
        <Cart />
      </Container>
    </div>
  );
}

export default ShoppingCart;
