import { useState } from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardText, CardTitle } from 'reactstrap';

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
          <div style={{marginTop:"5%", padding:"5%", paddingTop:"0"}}>
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
          <div className='row'>
            <div style={{backgroundImage:"url(assets/images/whatsNew.png)", backgroundSize:"100%"}}>
              <div style={{paddingBottom:"5%"}}>
              <button style={{background:"black", color:"white", display:"block", margin:"auto", fontSize:"80%", width:"17%", padding:"0.5%", marginTop:"32%"}}>SHOP NOW</button>
              </div>
            </div>
          </div>
          <div className='row' style={{padding:"5%", paddingBottom:"0",color:"white", textAlign:"center"}}>
            <div className='col-12 col-md-4 g-0'>
            <Card> 
              <CardImg width="100%" src="https://ik.imagekit.io/thestylist/valaya/pub/media_valaya/HOMEPAGE_IMAGES/03_May_22/box-1.jpg"/>
              <CardImgOverlay style={{marginTop:"40%"}}>
                <CardTitle>EDGY FASHION JEWELLRY</CardTitle>
                <h5 style={{marginTop:"10%"}}>COSTUME JEWELLERY</h5>
                <button style={{marginTop:"5%", background:"transparent", color:"white", fontSize:"70%", letterSpacing:"2px", border:"1px solid white", width:"55%", padding:"2%"}}>COMING SOON</button>
              </CardImgOverlay>
            </Card>
            </div>
            <div className='col-12 col-md-4 g-0'>
            <Card> 
              <CardImg width="100%" src="https://ik.imagekit.io/thestylist/valaya/pub/media_valaya/HOMEPAGE_IMAGES/03_May_22/box-2.jpg"/>
              <CardImgOverlay style={{marginTop:"26.5%"}}>
                <CardTitle>THE PHOENIX BELT IN FINE LEATHERS WITH THE FIRST EVERLOGO DESIGNED BY JJ VALAYA</CardTitle>
                <h5 style={{marginTop:"10%"}}>THE PHOENIX BELT</h5>
                <button style={{marginTop:"5%", background:"transparent", color:"white", fontSize:"70%", letterSpacing:"2px", border:"1px solid white", width:"55%", padding:"2%"}}>SHOP NOW</button>
              </CardImgOverlay>
            </Card>
            </div>
            <div className='col-12 col-md-4 g-0'>
            <Card> 
              <CardImg width="100%" src="https://ik.imagekit.io/thestylist/valaya/pub/media_valaya/HOMEPAGE_IMAGES/03_May_22/box-3.jpg"/>
              <CardImgOverlay style={{marginTop:"40%"}}>
                <CardTitle>THE ALIKA PROJECT</CardTitle>
                <h5 style={{marginTop:"10%"}}>25 YEARS OF JJ VALAYA</h5>
                <button style={{marginTop:"5%", background:"transparent", color:"white", fontSize:"70%", letterSpacing:"2px", border:"1px solid white", width:"55%", padding:"2%"}}>EXPLORE NOW</button>
              </CardImgOverlay>
            </Card>
            </div>
          </div>
          <div className='row' style={{padding:"5%", paddingTop:"0",color:"white", textAlign:"center"}}>
            <div className='col-12 col-md-4 g-0'>
            <Card> 
              <CardImg width="100%" src="https://ik.imagekit.io/thestylist/valaya/pub/media_valaya/HOMEPAGE_IMAGES/03_May_22/box-4.jpg"/>
              <CardImgOverlay style={{marginTop:"40%"}}>
                <CardTitle>TAILORED ELEGANCE</CardTitle>
                <h5 style={{marginTop:"10%"}}>THE SHERWANI</h5>
                <button style={{marginTop:"5%", background:"transparent", color:"white", fontSize:"70%", letterSpacing:"2px", border:"1px solid white", width:"55%", padding:"2%"}}>SHOP NOW</button>
              </CardImgOverlay>
            </Card>
            </div>
            <div className='col-12 col-md-4 g-0'>
            <Card> 
              <CardImg width="100%" src="https://ik.imagekit.io/thestylist/valaya/pub/media_valaya/HOMEPAGE_IMAGES/03_May_22/box-5.jpg"/>
              <CardImgOverlay style={{marginTop:"40%"}}>
                <CardTitle>BEHIND THE SCENES TO THE COMEBACK</CardTitle>
                <h5 style={{marginTop:"10%"}}>FROM GRIT TO GLAMOUR</h5>
                <button style={{marginTop:"5%", background:"transparent", color:"white", fontSize:"70%", letterSpacing:"2px", border:"1px solid white", width:"55%", padding:"2%"}}>EXPLORE NOW</button>
              </CardImgOverlay>
            </Card>
            </div>
            <div className='col-12 col-md-4 g-0'>
            <Card> 
              <CardImg width="100%" src="https://ik.imagekit.io/thestylist/valaya/pub/media_valaya/HOMEPAGE_IMAGES/03_May_22/box-6.jpg"/>
              <CardImgOverlay style={{marginTop:"40%"}}>
                <CardTitle>CELEBRATING THE ROYAL NOMAD</CardTitle>
                <h5 style={{marginTop:"10%"}}>PHOTOGRAPHIQUE 2020</h5>
                <button style={{marginTop:"5%", background:"transparent", color:"white", fontSize:"70%", letterSpacing:"2px", border:"1px solid white", width:"55%", padding:"2%"}}>EXPLORE NOW</button>
              </CardImgOverlay>
            </Card>
            </div>
          </div>
        </div>
        
    );
  }