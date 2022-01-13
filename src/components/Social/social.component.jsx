import "./social.style.scss";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Social() {
  return (
    <div className="social">
      <a
        className="social__link"
        href="https://facebook.com"
        target="_blank"
        rel="noreferrer"
      >
        <FaFacebookSquare
          className="social__icon social__icon--facebook"
          fill="#d79a2b"
        />
      </a>
      <a
        className="social__link"
        href="https://instagram.com"
        target="_blank"
        rel="noreferrer"
      >
        <FaInstagram
          className="social__icon social__icon--instagram"
          fill="#d79a2b"
        />
      </a>
    </div>
  );
}

export default Social;
