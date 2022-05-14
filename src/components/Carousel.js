import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function() {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel autoPlay interval={2000} activeIndex={index} onSelect={handleSelect} indicators={false}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://ik.imagekit.io/thestylist/valaya/pub/media_valaya/HOMEPAGE_IMAGES/13_May_22/Desktop-Banner-3_(7).jpg"
            alt="First slide"
          />
          <Carousel.Caption style={{height:"30%"}}>
            <button style={{border:"none", background:"black", color:"white", width:"23%", height:"25%"}}>SHOP NOW</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://ik.imagekit.io/thestylist/valaya/pub/media_valaya/HOMEPAGE_IMAGES/13_May_22/Desktop-Banner-1_(20).jpg"
            alt="Second slide"
          />
  
          <Carousel.Caption style={{height:"30%"}}>
            <button style={{border:"none", background:"black", color:"white", width:"23%", height:"25%"}}>SHOP NOW</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://ik.imagekit.io/thestylist/valaya/pub/media_valaya/HOMEPAGE_IMAGES/13_May_22/Desktop-Banner-5.jpg"
            alt="Third slide"
          />
  
          <Carousel.Caption style={{height:"30%"}}>
            <button style={{border:"none", background:"black", color:"white", width:"23%", height:"25%"}}>SHOP NOW</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://ik.imagekit.io/thestylist/valaya/pub/media_valaya/HOMEPAGE_IMAGES/13_May_22/Desktop-Banner-2_(16).jpg"
            alt="Third slide"
          />
  
          <Carousel.Caption style={{height:"30%"}}>
            <button style={{border:"none", background:"black", color:"white", width:"23%", height:"25%"}}>SHOP NOW</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://ik.imagekit.io/thestylist/valaya/pub/media_valaya/HOMEPAGE_IMAGES/13_May_22/Desktop-Banner-1_(10).jpg"
            alt="Third slide"
          />
  
          <Carousel.Caption style={{height:"30%"}}>
            <button style={{border:"none", background:"black", color:"white", width:"23%", height:"25%"}}>SHOP NOW</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://ik.imagekit.io/thestylist/valaya/pub/media_valaya/HOMEPAGE_IMAGES/13_May_22/Desktop-Banner-4_(1).jpg"
            alt="Third slide"
          />
  
          <Carousel.Caption style={{height:"30%"}}>
            <button style={{border:"none", background:"black", color:"white", width:"23%", height:"25%"}}>SHOP NOW</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }