import "./home-page.style.scss";
import FeaturedProducts from "../../components/FeaturedProducts/featured-products.component";
import FeaturedCarousel from "../../components/FeaturedCarousel/featured-carousel.component";
import FeaturedImages from "../../components/FeaturedImages/featured-images.component";
import InstagramItems from "../../components/InstagramItems/instagram-items.component";

function HomePage() {
  return (
    <div className="home-page page">
      <FeaturedCarousel />
      <FeaturedProducts />
      <FeaturedImages />
      <InstagramItems />
    </div>
  );
}

export default HomePage;
