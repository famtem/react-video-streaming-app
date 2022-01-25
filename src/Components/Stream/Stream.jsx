import StreamVideo from "../../kob.mp4"
import ffImg from "./forward-5.svg"
import bwImg from "./backward-5.svg"
import pauseImg from "./pause.svg"
import playImg from "./play.svg"
import stopImg from "./stop.svg"
import './Styles.css'
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { useRef, useState } from "react";

export function Stream () {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  //const [currentTime, setCurrentTime] = useState(0);
  //const [videoTime, setVideoTime] = useState(0);
  //const [progress, setProgress] = useState(0);

  //Play and Pause functionality
  const videoHandler = (control) => {
    if (control === "play") {
      videoRef.current.play();
      setPlaying(true);
    } else if (control === "pause") {
      videoRef.current.pause();
      setPlaying(false);
    }
  };

  // Fast Forward functionality
  const fastForward = () => {
    videoRef.current.currentTime += 5;
  };
// Rewind functionality
  const revert = () => {
    videoRef.current.currentTime -= 5;
  };
  //Stop functionality
  const stopPlaying = () => {
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
    setPlaying(false)
    
  };


  
    return (
        
    <>  
    < Header/>
    <main>
      <div className="video-player">
        <video 
        playing
        ref={videoRef}
        src={StreamVideo}
        className="video"
        id="video1">

        </video>

        <div className="player-controls">
          <img
              onClick={revert}
              className="controlsIcon"
              alt=""
              src={bwImg}
            /> 
           {// checking play and pause
           } 
           {playing ? (
              <img
                onClick={() => videoHandler("pause")}
                className="controlsIcon"
                alt=""
                src={pauseImg}
              />
            ) : (
              <img
                onClick={() => videoHandler("play")}
                className="controlsIcon"
                alt=""
                src={playImg}
              />
            )}

              <img
                  onClick={stopPlaying}
                  className="controlsIcon"
                  alt=""
                  src={stopImg}
                /> 
              
              
              <img
                  onClick={fastForward}
                  className="controlsIcon"
                  alt=""
                  src={ffImg}
                /> 
        </div>
      </div>
    </main>
    <Footer />
    </>
    )
}