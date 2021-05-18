import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./mycarousel.css";
import Slide1 from "../../assects/img/carousal/slide1.webp";
// import Slide2 from "../../assects/img/carousal/slide2.webp";
// import Slide3 from "../../assects/img/carousal/slide3.webp";
import Scroll from "../../components/myscroll/scroll";

const MyCarousel = () => {
    return (
        <div id="home">
            
            <Carousel controls={false} indicators={false} interval={2500} pause={false}>
                <Carousel.Item>
                    <img className="d-block w-100 custom-img" src={Slide1} alt="First slide"/>
                </Carousel.Item>
                {/* <Carousel.Item>
                    <img className="d-block w-100 custom-img" src={Slide2} alt="Second slide"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100 custom-img" src={Slide3} alt="Third slide"/>
                </Carousel.Item>
                 */}
                </Carousel>
                <Scroll/>
        </div>
    )
}

export default MyCarousel
