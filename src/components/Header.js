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
    state1 = {background: '#eaece5', color:'black', height:"33%", src1:"https://ik.imagekit.io/thestylist/Assets/JV/Icons/insta-dark.svg", src2:"https://ik.imagekit.io/thestylist/Assets/JV/Icons/fb-dark.svg", src3:"https://ik.imagekit.io/thestylist/Assets/JV/Icons/call-dark.svg", src4:"https://ik.imagekit.io/thestylist/Assets/JV/Icons/user-dark.svg", src5:"https://ik.imagekit.io/thestylist/Assets/JV/Icons/search-dark.svg", src6:"https://ik.imagekit.io/thestylist/Assets/JV/Icons/cart-dark.svg"};
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
                onMouseLeave={() => this.setState({background: 'transparent', color:'white', height:"auto", src1:"https://ik.imagekit.io/thestylist/Assets/JV/Icons/insta-light.svg", src2:"https://ik.imagekit.io/thestylist/Assets/JV/Icons/fb-light.svg", src3:"https://ik.imagekit.io/thestylist/Assets/JV/Icons/call-light.svg", src4:"https://ik.imagekit.io/thestylist/Assets/JV/Icons/user-light.svg", src5:"https://ik.imagekit.io/thestylist/Assets/JV/Icons/search-light.svg", src6:"https://ik.imagekit.io/thestylist/Assets/JV/Icons/cart-light.svg"})}
            >
                <div style={{background:"black", color:"white", textAlign:"center", fontSize:"80%"}}>CONTACT US AT +91-8800554491 | SHIPPING WORLDWIDE</div>
                <div className="row" style={{color:this.state.color, background:this.state.background, paddingTop:"1%"}}>
                    <div className="col-md-2 offset-md-1 d-none d-md-block">
                        <img src={this.state.src1} style={{height:this.state.height, marginRight:"8%"}}></img>
                        <img src={this.state.src2} style={{height:this.state.height, marginRight:"8%"}}></img>
                        <img src={this.state.src3} style={{height:this.state.height}}></img>
                    </div>
                    <div className="col-1 d-inline-block d-md-none">
                        <img src="https://valaya.com/assets/whatsapp-48.png" style={{height:"33%"}}/>
                    </div>
                    <div className="col-6 col-md-4 offset-1 offset-md-1" style={{textAlign:"center",fontFamily:"SegoeUI", fontSize:"250%"}}>JJ VALAYA</div>
                    <div className="col-4 col-md-3 offset-md-1">
                        <img className="d-none d-md-inline-block" src="https://valaya.com/assets/whatsapp-48.png" style={{height:"33%", marginRight:"8%"}}></img>
                        <button style={{color:this.state.color, fontSize:"80%", background:"transparent", border:"none", marginRight:"8%"}}><img src={this.state.src4} style={{height:this.state.height}}></img><text className="d-none d-md-inline-block">LOGIN</text></button>
                        <button style={{background:"transparent", border:"none", marginRight:"8%"}}><img src={this.state.src5}/></button>
                        <button style={{background:"transparent", border:"none"}}><img src={this.state.src6}/></button>
                    </div>
                </div>
                <div className="row"></div>
            </header>
       </div>
       )
     }
  }