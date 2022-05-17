import { Link } from "react-router-dom"

export default function() {
    return(
        <div className='row' style={{padding:"15%", paddingTop:"5%", color:"black"}}>
            <div className='col-3'>
                <p style={{fontWeight:"bold"}}>CATEGORY</p><br/>
                <Link to='/shop' style={{textDecoration:'none', color:'black'}}><p style={{marginBottom:"5%"}}>DRESS</p>
                <p style={{marginBottom:"5%"}}>SAREE</p>
                <p style={{marginBottom:"5%"}}>SKIRT SET</p>
                <p style={{marginBottom:"5%"}}>LEHENGA</p>
                <p style={{marginBottom:"5%"}}>KURTA SET</p>
                <p style={{marginBottom:"5%"}}>SUIT SET</p>
                <p style={{marginBottom:"5%"}}>ANARKALI SET</p>
                <p>JACKET SET</p>
                <p style={{textDecoration:"underline", marginTop:"30px"}}>VIEW ALL</p></Link>
            </div>
            <div className='col-3'>
                <p style={{fontWeight:"bold",}}>COLLECTIONS</p><br/>
                <Link to='/shop' style={{textDecoration:'none', color:'black'}}><p style={{marginBottom:"5%"}}>RUMELI</p>
                <p style={{marginBottom:"5%"}}>TABRIZ</p>
                <p style={{marginBottom:"5%"}}>BURSA</p>
                <p style={{marginBottom:"5%"}}>BURSA CHAPTER 2</p>
                <p>CHEVRON</p>
                <p style={{textDecoration:"underline", marginTop:"30px"}}>VIEW ALL</p></Link>
            </div>
            <div className='col-3'>
                <p style={{fontWeight:"bold"}}>JEWELLERY</p><br/>
                <Link to='/shop' style={{textDecoration:'none', color:'black'}}><p>JJ VALAYA X CONFLUENCE</p>
                <p style={{textDecoration:"underline", marginTop:"30px"}}>VIEW ALL</p></Link>
            </div>
            <div className='col-3'>
                <p style={{fontWeight:"bold"}}>ACCESSORIES</p><br/>
                <Link to='/shop' style={{textDecoration:'none', color:'black'}}><p style={{marginBottom:"5%"}}>SHAWL</p>
                <p style={{marginBottom:"5%"}}>SCARVES</p>
                <p style={{marginBottom:"5%"}}>BELTS</p>
                <p>HAIRBANDS</p>
                <p style={{textDecoration:"underline", marginTop:"30px"}}>VIEW ALL</p></Link>
            </div>
        </div>
    )
    }