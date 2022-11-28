import React, { useState, useEffect, useRef } from "react";

import {
  styled,
  Typography,
  Slider,
  Paper,
  Stack,
  Box,
  Grid,
  Container,
} from "@mui/material";

import {
  VolumeDown,
  VolumeUp,
  VolumeOff,
  VolumeMute,
  Pause,
  PlayArrow,
} from "@mui/icons-material";

import MixesArray from "../../components/dataArrays/mixesArray";

import "./mixes.css";

export default function Mixes() {
  const [currentTrack, setCurrentTrack] = useState("");
  const audioPlayer = useRef();

  const togglePlay = () => {};

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
        <Grid item xs={12} lg={6}>
          {MixesArray.slice(0, 5).map((mix) => (
            <Box
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
              <audio src={mix.track} autoPlay ref={audioPlayer} />
              <PlayArrow
                onClick={setCurrentTrack(`mixesArray.${mix.id}`)}
                sx={{
                  color: "silver",
                  marginLeft: "3%",
                  marginRight: "3%",
                  fontSize: "40px",
                  minWidth: "50px",
                  "&:hover": { color: "white", cursor: "pointer" },
                }}
              />
              <Typography
                sx={{
                  color: "white",
                  fontSize: "20px",
                  width: "8%",
                  minWidth: "100px",
                }}
              >
                {mix.title}
              </Typography>
              <Stack
                direction="row"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "3%",
                  marginRight: "3%",
                  justifyContent: "center",
                  width: "90%",
                }}
              >
                <Typography sx={{ color: "silver", marginRight: "3%" }}>
                  0:00
                </Typography>
                <PSlider />
                <Typography sx={{ color: "silver", marginLeft: "3%" }}>
                  0:00
                </Typography>
              </Stack>
            </Box>
          ))}
        </Grid>
        <Grid item xs={12} lg={6}>
          {MixesArray.slice(5, 10).map((mix) => (
            <Box
              sx={{
                height: "70px",
                background: "linear-gradient(#070707, #323236)",
                marginBottom: "20px",
                borderRadius: "10px",
                alignItems: "center",
                opacity: 0.9,
                display: "flex",
              }}
            >
              <PlayArrow
                sx={{
                  color: "silver",
                  marginLeft: "3%",
                  marginRight: "3%",
                  fontSize: "40px",
                  minWidth: "50px",
                  "&hover": { color: "white" },
                }}
              />
              <Typography
                sx={{
                  color: "white",
                  fontSize: "20px",
                  width: "8%",
                  minWidth: "100px",
                }}
              >
                {mix.title}
              </Typography>
              <Stack
                direction="row"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "3%",
                  marginRight: "3%",
                  justifyContent: "center",
                  width: "90%",
                }}
              >
                <Typography sx={{ color: "silver", marginRight: "2%" }}>
                  0:00
                </Typography>
                <Slider />
                <Typography sx={{ color: "silver", marginLeft: "2%" }}>
                  0:00
                </Typography>
              </Stack>
            </Box>
          ))}
        </Grid>
      </Grid>
      <Box>
        <Stack></Stack>
      </Box>
    </Container>
  );
}
