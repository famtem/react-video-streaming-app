//import StreamVideo from "../../Javascriptcourse.mp4"
import ffImg from "./forward-5.svg"
import bwImg from "./backward-5.svg"
import pauseImg from "./pause.svg"
import playImg from "./play.svg"
import { useRef, useState } from "react";

export function Controls () {
    const videoRef = useRef(null);
    const [playing, setPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [videoTime, setVideoTime] = useState(0);
    const [progress, setProgress] = useState(0);
  
    const videoHandler = (control) => {
      if (control === "play") {
        videoRef.current.play();
        setPlaying(true);
        //var vid = document.getElementById("video1");
        //setVideoTime(vid.duration);
      } else if (control === "pause") {
        videoRef.current.pause();
        setPlaying(false);
      }
    };
  
    const fastForward = () => {
      videoRef.current.currentTime += 5;
    };
  
    const revert = () => {
      videoRef.current.currentTime -= 5;
    };
  
    const stopPlaying = () => {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    
    };
  
  
    window.setInterval(function () {
      setCurrentTime(videoRef.current?.currentTime);
      setProgress((videoRef.current?.currentTime / videoTime) * 100);
    }, 1000);
    return (
    <>
    <div className="player-controls">
        <img
              onClick={revert}
              className="controlsIcon"
              alt=""
              src={bwImg}
            /> 
            
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


              <button 
              onClick={stopPlaying}
              className="stop-button" 
              title="Stop">◼
              </button>
              
              <img
                  onClick={fastForward}
                  className="controlsIcon"
                  alt=""
                  src={ffImg}
                /> 
        </div>
    </>  
    )
}