import React, { useState, useEffect, useRef } from "react";

import {
  Typography,
  Stack,
  Grid,
  Container,
  Button,
  Slider,
} from "@mui/material";

import MixesArray from "../../components/dataArrays/mixesArray";
import { FaPlay, FaPause } from "react-icons/fa";
import song from "../../assets/wavFiles/preamble10.wav";
import "./mixes.css";
import { Box } from "@mui/system";

export default function Mixes() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const audioRef = useRef(new Audio(MixesArray[currentTrackIndex].track));
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    console.log("isPlaying", isPlaying);
    if (isPlaying) {
      console.log("pause");
      audioRef.current.pause();
    } else {
      console.log("play");
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTrackChange = (index) => {
    console.log("handleTrackChange");
    setCurrentTrackIndex(index);

    //console.log("??", audioRef.current.paused);
    audioRef.current.pause();
    audioRef.current = new Audio(MixesArray[index].track);
    audioRef.current.play();
    //.paused

    console.log(audioRef, audioRef.current);

    //

    setIsPlaying(false);
  };

  const handleTimeUpdate = () => {
    console.log("handle time update");
    const { currentTime, duration } = audioRef.current;
    setProgress(currentTime / duration);
  };

  const handleSeek = (e) => {
    audioRef.current.currentTime = e.target.value * audioRef.current.duration;
    setProgress(e.target.value);
  };
  console.log("progress:", progress, audioRef.current.currentTime);

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
        play and pause.
      </h2>
      <Grid container>
        {MixesArray &&
          MixesArray.map((mix, index) => (
            <Grid
              item
              xs={12}
              md={6}
              key={index}
              className="mix"
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
              onClick={() => handleTrackChange(index)}
            >
              <Stack
                direction="row"
                sx={{
                  width: "100%",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
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
      <Box
        sx={{
          background: "linear-gradient(#070707, #323236)",
          height: "125px",
          width: "100%",
          borderRadius: "10px",
          alignItems: "center",
        }}
      >
        <Stack
          direction="row"
          spacing={2}
          sx={{
            display: "flex",
            width: "95%",
            alignItems: "center",
            justifyContent: "center",
            margin: "auto",
            paddingTop: "15px",
          }}
        >
          <audio
            ref={audioRef}
            controls
            ontimeupdate={handleTimeUpdate}
            onEnded={() =>
              handleTrackChange((currentTrackIndex + 1) % MixesArray.length)
            }
          />
          <Button
            onClick={togglePlay}
            sx={{ color: "#e30613", fontSize: "30px" }}
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </Button>

          <Typography sx={{ color: "white", fontSize: "20px" }}>
            0:00
          </Typography>
          <Slider
            min={0}
            max={1}
            step={0.01}
            value={progress}
            onChange={handleSeek}
            valueLabelDisplay="auto"
            sx={{
              width: "90%",
              display: "flex",
              color: "#e30613",
            }}
          />
          <Typography sx={{ color: "white", fontSize: "20px" }}>
            {audioRef.current.duration
              ? audioRef.current.duration.toFixed(2)
              : "0:00"}
          </Typography>
        </Stack>
        <Typography
          sx={{
            justifyContent: "center",
            color: "white",
            fontSize: "35px",
            alignItems: "center",
            display: "flex",
          }}
        >
          {MixesArray[currentTrackIndex].title ?? "No Track Selected"}
        </Typography>
      </Box>
    </Container>
  );
}
