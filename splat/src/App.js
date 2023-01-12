// external imports
import React, { useState } from "react";
import useSound from "use-sound";
import { GrDocumentText } from "react-icons/gr";
import { SocialIcon } from "react-social-icons";
import { ReactSketchCanvas } from "react-sketch-canvas";

// internal imports
import disc from "./images/disc.png";
import signature from "./images/signature.png";
import music from "./music/DavidSong.mp3";
//import image from "./images/background.png";
import "./App.css";

function App() {

  const [playSound, { pause }] = useSound(music)
  const [isSpinning, setIsSpinning] = useState(false);

  const spin = () => {
    setIsSpinning(true)
    console.log("spin")
    playSound();
  }
  const stopSpin = () => {
    setIsSpinning(false);
    console.log("stopspin")
    pause();
  }

  return (
    <div style={{ backgroundImage:`url(${process.env.PUBLIC_URL + '/background.png'})`}}>
      <div className="App">
        < header className="App-header">
          {isSpinning ? (
            <button style={{ border: 0, backgroundColor: "transparent", cursor: "pointer" }} onClick={stopSpin}>
              <img src={disc} className="App-logo" alt="logo" />
            </button>
          ) : (
            <button style={{ border: 0, backgroundColor: "transparent", cursor: "pointer" }} onClick={spin}>
              <img src={disc} className="Pause" alt="logo" />
            </button>
          )}
        </header>
        <footer className="Footer">
          <img src={signature} className="ImageSize" alt="signature" />
          {/* <a href="https://www.Google.ca" >
            <GrDocumentText className="ImageSize" />
          </a> */}
          <SocialIcon url="https://github.com/Hannah-C" bgColor="black" />
          <SocialIcon url="https://www.linkedin.com/in/hannah-choi-comsciart/" bgColor="black" />
          <SocialIcon url="https://www.instagram.com/wiawias/" bgColor="black" />
        </footer>
      </div>
    </div >
  );
}

export default App;
