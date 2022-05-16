import { Component } from "react";

export default class Header extends Component{
    state = {
        background: 'transparent',
        color:'white',
        src1:"https://ik.imagekit.io/thestylist/Assets/JV/Icons/insta-light.svg",
        src2:"https://ik.imagekit.io/thestylist/Assets/JV/Icons/fb-light.svg",
        src3:"https://ik.imagekit.io/thestylist/Assets/JV/Icons/call-light.svg",
        src4:"https://ik.imagekit.io/thestylist/Assets/JV/Icons/user-light.svg",
        src5:"https://ik.imagekit.io/thestylist/Assets/JV/Icons/search-light.svg",
        src6:"https://ik.imagekit.io/thestylist/Assets/JV/Icons/cart-light.svg",
        height:"auto"
    }
    state1 = {background: '#f8f2e6', color:'black', height:"33%", src1:"https://ik.imagekit.io/thestylist/Assets/JV/Icons/insta-dark.svg", src2:"https://ik.imagekit.io/thestylist/Assets/JV/Icons/fb-dark.svg", src3:"https://ik.imagekit.io/thestylist/Assets/JV/Icons/call-dark.svg", src4:"https://ik.imagekit.io/thestylist/Assets/JV/Icons/user-dark.svg", src5:"https://ik.imagekit.io/thestylist/Assets/JV/Icons/search-dark.svg", src6:"https://ik.imagekit.io/thestylist/Assets/JV/Icons/cart-dark.svg"};
    listenScrollEvent = e => {
      if (window.scrollY > 100) {
        this.setState(this.state1)
      } else {
        this.setState({background: 'transparent', color:'white', height:"auto", src1:"https://ik.imagekit.io/thestylist/Assets/JV/Icons/insta-light.svg", src2:"https://ik.imagekit.io/thestylist/Assets/JV/Icons/fb-light.svg", src3:"https://ik.imagekit.io/thestylist/Assets/JV/Icons/call-light.svg", src4:"https://ik.imagekit.io/thestylist/Assets/JV/Icons/user-light.svg", src5:"https://ik.imagekit.io/thestylist/Assets/JV/Icons/search-light.svg", src6:"https://ik.imagekit.io/thestylist/Assets/JV/Icons/cart-light.svg"})
      }
    }
  
    componentDidMount() {
      window.addEventListener('scroll', this.listenScrollEvent)
    }
    render() {
      return(
        <div style={{position:"fixed", width:"100%", zIndex:"1000"}}>
            <header id="header"
                onMouseEnter={() => this.setState(this.state1)}
                onMouseLeave={() => {
                  if (window.scrollY > 100) {
                    this.setState(this.state1)
                  } else {
                    this.setState({background: 'transparent', color:'white', height:"auto", src1:"https://ik.imagekit.io/thestylist/Assets/JV/Icons/insta-light.svg", src2:"https://ik.imagekit.io/thestylist/Assets/JV/Icons/fb-light.svg", src3:"https://ik.imagekit.io/thestylist/Assets/JV/Icons/call-light.svg", src4:"https://ik.imagekit.io/thestylist/Assets/JV/Icons/user-light.svg", src5:"https://ik.imagekit.io/thestylist/Assets/JV/Icons/search-light.svg", src6:"https://ik.imagekit.io/thestylist/Assets/JV/Icons/cart-light.svg"})
                  }
                }}
            >
                <div style={{background:"black", color:"white", textAlign:"center", fontSize:"80%"}}>CONTACT US AT +91-88000554491 | SHIPPING WORLDWIDE</div>
                <div className="row" style={{color:this.state.color, background:this.state.background, paddingTop:"1%"}}>
                    <div className="col-md-2 offset-md-1 d-none d-md-block">
                        <a href="http://www.instagram.com"><img src={this.state.src1} style={{height:this.state.height, marginRight:"8%"}}></img></a>
                        <a href="http://www.facebook.com"><img src={this.state.src2} style={{height:this.state.height, marginRight:"8%"}}></img></a>
                        <img src={this.state.src3} style={{height:this.state.height}}></img>
                    </div>
                    <div className="col-1 d-inline-block d-md-none">
                      <a href="http://www.whatsapp.com"><img src="https://valaya.com/assets/whatsapp-48.png" style={{height:"33%"}}></img></a>
                    </div>
                    <div className="col-6 col-md-4 offset-1 offset-md-1" style={{textAlign:"center",fontFamily:"SegoeUI", fontSize:"220%"}}>IJ VALAYA</div>
                    <div className="col-4 col-md-3 offset-md-1">
                        <a href="http://www.whatsapp.com"><img className="d-none d-md-inline-block" src="https://valaya.com/assets/whatsapp-48.png" style={{height:"33%", marginRight:"8%"}}></img></a>
                        <button style={{color:this.state.color, fontSize:"80%", background:"transparent", border:"none", marginRight:"8%"}}><img src={this.state.src4} style={{height:this.state.height}}></img><text className="d-none d-md-inline-block">LOGIN</text></button>
                        <button style={{background:"transparent", border:"none", marginRight:"8%"}}><img src={this.state.src5}/></button>
                        <button style={{background:"transparent", border:"none"}}><img src={this.state.src6}/></button>
                    </div>
                </div>
                <div className="d-none d-md-block" style={{textAlign:"center", paddingBottom:"1%", background:this.state.background, fontSize:"75%", paddingTop:"1%"}}>
                    <button style={{border:"none", background:"transparent", color:this.state.color, marginRight:"2%"}}>MEN</button>
                    <button style={{border:"none", background:"transparent", color:this.state.color, marginRight:"2%"}}>WOMEN</button>
                    <button style={{border:"none", background:"transparent", color:this.state.color}}>NEW ARRIVALS</button>
                </div>
            </header>
       </div>
       )
     }
  }