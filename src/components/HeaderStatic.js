import { Component } from "react";

export default class HeaderStatic extends Component{
    state1 = {background: '#eaece5', color:'black', height:"33%"};
    render() {
      return(
        <div style={{position:"fixed", width:"100%", zIndex:"1000"}}>
            <header>
                <div style={{background:"black", color:"white", textAlign:"center", fontSize:"80%"}}>CONTACT US AT +91-88000554491 | SHIPPING WORLDWIDE</div>
                <div className="row" style={{color:"black", background:'#eaece5', paddingTop:"1%"}}>
                    <div className="col-md-2 offset-md-1 d-none d-md-block">
                        <a href="http://www.instagram.com"><img src="https://ik.imagekit.io/thestylist/Assets/JV/Icons/insta-dark.svg" style={{height:"33%", marginRight:"8%"}}></img></a>
                        <a href="http://www.facebook.com"><img src="https://ik.imagekit.io/thestylist/Assets/JV/Icons/fb-dark.svg" style={{height:"33%", marginRight:"8%"}}></img></a>
                        <img src="https://ik.imagekit.io/thestylist/Assets/JV/Icons/call-dark.svg" style={{height:"33%"}}></img>
                    </div>
                    <div className="col-1 d-inline-block d-md-none">
                      <a href="http://www.whatsapp.com"><img src="https://valaya.com/assets/whatsapp-48.png" style={{height:"33%"}}></img></a>
                    </div>
                    <div className="col-6 col-md-4 offset-1 offset-md-1" style={{textAlign:"center",fontFamily:"SegoeUI", fontSize:"220%"}}>IJ VALAYA</div>
                    <div className="col-4 col-md-3 offset-md-1">
                        <a href="http://www.whatsapp.com"><img className="d-none d-md-inline-block" src="https://valaya.com/assets/whatsapp-48.png" style={{height:"33%", marginRight:"8%"}}></img></a>
                        <button style={{color:"black", fontSize:"80%", background:"transparent", border:"none", marginRight:"8%"}}><img src="https://ik.imagekit.io/thestylist/Assets/JV/Icons/user-dark.svg" style={{height:"33%"}}></img><text className="d-none d-md-inline-block">LOGIN</text></button>
                        <button style={{background:"transparent", border:"none", marginRight:"8%"}}><img src="https://ik.imagekit.io/thestylist/Assets/JV/Icons/search-dark.svg"/></button>
                        <button style={{background:"transparent", border:"none"}}><img src="https://ik.imagekit.io/thestylist/Assets/JV/Icons/cart-dark.svg"/></button>
                    </div>
                </div>
                <div className="d-none d-md-block" style={{textAlign:"center", paddingBottom:"1%", background:'#eaece5', fontSize:"75%", paddingTop:"1%"}}>
                    <button style={{border:"none", background:"transparent", color:"black", marginRight:"2%"}}>MEN</button>
                    <button style={{border:"none", background:"transparent", color:"black", marginRight:"2%"}}>WOMEN</button>
                    <button style={{border:"none", background:"transparent", color:"black"}}>NEW ARRIVALS</button>
                </div>
            </header>
       </div>
       )
     }
  }