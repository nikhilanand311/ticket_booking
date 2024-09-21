import Carousel from "react-bootstrap/Carousel";
import "../Hero/HeroComp.css"; // Import the CSS file for custom styles

function HeroComp() {
  return (
    <Carousel
      interval={2000}
      fade={true} // Enable fading animation
      className="custom-carousel" // Apply a custom class for styling
    >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://billetto.co.uk/blog/wp-content/uploads/2019/04/hanny-naibaho-388579-unsplash-e1554461063517.jpg"
          alt="First slide"
          style={{ height: "100vh" }}
        />
        <Carousel.Caption>
          <h3 className="event-title">EventTicket.lk</h3>
          <p className="discription">Sri-Lanka's Number 1 Event Ticket Booking Platform</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ytimg.com/vi/bd-_9YFXu84/maxresdefault.jpg"
          alt="Second slide"
          style={{ height: "100vh" }}
        />

        <Carousel.Caption>
          <h3 className="event-title">Roo Sara</h3>
          <p className="discription">Get ready for an unforgettable night at Roo Sara Event, where magic happens!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://ceylonpages.lk/wp-content/uploads/2022/07/Infinity-Live-at-Nelum-Pokuna.jpg"
          alt="Third slide"
          style={{ height: "100vh" }}
        />

        <Carousel.Caption>
          <h3 className="event-title">Infinity Live</h3>
          <p className="discription">
          Experience the infinite possibilities of entertainment at Infinity Live, where every moment is electrifying!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HeroComp;
