import "./instagram-items.style.scss";

function InstagramItems() {
  return (
    <div className="instagram-items">
      <div className="instagram-items__header">
        follow us on Instagram{" "}
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          @ava-clarke
        </a>
      </div>
      <div className="instagram-items__gallery">Instagram Feed Goes Here</div>
    </div>
  );
}

export default InstagramItems;
