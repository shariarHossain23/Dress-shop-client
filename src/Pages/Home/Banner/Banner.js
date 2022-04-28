import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../Images/Banner/banner1.webp';
import banner2 from '../../../Images/Banner/banner2.webp';
import banner3 from '../../../Images/Banner/banner3.webp';

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img
             height={100}
              className="d-block w-100 img-fluid"
              src={banner1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
            height={100}
              className="d-block w-100 img-fluid"
              src={banner2}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
            height={100}
              className="d-block w-100 img-fluid"
              src={banner3}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      );
};

export default Banner;