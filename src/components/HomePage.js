import Header from "./Header"
import Carousel from "./Carousel";
import IKAJacket from "./IKAJacket";
import Shop from "./ShopCollection";
import Gallery from './Gallery';
import Footer from './Footer';

export default function HomePage(){
    return(
        <div>
            <Header/>
            <Carousel/>
            <Shop/>
            <IKAJacket/>
            <Gallery/>
            <Footer/>
        </div>
    )
}