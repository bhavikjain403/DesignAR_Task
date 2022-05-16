import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { Link } from "react-router-dom"

export default function() {
    return (
        <div style={{background:"#eaece5", marginTop:"5%", padding:"5%"}}>
            <div className='row' style={{marginBottom:"5%"}}>
                <div className='col-8 offset-2'>
                <Card> 
                <CardImg src="https://ik.imagekit.io/thestylist/Assets/JV/Footer/footer-desktop_NWZG-hL-c.jpg"/>
                <CardImgOverlay style={{textAlign:"center"}}>
                <button style={{marginTop:"12%", background:"transparent", color:"white", fontSize:"70%", letterSpacing:"2px", border:"1px solid white", width:"30%", padding:"1%"}}>READ ABOUT US</button>
                </CardImgOverlay>
                </Card>
                </div>
            </div>
            <hr/>
            <div className='row' style={{textAlign:"center", fontSize:"90%"}}>
                <div className='col-12 col-md-3'>
                <Link to='/' style={{textDecoration: 'none', color:"black"}}>PRIVACY POLICY</Link>
                </div>
                <div className='col-12 col-md-3'>
                <Link to='/' style={{textDecoration: 'none', color:"black"}}>TERMS OF USE</Link>
                </div>
                <div className='col-12 col-md-3'>
                <Link to='/' style={{textDecoration: 'none', color:"black"}}>REPLACEMENT POLICY</Link>
                </div>
                <div className='col-12 col-md-3'>
                <Link to='/' style={{textDecoration: 'none', color:"black"}}>CONTACT US</Link>
                </div>
            </div>
            <hr/>
            <div className='row' style={{marginTop:"5%", paddingBottom:"5%"}}><p style={{textAlign:"center", fontSize:"80%"}}>&#169; (For Project Purpose Only)</p></div>
        </div>
    );
}