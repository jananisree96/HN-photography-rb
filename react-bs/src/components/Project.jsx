import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import { Card, Container, Row, Col } from "react-bootstrap";
import img1 from "../images/emrecan-dora.jpg";
import img2 from "../images/alexander-dummer.jpg";
import img3 from "../images/natalie-bond.jpg";
import img4 from "../images/richard-harris.jpg";
import img5 from "../images/soldiervip.jpg";
import img6 from '../images/valentinantonucci.jpg'



const Project = () => {
  const images = [img6, img2, img3, img4, img5,img1];

  return (
    <Container className="mt-5">
      <Row className="align-items-center">
        <Col lg={6} md={12} className="text-center text-lg-start">
          <h2>Recent Works</h2>
          <p className="text-justify mt-3">
            Explore our diverse range of projects, showcasing innovation, creativity, and technical expertise.From cutting-edge web applications to dynamic mobile solutions, we bring ideas to life with precision and excellence. Each project reflects our commitment to quality, functionality, and user experience.
          </p>
          <p className="text-justify mt-3">
         We take pride in capturing moments that tell stories. Our project portfolio showcases a diverse range of work, from breathtaking landscapes to intimate portraits, each framed with creativity and precision. Whether it’s a wedding, a corporate shoot, or a personal photography session, we bring passion and expertise to every project.
          </p>
        </Col>

        <Col lg={6} md={12} className="d-flex justify-content-center align-items-center">
          <Swiper
            effect="cards"
            grabCursor={true}
            modules={[EffectCards]}
            className="cardSwiper"
          >
            {images.map((img, index) => (
              <SwiperSlide key={img}>
              <Card className="custom-card">
                <Card.Img src={img} alt={`Project ${index + 1}`} />
              </Card>
            </SwiperSlide>            
            ))}
          </Swiper>
        </Col>
      </Row>
    </Container>
  );
};

export default Project;
