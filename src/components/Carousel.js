import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function() {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <div>
      <div className='d-none d-md-block'>
      <Carousel autoPlay interval={2000} activeIndex={index} onSelect={handleSelect} indicators={false}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://ik.imagekit.io/thestylist/valaya/pub/media_valaya/HOMEPAGE_IMAGES/13_May_22/Desktop-Banner-3_(7).jpg"
            alt="First slide"
          />
          <Carousel.Caption style={{height:"30%"}}>
            <button style={{border:"none", background:"black", color:"white", width:"23%", height:"25%", fontSize:"75%"}}>SHOP NOW</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://ik.imagekit.io/thestylist/valaya/pub/media_valaya/HOMEPAGE_IMAGES/13_May_22/Desktop-Banner-1_(20).jpg"
            alt="Second slide"
          />
          <Carousel.Caption style={{height:"30%"}}>
            <button style={{border:"none", background:"black", color:"white", width:"23%", height:"25%", fontSize:"75%"}}>SHOP NOW</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://ik.imagekit.io/thestylist/valaya/pub/media_valaya/HOMEPAGE_IMAGES/13_May_22/Desktop-Banner-5.jpg"
            alt="Third slide"
          />
          <Carousel.Caption style={{height:"30%"}}>
            <button style={{border:"none", background:"black", color:"white", width:"23%", height:"25%", fontSize:"75%"}}>SHOP NOW</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://ik.imagekit.io/thestylist/valaya/pub/media_valaya/HOMEPAGE_IMAGES/13_May_22/Desktop-Banner-2_(16).jpg"
            alt="Third slide"
          />
          <Carousel.Caption style={{height:"30%"}}>
            <button style={{border:"none", background:"black", color:"white", width:"23%", height:"25%", fontSize:"75%"}}>SHOP NOW</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://ik.imagekit.io/thestylist/valaya/pub/media_valaya/HOMEPAGE_IMAGES/13_May_22/Desktop-Banner-1_(10).jpg"
            alt="Third slide"
          />
          <Carousel.Caption style={{height:"30%"}}>
            <button style={{border:"none", background:"black", color:"white", width:"23%", height:"25%", fontSize:"75%"}}>SHOP NOW</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://ik.imagekit.io/thestylist/valaya/pub/media_valaya/HOMEPAGE_IMAGES/13_May_22/Desktop-Banner-4_(1).jpg"
            alt="Third slide"
          />
          <Carousel.Caption style={{height:"30%"}}>
            <button style={{border:"none", background:"black", color:"white", width:"23%", height:"25%", fontSize:"75%"}}>SHOP NOW</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
      <div className='d-md-none'>
      <Carousel autoPlay interval={2000} activeIndex={index} onSelect={handleSelect} indicators={false}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://ik.imagekit.io/thestylist/valaya/pub/media_valaya/HOMEPAGE_IMAGES/13_May_22/Mobile-banner-3_(8).jpg"
            alt="First slide"
          />
          <Carousel.Caption style={{height:"30%"}}>
            <button style={{border:"none", background:"black", color:"white", width:"50%", height:"60%", fontSize:"75%"}}>SHOP NOW</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://ik.imagekit.io/thestylist/valaya/pub/media_valaya/HOMEPAGE_IMAGES/13_May_22/Mobile-banner-1_(22).jpg"
            alt="Second slide"
          />
          <Carousel.Caption style={{height:"30%"}}>
            <button style={{border:"none", background:"black", color:"white", width:"50%", height:"60%", fontSize:"75%"}}>SHOP NOW</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://ik.imagekit.io/thestylist/valaya/pub/media_valaya/HOMEPAGE_IMAGES/14_May_22/Mobile-Banner_(13).jpg"
            alt="Third slide"
          />
          <Carousel.Caption style={{height:"30%"}}>
            <button style={{border:"none", background:"black", color:"white", width:"50%", height:"60%", fontSize:"75%"}}>SHOP NOW</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://ik.imagekit.io/thestylist/valaya/pub/media_valaya/HOMEPAGE_IMAGES/13_May_22/Mobile-banner-2_(14).jpg"
            alt="Third slide"
          />
          <Carousel.Caption style={{height:"30%"}}>
            <button style={{border:"none", background:"black", color:"white", width:"50%", height:"60%", fontSize:"75%"}}>SHOP NOW</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://ik.imagekit.io/thestylist/valaya/pub/media_valaya/HOMEPAGE_IMAGES/13_May_22/Mobile-Banner-1_(9).jpg"
            alt="Third slide"
          />
          <Carousel.Caption style={{height:"30%"}}>
            <button style={{border:"none", background:"black", color:"white", width:"50%", height:"60%", fontSize:"75%"}}>SHOP NOW</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://ik.imagekit.io/thestylist/valaya/pub/media_valaya/HOMEPAGE_IMAGES/13_May_22/Mobile-banner-6_(1).jpg"
            alt="Third slide"
          />
          <Carousel.Caption style={{height:"30%"}}>
            <button style={{border:"none", background:"black", color:"white", width:"50%", height:"60%", fontSize:"75%"}}>SHOP NOW</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
      </div>
    );
  }