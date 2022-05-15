import { Card, CardImg } from 'reactstrap';

export default function() {
    return(
        <div>
            <div className='row' style={{padding:"5%", paddingTop:"2%", paddingBottom:"0",color:"white", textAlign:"center"}}>
                <div className='col-12 col-md-4 g-0'>
                <Card> 
                <CardImg width="100%" src="https://ik.imagekit.io/thestylist/valaya/pub/media_valaya/HOMEPAGE_IMAGES/22_Apr_22/celeb1.jpg"/>
                </Card>
                </div>
                <div className='col-12 col-md-4 g-0'>
                <Card> 
                <CardImg width="100%" src="https://ik.imagekit.io/thestylist/valaya/pub/media_valaya/HOMEPAGE_IMAGES/22_Apr_22/celeb2.jpg"/>
                </Card>
                </div>
                <div className='col-12 col-md-4 g-0'>
                <Card> 
                <CardImg width="100%" src="https://ik.imagekit.io/thestylist/valaya/pub/media_valaya/HOMEPAGE_IMAGES/22_Apr_22/celeb3.jpg"/>
                </Card>
                </div>
            </div>
            <div className='row' style={{padding:"5%", paddingTop:"0",color:"white", textAlign:"center"}}>
                <div className='col-12 col-md-4 g-0'>
                <Card> 
                <CardImg width="100%" src="https://ik.imagekit.io/thestylist/valaya/pub/media_valaya/HOMEPAGE_IMAGES/22_Apr_22/celeb4.jpg"/>
                </Card>
                </div>
                <div className='col-12 col-md-4 g-0'>
                <Card> 
                <CardImg width="100%" src="https://ik.imagekit.io/thestylist/valaya/pub/media_valaya/HOMEPAGE_IMAGES/22_Apr_22/celeb5.jpg"/>
                </Card>
                </div>
                <div className='col-12 col-md-4 g-0'>
                <Card> 
                <CardImg width="100%" src="https://ik.imagekit.io/thestylist/valaya/pub/media_valaya/HOMEPAGE_IMAGES/22_Apr_22/celeb6.jpg"/>
                </Card>
                </div>
                </div>
        </div>
    )
    }