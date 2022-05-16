import HeaderStatic from "./HeaderStatic"
import "../bookNow.css"

export default function BookNow() {
    return(
        <div>
            <HeaderStatic/>
            <div className="container" style={{paddingTop:"15%"}}>
                <div className="row">
                    <div className="col-12 col-md-6" style={{padding:"5%"}}>
                        <h5>
                        Keep In Touch
                        <br/><br/>IJ Valaya
                        <br/>Aerocity, Indira Gandhi International Airport
                        <br/>New Delhi, Delhi 110037
                        <br/>Phone :+918657929567
                        <br/>Email:appointments@valaya.com
                        </h5>
                    </div>
                    <div className="col-12 col-md-6" style={{padding:"5%"}}>
                        <h5>Contact US</h5><br/>
                        <form>
                        <input type='text' placeholder="Your Name *" style={{width:"100%"}} required/><br/><br/>
                        <input type='email' placeholder="Email Address *" style={{width:"100%"}} required/><br/><br/>
                        <input type='text' placeholder="Phone *" style={{width:"100%"}} required/><br/><br/>
                        <textarea placeholder="Enquiry *" style={{border:"none", width:"100%", overflowY:'scroll'}} rows="3" required/><hr/><br/>
                        <input type='submit' value="SEND MAIL" id="submitButton"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}