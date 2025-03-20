
import React from "react";
import { Carousel, Card, Button, Row, Col, Container } from "react-bootstrap";
import img1 from "../images/Construction-Site.webp";
import img2 from "../images/Commercial-real-estate.webp";
import img3 from "../images/Residental-real-estate.webp";
import img4 from "../images/Aerial-construction.webp";
import img5 from "../images/Architectural.webp";
import img6 from "../images/Interior.webp";


const services = [
  { 
    id: 1, 
    img: img1, 
    title: "Construction Site Monitoring", 
    text: "Professional aerial and ground-level monitoring of construction sites to track progress, ensure safety, and document developments." 
  },
  { 
    id: 2, 
    img: img2, 
    title: "Commercial Photography", 
    text: "High-quality photography for commercial properties, enhancing marketing materials and online listings with stunning visuals." 
  },
  { 
    id: 3, 
    img: img3, 
    title: "Residential Photography", 
    text: "Capture beautiful interior and exterior shots of residential properties to attract potential buyers and renters." 
  },
  { 
    id: 4, 
    img: img4, 
    title: "Aerial Construction Monitoring", 
    text: "Drone-based aerial photography and videography to provide a comprehensive view of ongoing construction projects." 
  },
  { 
    id: 5, 
    img: img5, 
    title: "Architectural Photography", 
    text: "Professional architectural photography services to showcase the design and structure of buildings with high-quality images." 
  },
  { 
    id: 6, 
    img: img6, 
    title: "Interior Photography", 
    text: "Detailed and well-lit photography for interiors, perfect for real estate listings, hospitality, and home decor portfolios." 
  }
];


const Service = () => {
  const chunkSize = 3; // Number of cards per slide
  const slides = [];

  for (let i = 0; i < services.length; i += chunkSize) {
    slides.push(services.slice(i, i + chunkSize));
  }

  return (
    <Container>
      <h1 className="mt-4 mb-4 text-center">Services</h1>
      <Carousel interval={3000} className="mb-3">
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <Row className="d-flex flex-nowrap overflow-x-auto justify-content-center g-3">
              {slide.map((service) => (
                <Col key={service.id} md={4} sm={6} xs={12} className="d-flex justify-content-center">
                  <Card style={{ width: "18rem" }} className="h-100 shadow">
                    <Card.Img
                      variant="top"
                      src={service.img}
                      alt={service.title}
                      style={{ width: "100%", height: "250px", objectFit: "cover" }}
                    />
                    <Card.Body>
                      <Card.Title className="text-center text-nowrap" style={{fontSize: '1rem'}}>{service.title}</Card.Title>
                      <Card.Text className="text-center" style={{fontSize:'14px'}}>{service.text}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default Service;
