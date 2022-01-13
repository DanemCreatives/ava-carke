import "./featured-images.style.scss";
import {
  Container,
  Row,
  Col,
} from "../../grid/TailwindGrid/tailwind-grid.component";

function FeaturedImages() {
  return (
    <div className="featured-images">
      <Container>
        <Row cols={1}>
          <Col span={12}>
            <h1 className="featured-images__header">Shop The Look</h1>
          </Col>
        </Row>
        <Row cols={12} gap={3}>
          <Col span={{ default: "12", sm: "6" }}>
            <img
              className="featured-images__canvas featured-images__canvas--primary"
              src="https://www.trade.taralane.ie/marketing/Hotspot-1.jpg"
              alt="Hotspot"
            />
          </Col>
          <Col span={{ default: "12", sm: "6" }}>
            <img
              className="featured-images__canvas featured-images__canvas--secondary"
              src="https://www.trade.taralane.ie/marketing/Hotspot-2.jpg"
              alt="Hotspot"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FeaturedImages;
