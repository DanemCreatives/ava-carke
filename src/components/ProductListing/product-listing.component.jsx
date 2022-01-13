import "./product-listing.style.scss";
import ProductItem from "../ProductItem/product-item.component";
import { Row, Col } from "../../grid/TailwindGrid/tailwind-grid.component";
import ShoppingData from "../../data/shopping.data";

function ProductListing() {
  return (
    <div className="product-listing">
      <Row cols={12} gap={4}>
        {ShoppingData.map((single, index) => {
          return (
            <Col key={index} span={{ default: 4 }}>
              <ProductItem single={single} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default ProductListing;
