import { Link } from "react-router-dom"

export default function() {
    return(
        <div className='row' style={{padding:"15%", paddingTop:"5%", color:"black"}}>
            <div className='col-3'>
                <p style={{fontWeight:"bold"}}>CATEGORY</p><br/>
                <Link to='/shop' style={{textDecoration:'none', color:'black'}}><p style={{marginBottom:"5%"}}>NEHRU JACKET SET</p>
                <p style={{marginBottom:"5%"}}>SHERWANI SET</p>
                <p style={{marginBottom:"5%"}}>KURTA SET</p>
                <p style={{marginBottom:"5%"}}>JACKET SET</p>
                <p style={{marginBottom:"5%"}}>BRITCHES</p>
                <p style={{marginBottom:"5%"}}>BANDHGALA</p>
                <p>SHIRT</p>
                <p style={{textDecoration:"underline", marginTop:"30px"}}>VIEW ALL</p></Link>
            </div>
            <div className='col-3'>
                <p style={{fontWeight:"bold",}}>COLLECTIONS</p><br/>
                <Link to='/shop' style={{textDecoration:'none', color:'black'}}><p style={{marginBottom:"5%"}}>RUMELI</p>
                <p style={{marginBottom:"5%"}}>BURSA</p>
                <p style={{marginBottom:"5%"}}>BURSA CHAPTER 2</p>
                <p style={{marginBottom:"5%"}}>TABRIZ</p>
                <p style={{marginBottom:"5%"}}>JHALAMAND HOUSE</p>
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
                <Link to='/shop' style={{textDecoration:'none', color:'black'}}><p style={{marginBottom:"5%"}}>STOLE</p>
                <p style={{marginBottom:"5%"}}>POCKET SQUARE</p>
                <p style={{marginBottom:"5%"}}>BUTTONS</p>
                <p style={{marginBottom:"5%"}}>SHOES</p>
                <p style={{marginBottom:"5%"}}>BELTS</p>
                <p style={{marginBottom:"5%"}}>SAFAS</p>
                <p style={{marginBottom:"5%"}}>CUFF LINKS</p>
                <p>STOLES</p>
                <p style={{textDecoration:"underline", marginTop:"30px"}}>VIEW ALL</p></Link>
            </div>
        </div>
    )
    }