import "./featured-products.style.scss";
import { Container, Row, Col } from "tailwind-react-ui";
import ProductPreview from "../ProductPreview/product-preview.component";

function FeaturedProducts() {
  return (
    <div className="featured-products">
      <Container>
        <Row>
          <Col w="full">
            <h1 className="featured-products__header">FEATURED PRODUCTS</h1>
          </Col>
        </Row>
        <Row>
          <Col w={{ def: "full", sm: "1/2", lg: "1/4" }} p={3}>
            <ProductPreview />
          </Col>
          <Col w={{ def: "full", sm: "1/2", lg: "1/4" }} p={3}>
            <ProductPreview />
          </Col>
          <Col w={{ def: "full", sm: "1/2", lg: "1/4" }} p={3}>
            <ProductPreview />
          </Col>
          <Col w={{ def: "full", sm: "1/2", lg: "1/4" }} p={3}>
            <ProductPreview />
          </Col>
          <Col w={{ def: "full", sm: "1/2", lg: "1/4" }} p={3}>
            <ProductPreview />
          </Col>
          <Col w={{ def: "full", sm: "1/2", lg: "1/4" }} p={3}>
            <ProductPreview />
          </Col>
          <Col w={{ def: "full", sm: "1/2", lg: "1/4" }} p={3}>
            <ProductPreview />
          </Col>
          <Col w={{ def: "full", sm: "1/2", lg: "1/4" }} p={3}>
            <ProductPreview />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FeaturedProducts;
