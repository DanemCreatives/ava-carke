import "./featured-carousel.style.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import CustomButton from "../../objects/CustomButton/custom-button.object";

function FeaturedCarousel() {
  return (
    <div className="featured-carousel">
      <Carousel
        swipeable={true}
        centerMode={true}
        centerSlidePercentage="80"
        infiniteLoop={true}
        showStatus={false}
        autoPlay={true}
        interval={5000}
        renderThumbs={() => {
          return false;
        }}
      >
        <div className="featured-carousel__content">
          <div className="featured-carousel__canvas">
            <img
              className="featured-carousel__image"
              src="https://www.trade.taralane.ie/marketing/Banner-Clocks.jpg"
              alt="Clocks"
            />
          </div>
          <div className="featured-carousel__textbox">
            <h2>Indoor Living</h2>
            <p>
              From storage to display, at Tara Lane you’ll find everything you
              need to create the interiors you desire.
            </p>
            <CustomButton to="/shop" type="primary">
              Shop Now
            </CustomButton>
          </div>
        </div>
        <div className="featured-carousel__content">
          <div className="featured-carousel__canvas">
            <img
              src="https://www.trade.taralane.ie/marketing/Banner-Clocks.jpg"
              alt="Clocks"
            />
          </div>
          <div className="featured-carousel__textbox">
            <h2>Indoor Living</h2>
            <p>
              From storage to display, at Tara Lane you’ll find everything you
              need to create the interiors you desire.
            </p>
            <CustomButton to="/shop" type="primary">
              Shop Now
            </CustomButton>
          </div>
        </div>
        <div className="featured-carousel__content">
          <div className="featured-carousel__canvas">
            <img
              src="https://www.trade.taralane.ie/marketing/Banner-Clocks.jpg"
              alt="Clocks"
            />
          </div>
          <div className="featured-carousel__textbox">
            <h2>Indoor Living</h2>
            <p>
              From storage to display, at Tara Lane you’ll find everything you
              need to create the interiors you desire.
            </p>
            <CustomButton to="/shop" type="primary">
              Shop Now
            </CustomButton>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default FeaturedCarousel;
