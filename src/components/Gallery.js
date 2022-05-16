import { useState } from "react";
import Shoots from "./Shoots";
import Press from "./Press";
import Runway from "./Runway";
import Celebrities from "./Celebrities";
import Collaborations from "./Collaborations";
import HomeLifestyle from "./HomeLifestyle";
import "../gallery.css"

export default function Gallery() {
    const [buttons, setButtons] = useState([
      { label: "SHOOTS", value: true },
      { label: "PRESS & MEDIA", value: false },
      { label: "RUNWAY", value: false },
      { label: "CELEBRITIES", value: false },
      { label: "COLLABORATIONS", value: false },
      { label: "HOME & LIFESTYLE", value: false },
    ]);
  
    const handleButtonsChange = ({
      buttons,
      setButtons
    }) => label => {
      const newButtonsState = buttons.map(button => {
        if (button.label === label) {
          return (button = { label: button.label, value: true });
        }
        return {
          label: button.label,
          value: false
        };
      });
      setButtons(newButtonsState);
    };
  
    return (
        <div style={{background:"#eaece5"}}>
            <header style={{textAlign:"center", fontSize:"250%", paddingTop:"5%", paddingBottom:"3%"}}>GALLERY</header>
            <Specialbuton {...{ buttons, setButtons, handleButtonsChange }} />
            {buttons[0].value && <div><Shoots/></div>}
            {buttons[1].value && <div><Press/></div>}
            {buttons[2].value && <div><Runway/></div>}
            {buttons[3].value && <div><Celebrities/></div>}
            {buttons[4].value && <div><Collaborations/></div>}
            {buttons[5].value && <div><HomeLifestyle/></div>}
        </div>
    );
  };
  
  const Specialbuton = ({ buttons, setButtons, handleButtonsChange }) => {
    return (
      <div style={{textAlign:"center", paddingBottom:"2%"}}>
        {buttons.map((button, index) => (
          <button id="allbutton"
            key={`${button.label}-${index}`}
            onClick={() =>
              handleButtonsChange({ buttons, setButtons })(button.label)
            }
          >
            {button.label.toUpperCase()}
          </button>
        ))}
      </div>
    );
  };