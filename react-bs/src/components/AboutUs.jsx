import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cube";
import image2 from '../images/img-2.jpg';
import image7 from '../images/img-7.jpg';


const AboutUs = () => {
  return (
    <Container fluid className="py-3">
      <Row className="align-items-center">
        <Col md={6} className="text-center">
          <Swiper
            effect="cube"
            grabCursor={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            modules={[EffectCube, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={image2} alt="Photography 1" className="img-fluid rounded swiper-image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={image7} alt="Photography 3" className="img-fluid rounded swiper-image" />
            </SwiperSlide>
          </Swiper>
        </Col>
        <Col md={6}>
          <h2 className="mb-4">About HN Photography</h2>
          <p className="lead">
            At HN Photography, we capture moments that tell a story. Our passion
            is to bring emotions to life through the lens, creating memories
            that last a lifetime.
          </p>
          <h4 className="mt-4">Our Vision</h4>
          <p>
            Our vision is to inspire and connect people through breathtaking photography that speaks to the heart and soul. We strive to capture life's most precious moments with authenticity and creativity, allowing every image to tell a unique and unforgettable story.
          </p>
          <h4 className="mt-4">Our Mission</h4>
          <p>
            Our mission is to deliver high-quality photography that encapsulates the beauty of each moment with passion and artistic excellence. We aim to create visually stunning and emotionally resonant images that leave a lasting impact on our clients.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;

