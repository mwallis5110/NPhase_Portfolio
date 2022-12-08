import React, { useState, useEffect, useRef } from "react";

import {
  styled,
  Typography,
  Slider,
  Stack,
  Box,
  Grid,
  Container,
} from "@mui/material";

import { Pause, PlayArrow, SkipNext, SkipPrevious } from "@mui/icons-material";

import MixesArray from "../../components/dataArrays/mixesArray";

import "./mixes.css";

export default function Mixes() {
  const [trackIndex, setTrackIndex] = useState(-1);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(trackIndex);
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackProgress, setTrackProgress] = useState("");

  const { title = "", track = {} } =
    trackIndex !== -1 ? MixesArray[trackIndex] : {};

  const onTrackSelect = (index) => {
    setTrackIndex(index);
  };

  const audioSrc = track;
  const audioRef = useRef(new Audio(audioSrc));
  const intervalRef = useRef();

  const startTimer = () => {
    intervalRef.current = setInterval(() => {
      clearInterval(intervalRef.current);
      setTrackProgress(audioRef.current.currentTime);
    }, 1000);
  };

  useEffect(
    (trackIndex) => {
      audioRef.current.pause();
      audioRef.current = new Audio(audioSrc);
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
      setCurrentTrackIndex(trackIndex);
    },
    [trackIndex, audioSrc]
  );

  const PSlider = styled(Slider)(({ theme, ...props }) => ({
    color: "silver",
    hover: {
      cursor: "pointer",
    },
    "& .MuiSlider-thumb": {
      width: "14px",
      height: "14px",
      color: "#e30613",
    },
    "& .MuiSlider-track": {
      color: "#e30613",
    },
  }));

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
      }}
    >
      <h1 className="mixesTitle">Mixes</h1>
      <h2 className="mixesSubtitle">
        A sample of mixes, before and after our team has mastered them
      </h2>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          {MixesArray.map((mix, index) => (
            <Box
              key={index}
              sx={{
                height: "50px",
                background: "linear-gradient(#070707, #323236)",
                marginBottom: "15px",
                borderRadius: "10px",
                alignItems: "center",
                opacity: 0.9,
                display: "flex",
              }}
            >
              <audio src={mix.track} />
              <Stack
                direction="row"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  justifyContent: "align-left",
                }}
              >
                {!isPlaying ? (
                  <PlayArrow
                    onClick={(() => onTrackSelect(index), setIsPlaying(true))}
                    key={index}
                    sx={{
                      color: "silver",
                      justifyContent: "left",
                      marginLeft: "5%",
                      fontSize: "40px",
                      minWidth: "50px",
                      "&:hover": { color: "white", cursor: "pointer" },
                    }}
                  />
                ) : (
                  <Pause
                    onClick={
                      (() => audioRef.current.pause(), setIsPlaying(false))
                    }
                    key={index}
                    sx={{
                      color: "silver",
                      justifyContent: "left",
                      marginLeft: "5%",
                      fontSize: "40px",
                      minWidth: "50px",
                      "&:hover": { color: "white", cursor: "pointer" },
                    }}
                  />
                )}
                <Typography
                  sx={{
                    color: "white",
                    fontSize: "25px",
                    minWidth: "100px",
                    justifyContent: "center",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  {mix.title}
                </Typography>
              </Stack>
            </Box>
          ))}
        </Grid>
        {/* <Grid item xs={12} lg={6}>
          {MixesArray.slice(5, 10).map((mix, index) => (
            <Box
              key={index}
              sx={{
                height: "70px",
                background: "linear-gradient(#070707, #323236)",
                marginBottom: "15px",
                borderRadius: "10px",
                alignItems: "center",
                opacity: 0.9,
                display: "flex",
              }}
            >
              <audio src={mix.track} />
              <Stack
                direction="row"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  justifyContent: "align-left",
                }}
              >
                <PlayArrow
                  onClick={() => onTrackSelect(index)}
                  key={index}
                  sx={{
                    color: "silver",
                    justifyContent: "left",
                    marginLeft: "5%",
                    fontSize: "40px",
                    minWidth: "50px",
                    "&:hover": { color: "white", cursor: "pointer" },
                  }}
                />
                <Typography
                  sx={{
                    color: "white",
                    fontSize: "30px",
                    minWidth: "100px",
                    justifyContent: "center",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  {mix.title}
                </Typography>
              </Stack>
            </Box>
          ))}
        </Grid> */}
      </Grid>
      <Box
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
          >
            {title}
          </Typography>
          {/* <Stack direction="row" spacing={3} sx={{ marginTop: "10px" }}>
            <SkipPrevious
              sx={{
                color: "silver",
                fontSize: "40px",
                "&:hover": { color: "white", cursor: "pointer" },
              }}
            />
            <PlayArrow
              sx={{
                color: "silver",
                fontSize: "40px",
                "&:hover": { color: "white", cursor: "pointer" },
              }}
            />
            <SkipNext
              sx={{
                color: "silver",
                fontSize: "40px",
                "&:hover": { color: "white", cursor: "pointer" },
              }}
            />
          </Stack> */}
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
          <PSlider
            min={"0"}
            max={audioRef.current.duration}
            value={trackProgress}
          />
          <Typography sx={{ color: "silver", marginLeft: "3%" }}>
            0:00
          </Typography>
        </Stack>
      </Box>
    </Container>
  );
}
