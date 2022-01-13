import "./footer.style.scss";
import {
  Container,
  Row,
  Col,
} from "../../grid/TailwindGrid/tailwind-grid.component";
import CircleLogo from "../../assets/img/circle-logo-white.png";
import Social from "../Social/social.component";
import TitledList from "../TitledList/titled-list.component";
import MailingFieldset from "../MailingFieldset/mailing-fieldset.component";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <Container>
        <Row className="footer__body" cols={12}>
          <Col span={{ default: 12, sm: 2 }}>
            <img className="footer__logo" src={CircleLogo} alt="Ava Clarke" />
            <Social />
          </Col>
          <Col span={{ default: 12, sm: 2 }}>
            <TitledList title="Ava Clarke">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">About Us</Link>
              </li>
            </TitledList>
          </Col>
          <Col span={{ default: 12, sm: 2 }}>
            <TitledList title="Shop Online">
              <li>
                <Link to="/">Terms and Conditions</Link>
              </li>
              <li>
                <Link to="/">Privacy Statement</Link>
              </li>
              <li>
                <Link to="/">Cookies Policy</Link>
              </li>
              <li>
                <Link to="/">FAQs</Link>
              </li>
            </TitledList>
          </Col>
          <Col span={{ default: 12, sm: 3 }}>
            <TitledList title="Customer Service">
              <li>
                <Link to="/">My Account</Link>
              </li>
              <li>
                <Link to="/">Contact Us</Link>
              </li>
            </TitledList>
          </Col>
          <Col span={{ default: 12, sm: 3 }}>
            <MailingFieldset />
          </Col>
        </Row>
        <div className="footer__legal">
          <p className="footer__copyright">
            Copyright © {new Date().getFullYear()}. Ava Clarke. All Rights
            Reserved.
          </p>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
