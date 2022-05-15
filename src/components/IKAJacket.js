import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function() {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
        <div>
          <img style={{marginTop:"5%"}}
            className="d-block w-100"
            src="https://ik.imagekit.io/thestylist/valaya/pub/media_valaya/HOMEPAGE_IMAGES/22_Apr_22/JJvalaya-Static-Banner.gif"
            alt="First slide"
          />
          <div className='container' style={{marginTop:"5%"}}>
            <div className='row'>
              <div className='col-12 col-md-6'>
                <img src='assets/images/jhalamandHouse2020.png' style={{height:"95%", width:"100%"}}/>
              </div>
              <div className='col-12 col-md-6'>
                <img src='assets/images/theChevron.png' style={{height:"95%", width:"100%"}}/>
              </div>
            </div>
            <div className='row' style={{marginTop:"5%"}}>
              <div style={{backgroundImage:"url(https://ik.imagekit.io/thestylist/valaya/pub/media_valaya/HOMEPAGE_IMAGES/25_Apr_22/appointment-background-e-61-ee-04-b-1-a-9-c-6-f-626-c-2-a.jpg)", backgroundSize:"cover"}}>
              <p style={{letterSpacing:"2px", color:"white", textAlign:"center", marginTop:"10%", fontSize:"350%"}}>BOOK AN APPOINTMENT</p>
              <p style={{letterSpacing:"1px", color:"white", textAlign:"center", marginTop:"1%", fontSize:"100%"}}>CONSULTATION  |  CUSTOMISATION  |  MEASUREMENT</p>
              <div style={{marginBottom:"5%",marginTop:"5%"}}>
              <button style={{background:"transparent", color:"white", border:"1px solid white", display:"block", margin:"auto", fontSize:"80%", width:"20%", height:"15%", padding:"1%"}}>BOOK NOW</button>
              </div>
              </div>
            </div>
          </div>
          <div className='row' style={{marginTop:"5%"}}>
            <div style={{backgroundImage:"url(assets/images/whatsNew.png)", backgroundSize:"100%"}}>
              <div style={{paddingBottom:"5%"}}>
              <button style={{background:"black", color:"white", display:"block", margin:"auto", fontSize:"80%", width:"17%", padding:"0.5%", marginTop:"32%"}}>SHOP NOW</button>
              </div>
            </div>
          </div>
        </div>
    );
  }