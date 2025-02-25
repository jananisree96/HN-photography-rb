import React from 'react'
import { Carousel } from "react-bootstrap"
import banner from "../images/hero-banner.png";

const Banner = () => {
  return (
    <Carousel>
        <Carousel.Item>
            <img className="d-block w-100" src={banner} alt="First Slide"  />
        
            <Carousel.Caption>
                <h3>Testing</h3>
                <p>Banner description goes here.</p>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img className="d-block w-100"  src={banner} alt="First Slide"  />
        
            <Carousel.Caption>
                <h3>First Slide</h3>
                <p>Banner description goes here.</p>
            </Carousel.Caption>
        </Carousel.Item>

    </Carousel>
  )
}

export default Banner;