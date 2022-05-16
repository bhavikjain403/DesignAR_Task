import Header from "./Header"
import Carousel from "./Carousel";
import IKAJacket from "./IKAJacket";
import Shop from "./ShopCollection";
import Gallery from './Gallery';
import {Link} from 'react-router-dom';

export default function HomePage(){
    return(
        <div>
            <div style={{position:"fixed", bottom:"2%", right:"2%", zIndex:"1"}}>
                <img src="assets/images/chaticon.png" style={{maxHeight:"60px"}}></img>
            </div>
            <Header/>
            <Link to="/shop"><Carousel/></Link>
            <Shop/>
            <IKAJacket/>
            <Gallery/>
        </div>
    )
}