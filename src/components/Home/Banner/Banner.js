import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import "./Banner.css";



const Banner = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch(`https://mysterious-beyond-02516.herokuapp.com/services`)
        .then(res => res.json())
        .then(data => setServices(data))
}, []);
  return (
    <div className="d-flex justify-content-center mt-4 w-10 ">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block width img-size radius"
            src={services[0]?.img}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block width img-size radius"
            src={services[1]?.img}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block width img-size radius"
            src={services[3]?.img}
            alt="Third slide"
          />

          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
