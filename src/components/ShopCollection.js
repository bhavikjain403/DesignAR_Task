import {Link} from 'react-router-dom';

export default function() {
    return (
        <div style={{background:"#f8f2e6", marginTop:"5%", paddingBottom:"5%"}}>
            <div className="container">
                <div className="row">
                    <header style={{textAlign:"center", paddingTop:"7%"}}><h1>SHOP THE COLLECTION</h1></header>
                </div>
                <div className="row">
                    <p style={{textAlign:"center", paddingTop:"1%", paddingBottom:"3%"}}>WELCOME TO THE WORLD OF JJ VALAYA AND CELEBRATE LUXURY<br/>WITH OUR CAREFULLY CURATED COLLECTIONS.</p>
                </div>
                <div className="row">
                <div className="col-12 col-md-4">
                        <Link to='/shop'><img src="assets/images/men.png" style={{width:"100%", height:"100%", paddingBottom:"5%"}}/></Link>
                    </div>
                    <div className="col-12 col-md-4">
                        <Link to='/shop'><img src="assets/images/women.png" style={{width:"100%", height:"100%", paddingBottom:"5%"}}/></Link>
                    </div>
                    <div className="col-12 col-md-4">
                        <Link to='/shop'><img src="assets/images/accessories.png" style={{width:"100%", weight:"100%", paddingBottom:"5%"}}/></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}