import React from "react";
import { Carousel } from "react-bootstrap";

function CarouselFadeExample(props) {
  return (
    <Carousel className="h-[7rem] md:h-[12rem] text-center pt-4 pb-2 flex flex-col items-center justify-center " indicators={false} controls={false} fade>
      <Carousel.Item className="text-center text-3xl md:text-6xl" interval={3000}>
        <h1>{props.text}</h1>
      </Carousel.Item>
      <Carousel.Item className="text-center text-3xl md:text-6xl" interval={3000}>
        <h1>{props.text}</h1>
      </Carousel.Item >
      <Carousel.Item className="text-center text-3xl md:text-6xl" interval={3000}>
        <h1>{props.text}</h1>
      </Carousel.Item>
      <Carousel.Item className="text-center text-3xl md:text-6xl" interval={3000}>
        <h1>{props.text}</h1>
      </Carousel.Item>
 
      <Carousel.Item className="text-center text-3xl md:text-6xl" interval={3000}>
        <h1>{props.text}</h1>
      </Carousel.Item>
      <Carousel.Item className="text-center text-3xl md:text-6xl" interval={3000}>
        <h1>{props.text}</h1>
      </Carousel.Item>
      <Carousel.Item className="text-center text-3xl md:text-6xl" interval={3000}>
        <h1>{props.text}</h1>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;
