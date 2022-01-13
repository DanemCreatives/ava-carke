import "./featured-products.style.scss";
import {
  Container,
  Row,
  Col,
} from "../../grid/TailwindGrid/tailwind-grid.component";
import ProductPreview from "../ProductPreview/product-preview.component";

function FeaturedProducts() {
  return (
    <div className="featured-products">
      <Container>
        <Row>
          <Col>
            <h1 className="featured-products__header">Featured Products</h1>
          </Col>
        </Row>
        <Row cols={12} gap={6}>
          <Col span={{ default: "12", sm: "6", lg: "3" }}>
            <ProductPreview />
          </Col>
          <Col span={{ default: "12", sm: "6", lg: "3" }}>
            <ProductPreview />
          </Col>
          <Col span={{ default: "12", sm: "6", lg: "3" }}>
            <ProductPreview />
          </Col>
          <Col span={{ default: "12", sm: "6", lg: "3" }}>
            <ProductPreview />
          </Col>
          <Col span={{ default: "12", sm: "6", lg: "3" }}>
            <ProductPreview />
          </Col>
          <Col span={{ default: "12", sm: "6", lg: "3" }}>
            <ProductPreview />
          </Col>
          <Col span={{ default: "12", sm: "6", lg: "3" }}>
            <ProductPreview />
          </Col>
          <Col span={{ default: "12", sm: "6", lg: "3" }}>
            <ProductPreview />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FeaturedProducts;
