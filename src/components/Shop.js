import Header from "./Header"
import { Link } from "react-router-dom"

export default function Shop() {
    return(
        <div>
            <Header/>
            <img src="https://admin-valaya.perniapopup.studio/pub/media_valaya/promobanners/p/a/page-banner.png" style={{maxWidth:"100%"}}></img>
            <div style={{paddingTop:"5%", marginLeft:"5%", fontSize:"75%"}}>
                <Link to='/' style={{textDecoration:"none", color:"black"}}>HOMEPAGE</Link> / SHOP
            </div>
            <div className="container" style={{textAlign:"center", paddingTop:"5%"}}>
                <h1>ITEM CARDS WILL BE ADDED HERE AS PER REQUIREMENT</h1>
            </div>
        </div>
    )
}