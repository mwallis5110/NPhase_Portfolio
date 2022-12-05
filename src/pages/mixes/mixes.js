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

import { Pause, PlayArrow, SkipNext, SkipPrevious } from "@mui/icons-material";

import MixesArray from "../../components/dataArrays/mixesArray";

import "./mixes.css";

export default function Mixes() {
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
        </Grid>
        <Grid item xs={12} lg={6}>
          {MixesArray.slice(5, 10).map((mix) => (
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
              <PlayArrow
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
            </Box>
          ))}
        </Grid>
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
          <Typography sx={{ color: "white", fontSize: "40px" }}>
            Song title
          </Typography>
          <Stack direction="row" spacing={3} sx={{ marginTop: "10px" }}>
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
          </Stack>
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
          <PSlider />
          <Typography sx={{ color: "silver", marginLeft: "3%" }}>
            0:00
          </Typography>
        </Stack>
      </Box>
    </Container>
  );
}
