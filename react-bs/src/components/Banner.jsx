import React from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import banner from "../images/img-abt-2.avif";
import bannertwo from "../images/hero-banner-2.jpg";
import CustomButton from "./CustomButton";
import "../../src/App.css";

const Banner = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="position-relative text-center">
          <img className="w-100 vh-100 object-fit-cover" src={bannertwo} alt="Capturing Moments" />
          <div className="overlay position-absolute top-0 start-0 w-100 h-100"></div>
          <Container className="position-absolute top-50 start-50 translate-middle text-white">
            <Row className="justify-content-center">
              <Col md={8}>
                <h4 className="display-4">Life in Frames</h4>
                <p>
                A picture may fade, but a framed moment lasts forever.
                </p>
                <p>
                A picture may fade with time, but a framed moment remains eternal. Every captured second holds emotions, stories, and memories that stay alive, reminding us of the beauty of life's journey.
                </p> 
              </Col>
            </Row>
            <CustomButton/>
          </Container>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="position-relative text-center">
          <img className="w-100 vh-100 object-fit-cover" src={banner} alt="Every Picture Tells a Story" />
          <div className="overlay position-absolute top-0 start-0 w-100 h-100"></div>
          <Container className="position-absolute top-50 start-50 translate-middle text-white">
            <Row className="justify-content-center">
              <Col md={8}>
                <h3 className="display-4">Snap and Cherish</h3>
                <p>
                  From weddings to portraits, we bring your vision to life with stunning, high-quality images. Book your session today!
                </p>
              </Col>
            </Row>
            <CustomButton/>
          </Container>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
