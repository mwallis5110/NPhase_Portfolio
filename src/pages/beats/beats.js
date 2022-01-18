import React, { useState, useRef, useEffect } from "react";

//Imports tracks from wavFiles folder. FUTURE DEVELOPMENT: Figure out a cleaner way to import these, then
//automatically create a new table row each time one is added to the folder/imported here. Use a convoluted
//for loop maybe?
import Track1 from "../../assets/wavFiles/BabyElephantWalk60.wav";
import Track2 from "../../assets/wavFiles/CantinaBand3.wav";
import Track3 from "../../assets/wavFiles/CantinaBand60.wav";
import Track4 from "../../assets/wavFiles/Fanfare60.wav";
import Track5 from "../../assets/wavFiles/gettysburg.wav";
import Track6 from "../../assets/wavFiles/gettysburg10.wav";
import Track7 from "../../assets/wavFiles/ImperialMarch60.wav";
import Track8 from "../../assets/wavFiles/PinkPanther30.wav";
import Track9 from "../../assets/wavFiles/PinkPanther60.wav";
import Track10 from "../../assets/wavFiles/preamble10.wav";

import { FaPlay, FaPause } from "react-icons/fa";

import "./beats.css";

export default function Beats() {
  //State
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  //References
  const audioPlayer = useRef();
  const progressBar = useRef();
  const animationRef = useRef();

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);
  

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes} : ${returnedSeconds}`;
  };

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!isPlaying);

    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty(
      "100px",
      `${(progressBar.current.value / duration) * 100}%`
    );
    setCurrentTime(progressBar.current.value);
  };

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  };

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  return (
    <div>
      <h1>Beats</h1>
      <thead>
        <tr className="headers">
          <th>Title</th>
          <th>Artist</th>
          <th>Listen</th>
          <th>Purchase</th>
          <th>Price</th>
        </tr>
      </thead>
      <tr className="audioPlayer">
        <audio ref={audioPlayer} src={Track1} preload="metadata" 
        // onLoadedMetadata={onLoadedMetadata} 
        />
        <button className="playPauseButton" onClick={togglePlayPause}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>

        {/* Current Time  */}
        <div>{calculateTime(currentTime)}</div>

        {/* Progress Bar */}
        <div>
          <input
            type="range"
            className="progressBar"
            defaultValue="0"
            ref={progressBar}
            onChange={changeRange}
          />
        </div>

        {/* Duration */}
        <div>{duration && !isNaN(duration) && calculateTime(duration)}</div>
      </tr>
      {/* Main div */}
      {/* A table would probably be easiest to structure beats */}
      {/* For now, just get this part to play/pause/etc beats. Worry about the waveform part later.  */}
      {/* Check out that custom video player youtube video for this part */}
      {/* TODO: Check out a css course devoted to just positioning. Take notes */}
    </div>
  );
}
