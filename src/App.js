import './App.css';
import Carousel from "./components/Carousel";
import IKAJacket from "./components/IKAJacket";
import Shop from "./components/ShopCollection";
import Gallery from './components/Gallery';

function App() {
  return (
    <div>
      <div style={{position:"fixed", width:"100%", zIndex:"2147483600"}}>
        <p style={{background:"black", color:"white", textAlign:"center", marginTop:"0", fontSize:"80%", padding:"0.3%"}}>CONTACT US AT +91-8800554491 | SHIPPING WORLDWIDE</p>
        <header style={{textAlign:"center", marginTop:"0", fontSize:"80%", padding:"0.3%", fontFamily:"SegoeUI", fontSize:"200%", color:"white"}}>JJ VALAYA</header>
      </div>
      <Carousel/>
      <Shop/>
      <IKAJacket/>
      <Gallery/>
    </div>
  );
}

export default App;
