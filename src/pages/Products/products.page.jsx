import "./products.style.scss";
import FilterAside from "../../components/FilterAside/filter-aside.component";
import ProductListing from "../../components/ProductListing/product-listing.component";
import FilterNav from "../../components/FilterNav/filter-nav.component";
import ListingDescription from "../../components/ListingDescription/listing-description.component";

import {
  Container,
  Row,
  Col,
} from "../../grid/TailwindGrid/tailwind-grid.component";

function Products() {
  return (
    <div className="products-page page">
      <Container className="products-page__container" noPadding>
        <Row cols={12} gap={3}>
          <Col span={{ default: 3 }}>
            <FilterAside />
          </Col>
          <Col className="products-page__body" span={{ default: 9 }}>
            <ListingDescription />
            <FilterNav />
            <ProductListing />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Products;
