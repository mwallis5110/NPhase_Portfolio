import React, { useState, useRef, useEffect } from "react";

import { MixesBeforeArray } from "../../components/mixesArray/mixesBeforeArray.js";
import { MixesAfterArray } from "../../components/mixesArray/mixesAfterArray.js";

import { FaPlay, FaPause } from "react-icons/fa";

import "./mixes.css";

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
    setIsPlaying(!prevValue);

    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  };

  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty(
      "100px",
      `${(progressBar.current.value / duration) * 100}%`
    );
    setCurrentTime(progressBar.current.value);
  };
  return (
    <div className="mixesSection" id="mixesId">
      <h1 className="mixesTitle">Mixes</h1>
      <div className="mixWrapper">
        <div className="mixHeaders">
          <h5 className="titleHeader">Title</h5>
          <h5 className="artistHeader">Before</h5>
          <h5 className="listenHeader">After</h5>
        </div>
        <div className="allMixes">
          {MixesBeforeArray.map((track) => {
            return (
              <div className="eachMixWrapper">
                <div className="mixTitle">
                  <h5 className="trackTitle">{track.title}</h5>
                </div>
                <div className="beforeMixes">
                  <div className="audioPlayer">
                    <audio
                      ref={audioPlayer}
                      src={track.track}
                      preload="metadata"
                    />
                    <button
                      className="playPauseButton"
                      onClick={togglePlayPause}
                    >
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
                    <div>
                      {duration && !isNaN(duration) && calculateTime(duration)}
                    </div>
                  </div>
                </div>
                <div className="afterMixes">

                  <div className="audioPlayer">
                    <audio
                      ref={audioPlayer}
                      src={track.track}
                      preload="metadata"
                    />
                    <button
                      className="playPauseButton"
                      onClick={togglePlayPause}
                    >
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
                    <div>
                      {duration && !isNaN(duration) && calculateTime(duration)}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
