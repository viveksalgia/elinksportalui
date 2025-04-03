import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Broad from '../resources/Broad_Institute.jpeg';
import Java from '../resources/Java.jpeg';
import Oracle from '../resources/oracle_cloud_human.jpeg';

const ELinksCarousel = () => {
    return ( 
        <Carousel className="carousel">
            <Carousel.Item>
                <img
                className="d-block carousel-item"
                src= { Broad }
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>Broad Insitute of MIT and Harvard</h3>
                <p>Welcome to Broad!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block carousel-item"
                src= { Java }
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>World's Largest Platform for Development</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block carousel-item"
                src={ Oracle }
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Oracle Cloud Infrastructure</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
     );
}
 
export default ELinksCarousel;