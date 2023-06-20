import React from "react";
import { Carousel } from "react-bootstrap";

function CarouselFadeExample(props) {
  return (
    <Carousel className="h-[3rem] md:h-[12rem] z-10" indicators={false} controls={false} fade>
      <Carousel.Item className="text-center text-5xl" interval={3000}>
        <h1>{props.text}</h1>
      </Carousel.Item>
      <Carousel.Item className="text-center text-5xl" interval={3000}>
        <h1>{props.text}</h1>
      </Carousel.Item >
      <Carousel.Item className="text-center text-5xl" interval={3000}>
        <h1>{props.text}</h1>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;
