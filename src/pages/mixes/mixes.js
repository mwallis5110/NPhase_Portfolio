import React, { useState, useEffect, useRef } from "react";

import { Typography, Stack, Grid, Container, Button } from "@mui/material";

import MixesArray from "../../components/dataArrays/mixesArray";
// import MusicPlayer from "./MusicPlayer";
import { FaPlay, FaPause } from "react-icons/fa";

import "./mixes.css";

export default function Mixes() {
  // const [mixes, setMixes] = useState(MixesArray);
  const [mix, setMix] = useState(MixesArray[0].track);
  const [title, setTitle] = useState(MixesArray.title);
  const [auto, setAuto] = useState(false);

  const allMixes = MixesArray;

  useEffect(() => {
    const allTracks = document.querySelectorAll(".mixes");
    function changeActive() {
      allTracks.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    allTracks.forEach((n) => n.addEventListener("click", changeActive));
  }, []);

  const setMainMix = (mixSrc, titleSrc) => {
    setMix(mixSrc);
    setTitle(titleSrc);
    setAuto(true);
  };

  const [isPlaying, setPlay] = useState(false);
  //   duration state
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrenttime] = useState(0);

  const audioPlayer = useRef(); //   reference to audio component
  const progressBar = useRef(); //   reference to progress bar
  const animationRef = useRef(); //  reference to animation

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);

    // set max prop with out seconds in input[range]
    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetada, audioPlayer?.current?.readyState]);

  const changePlayPause = () => {
    const prevValue = isPlaying;
    setPlay(!prevValue);

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
    changeCurrentTime();
    // need to run more than once
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const calculateTime = (sec) => {
    const minutes = Math.floor(sec / 60);
    const returnMin = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(sec % 60);
    const returnSec = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnMin} : ${returnSec}`;
  };

  const changeProgress = () => {
    audioPlayer.current.currentTime = progressBar.current.value;

    progressBar.current.style.setProperty(
      "--played-width",
      `${(progressBar.current.value / duration) * 100}%`
    );

    setCurrenttime(progressBar.current.value);

    changeCurrentTime();
  };

  const changeCurrentTime = () => {
    progressBar.current.style.setProperty(
      "--played-width",
      `${(progressBar.current.value / duration) * 100}%`
    );

    setCurrenttime(progressBar.current.value);
  };

  return (
    <Container
      id="mixesId"
      maxWidth={false}
      sx={{
        width: "90%",
        marginLeft: "auto",
        marginRight: "auto",
        paddingRight: "0px",
        paddingLeft: "0px",
        background: "none",
      }}
    >
      <h1 className="mixesTitle">Mixes</h1>
      <h2 className="mixesSubtitle">
        A sample of mixes, before and after our team has mastered them. Click to
        play.
      </h2>
      <Grid container>
        {allMixes &&
          allMixes.map((mix, index) => (
            <Grid
              item
              xs={12}
              md={6}
              className="mix"
              key={index}
              onClick={() => setMainMix(mix.track, mix.title)}
              sx={{
                height: "50px",
                background: "linear-gradient(#070707, #323236)",
                marginBottom: "15px",
                borderRadius: "10px",
                alignItems: "center",
                opacity: 0.9,
                display: "flex",
                cursor: "pointer",
              }}
            >
              <Stack
                direction="row"
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  width: "100%",
                  justifyContent: "align-left",
                }}
              >
                <Typography
                  sx={{
                    color: "white",
                    fontSize: "25px",
                    minWidth: "100px",
                    textAlign: "center",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  {mix.title}
                </Typography>
              </Stack>
            </Grid>
          ))}
      </Grid>
      <div className="musicPlayer">
        <div className="songAttributes">
          <audio
            src={mix}
            preload="metadata"
            ref={audioPlayer}
            autoPlay={true}
            changePlayPause
          />
          <Stack
            direction="row"
            sx={{
              display: "flex",
              width: "100%",
              alignItems: "center",
            }}
          >
            <Button
              onClick={changePlayPause}
              sx={{
                background: "linear-gradient(#070707, #323236)",
                color: "#e30613",
                float: "left",
                fontSize: "30px",
                marginTop: "20px",
                justifySelf: "left",
              }}
            >
              {isPlaying ? (
                <i>
                  <FaPause />
                </i>
              ) : (
                <i>
                  <FaPlay />
                </i>
              )}
            </Button>
            <Typography
              sx={{
                color: "white",
                fontSize: "40px",
                marginTop: "20px",
                alignItems: "center",
                justifySelf: "center",
              }}
            >
              {title ? title : "No Mix Selected"}
            </Typography>
          </Stack>

          <div className="bottom">
            <div className="currentTime">{calculateTime(currentTime)}</div>
            <input
              type="range"
              className="progressBar"
              ref={progressBar}
              defaultValue="0"
              onChange={changeProgress}
              autoPlay={auto}
            />
            <div className="duration">
              {duration && !isNaN(duration) && calculateTime(duration)
                ? duration && !isNaN(duration) && calculateTime(duration)
                : "00:00"}
            </div>
          </div>
        </div>
      </div>
      {/* <MusicPlayer mix={mix} autoplay={auto} title={title} /> */}
    </Container>
  );
}

// const [isPlaying, setIsPlaying] = useState(false);
// const [song, setSong] = useState(MixesArray[0].track);
// const [mixes, setMixes] = useState(MixesArray);

// return (
//   <Container
//     id="mixesId"
//     maxWidth={false}
//     sx={{
//       width: "90%",
//       marginLeft: "auto",
//       marginRight: "auto",
//       paddingRight: "0px",
//       paddingLeft: "0px",
//     }}
//   >
//     <h1 className="mixesTitle">Mixes</h1>
//     <h2 className="mixesSubtitle">
//       A sample of mixes, before and after our team has mastered them. Click to
//       play.
//     </h2>
//     <Grid container spacing={4} display="inline-flex">
//       <Grid item xs={6}>
//         {MixesArray.map((mix, index) => (
//           <Box
//             key={index}
//             onClick={() => {
//               setSong(mix.track);
//               setIsPlaying(true);
//               console.log(mix);
//             }}
//             sx={{
//               height: "50px",
//               background: "linear-gradient(#070707, #323236)",
//               marginBottom: "15px",
//               borderRadius: "10px",
//               alignItems: "center",
//               opacity: 0.9,
//               display: "flex",
//               cursor: "pointer",
//             }}
//           >
//             <audio src={mix.track} />
//             <Stack
//               direction="row"
//               sx={{
//                 display: "inline-flex",
//                 alignItems: "center",
//                 width: "100%",
//                 justifyContent: "align-left",
//               }}
//             >
//               <Typography
//                 sx={{
//                   color: "white",
//                   fontSize: "25px",
//                   minWidth: "100px",
//                   textAlign: "center",
//                   marginLeft: "auto",
//                   marginRight: "auto",
//                 }}
//               >
//                 {mix.title}
//               </Typography>
//             </Stack>
//           </Box>
//         ))}
//       </Grid>
//     </Grid>
{
  /* <Box
        sx={{
          height: "140px",
          background: "linear-gradient(#070707, #323236)",
          marginBottom: "15px",
          borderRadius: "10px",
          alignItems: "start",
          justifyContent: "space-evenly",
          opacity: 0.9,
          display: "block",
        }}
      >
        <Stack
          direction="row"
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            width: "100%",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{ color: "white", fontSize: "40px", marginTop: "20px" }}
          ></Typography>
        </Stack>
        <Stack
          direction="row"
          sx={{
            display: "flex",
            alignItems: "flex-end",
            marginTop: "15px",
            marginLeft: "auto",
            marginRight: "auto",
            justifyContent: "center",
            width: "90%",
          }}
        >
          <Typography sx={{ color: "silver", marginRight: "3%" }}>
            0:00
          </Typography>
          <PSlider min={"0"} max={"100"} />
          <Typography sx={{ color: "silver", marginLeft: "3%" }}>
            0:00
          </Typography>
        </Stack>
      </Box> */
}
