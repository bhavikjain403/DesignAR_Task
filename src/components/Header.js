import { Component } from "react";
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import '../loginModal.css';
import { useState, useEffect } from "react";
import Men from "./Men";
import Women from "./Women";
import { Link } from "react-router-dom";

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
        height:"auto",
        openModal : false
    }
    state1 = {background: '#f8f2e6', color:'black', height:"33%", src1:"https://ik.imagekit.io/thestylist/Assets/JV/Icons/insta-dark.svg", src2:"https://ik.imagekit.io/thestylist/Assets/JV/Icons/fb-dark.svg", src3:"https://ik.imagekit.io/thestylist/Assets/JV/Icons/call-dark.svg", src4:"https://ik.imagekit.io/thestylist/Assets/JV/Icons/user-dark.svg", src5:"https://ik.imagekit.io/thestylist/Assets/JV/Icons/search-dark.svg", src6:"https://ik.imagekit.io/thestylist/Assets/JV/Icons/cart-dark.svg"};
    listenScrollEvent = e => {
      if (window.scrollY) {
        this.setState(this.state1)
      } else {
        this.setState({background: 'transparent', color:'white', height:"auto", src1:"https://ik.imagekit.io/thestylist/Assets/JV/Icons/insta-light.svg", src2:"https://ik.imagekit.io/thestylist/Assets/JV/Icons/fb-light.svg", src3:"https://ik.imagekit.io/thestylist/Assets/JV/Icons/call-light.svg", src4:"https://ik.imagekit.io/thestylist/Assets/JV/Icons/user-light.svg", src5:"https://ik.imagekit.io/thestylist/Assets/JV/Icons/search-light.svg", src6:"https://ik.imagekit.io/thestylist/Assets/JV/Icons/cart-light.svg"})
      }
    }
  
    componentDidMount() {
      window.addEventListener('scroll', this.listenScrollEvent)
    }

    onClickButton = e =>{
      e.preventDefault()
      this.setState({openModal : true})
    }

    onCloseModal = ()=>{
      this.setState({openModal : false})
    }
    Gallery=()=> {
      const [buttons, setButtons] = useState([
        { label: "MEN", value: false },
        { label: "WOMEN", value: false },
        { label: "NEW ARRIVALS", value: false },
      ]);
    
      const handleButtonsChange = ({
        buttons,
        setButtons
      }) => label => {
        const newButtonsState = buttons.map(button => {
          if (button.label === label) {
            return (button = { label: button.label, value: true })
          }
          return {
            label: button.label,
            value: false
          };
        });
        setButtons(newButtonsState);
      };

      const resetButtonsChange = ({
        buttons,
        setButtons
      }) =>label=> {
        const resetButtonsState = buttons.map(button => {
          return (button = { label: button.label, value: false })
        });
        setButtons(resetButtonsState)
      };
    
      return (
          <div className="d-none d-md-block" style={{textAlign:"center", paddingBottom:"1%", background:this.state.background, fontSize:"75%"}} >
              <this.Specialbuton {...{ buttons, setButtons, handleButtonsChange , resetButtonsChange}} />
              {buttons[0].value && <div style={{textAlign:"left", background: '#f8f2e6'}} onMouseOver={() =>{
                                      handleButtonsChange({ buttons, setButtons })(buttons[0].label)
                                    }}
                                    onMouseOut={() => 
                                      resetButtonsChange({ buttons, setButtons })(buttons[0].label)
                                    }><Men/></div>}
              {buttons[1].value && <div style={{textAlign:"left", background: '#f8f2e6'}} onMouseOver={() =>{
                                      handleButtonsChange({ buttons, setButtons })(buttons[1].label)
                                    }}
                                    onMouseOut={() => 
                                      resetButtonsChange({ buttons, setButtons })(buttons[1].label)
                                    }><Women/></div>}
              {buttons[2].value}
          </div>
      );
    };
    
    Specialbuton = ({ buttons, setButtons, handleButtonsChange , resetButtonsChange}) => {
      return (
        <div style={{paddingLeft:"5%"}}>
          {buttons.map((button, index) => (
            <Link to='/shop'><button id="allbutton" style={{color:this.state.color}}
              key={`${button.label}-${index}`}
              onMouseOver={() =>{
                handleButtonsChange({ buttons, setButtons })(button.label)
              }}
              onMouseOut={() => 
                resetButtonsChange({ buttons, setButtons })(button.label)
              }
            >
              {button.label.toUpperCase()}
            </button></Link>
          ))}
        </div>
      );
    };

    render() {
      return(
        <div id="#maindiv" style={{position:"fixed", width:"100%", zIndex:"1000"}}>
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
                <div style={{background:"black", color:"white", textAlign:"center", fontSize:"80%"}}>CONTACT US AT +91-8800554491 | SHIPPING WORLDWIDE</div>
                <div className="row" style={{color:this.state.color, background:this.state.background, paddingTop:"1%"}}>
                    <div className="col-md-2 offset-md-1 d-none d-md-block">
                        <a href="http://www.instagram.com"><img src={this.state.src1} style={{height:this.state.height, marginRight:"8%"}}></img></a>
                        <a href="http://www.facebook.com"><img src={this.state.src2} style={{height:this.state.height, marginRight:"8%"}}></img></a>
                        <img src={this.state.src3} style={{height:this.state.height}}></img>
                    </div>
                    <div className="col-1 d-inline-block d-md-none">
                      <a href="http://www.whatsapp.com"><img src="https://valaya.com/assets/whatsapp-48.png" style={{height:"33%"}}></img></a>
                    </div>
                    <div className="col-6 col-md-4 offset-1 offset-md-1" style={{textAlign:"center",fontFamily:"SegoeUI", fontSize:"220%"}}>JJ VALAYA</div>
                    <div className="col-4 col-md-3 offset-md-1">
                        <a href="http://www.whatsapp.com"><img className="d-none d-md-inline-block" src="https://valaya.com/assets/whatsapp-48.png" style={{height:"33%", marginRight:"8%"}}></img></a>
                        <button onClick={this.onClickButton} style={{color:this.state.color, fontSize:"80%", background:"transparent", border:"none", marginRight:"8%"}}><img src={this.state.src4} style={{height:this.state.height}}></img><p className="d-none d-md-inline-block">LOGIN</p></button>
                        <Modal center classNames={{modal: 'customModal'}} open={this.state.openModal} onClose={this.onCloseModal}>
                            <header style={{paddingBottom:"5%", textAlign:"center"}}>LOG IN</header>
                            <div className="container">
                              <form style={{padding:"5%"}}>
                                <div style={{paddingBottom:"7%"}}>
                                <input type='email' placeholder="E-mail address *" style={{width:"100%"}}/>
                                </div>
                                <div style={{paddingBottom:"7%"}}>
                                <input type='password' placeholder="Password *" style={{width:"100%"}}/>
                                </div>
                                <div className="row">
                                  <div className="col-6">
                                    <input type='checkbox' style={{marginRight:"5%"}}/>Remember me
                                  </div>
                                  <div className="col-5 offset-md-1" style={{paddingBottom:"7%"}}>
                                    <button style={{border:'none', background:"transparent"}} id='forgot'>Forgot the password?</button>
                                  </div>
                                  <input type='submit' value='LOGIN TO YOUR ACCOUNT' id="login"/>
                                  <div style={{paddingTop:"7%", textAlign:"center", fontSize: '90%'}}>
                                    or <button id="register">register an account</button>
                                  </div>
                                </div>
                              </form>
                            </div>
                        </Modal>
                        <button style={{background:"transparent", border:"none", marginRight:"8%"}}><img src={this.state.src5}/></button>
                        <button style={{background:"transparent", border:"none"}}><img src={this.state.src6}/></button>
                    </div>
                </div>
                <this.Gallery/>
            </header>
       </div>
       )
     }
  }