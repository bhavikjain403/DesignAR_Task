import HeaderStatic from "./HeaderStatic"
import { Link } from "react-router-dom"

export default function ReplacementPolicy() {
    return(
        <div>
            <HeaderStatic/>
            <div style={{paddingTop:"15%", marginLeft:"5%", fontSize:"75%"}}>
                <Link to='/' style={{textDecoration:"none", color:"black"}}>HOMEPAGE</Link> / RETURNS AND EXCHANGES
            </div>
            <div className="container" style={{paddingTop:"5%"}}>
                <p>
                Disclaimer

<br/><br/>All products sold on this web-site are sold on ‘As Is” basis. Customers are requested to check the product for any defect(s) upon the delivery of the same. In case the customer wishes to raise any replacement query, it needs to be done within 24 hours of the product reaching the customer else it would be deemed ineligible for any return/refund/replacement.

<br/><br/>The following would be the conditions of the replacement policy –

<br/><br/>1. The replacement would be restricted to the identical product

<br/><br/>2. The replacement will be done only in the case of wrong size or any defect

<br/><br/>3. The actual replacement will be initiated only once the goods have reached the original shipper from the buyer

<br/><br/>read about us
<br/>WE HAVE BEEN CRAFTING LUXURY SINCE 1992
<br/>READ ABOUT US
<br/>PRIVACY POLICY
<br/>TERMS OF USE
<br/>REPLACEMENT POLICY
<br/>CONTACT US
<br/>© (For Project Purpose Only)
                </p>
            </div>
        </div>
    )
}