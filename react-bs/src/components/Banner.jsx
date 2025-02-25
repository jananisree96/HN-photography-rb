import React from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import banner from "../images/hero-banner-2.jpg";
import bannertwo from "../images/hero-banner.jpg";
import "../../src/App.css";

const Banner = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="position-relative text-center">
          <img className="w-100 vh-100 object-fit-cover" src={banner} alt="Capturing Moments" />
          <div className="overlay position-absolute top-0 start-0 w-100 h-100"></div>
          <Container className="position-absolute top-50 start-50 translate-middle text-white">
            <Row className="justify-content-center">
              <Col md={8}>
                <h3>Capturing Moments, Creating Memories</h3>
                <p>
                  Experience the art of storytelling through our lens. Let us freeze your special moments with breathtaking photography.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="position-relative text-center">
          <img className="w-100 vh-100 object-fit-cover" src={bannertwo} alt="Every Picture Tells a Story" />
          <div className="overlay position-absolute top-0 start-0 w-100 h-100"></div>
          <Container className="position-absolute top-50 start-50 translate-middle text-white">
            <Row className="justify-content-center">
              <Col md={8}>
                <h3>Every Picture Tells a Story</h3>
                <p>
                  From weddings to portraits, we bring your vision to life with stunning, high-quality images. Book your session today!
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
