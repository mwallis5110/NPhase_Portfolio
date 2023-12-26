import React from "react";

import AppleMusic from "../../assets/socialIcons/appleMusic.png";
import Instagram from "../../assets/socialIcons/instagram.png";
import Soundcloud from "../../assets/socialIcons/soundcloud.png";
import Spotify from "../../assets/socialIcons/spotify.png";
import Tidal from "../../assets/socialIcons/tidal.png";
import TikTok from "../../assets/socialIcons/tiktok.png";
import YouTubeMusic from "../../assets/socialIcons/youtubeMusic.png";
import "./socialIcons.css";

export default function SocialIcons() {
  return (
    <div className="socialIcons">
      <a href="" target="_blank" rel="noreferrer">
        <img className="iconButton" src={AppleMusic} alt="Apple Music icon" />
      </a>
      <a href="" target="_blank" rel="noreferrer">
        <img className="iconButton" src={Instagram} alt="Instagram icon" />
      </a>
      <a href="" target="_blank" rel="noreferrer">
        <img className="iconButton" src={Soundcloud} alt="Soundcloud icon" />
      </a>
      <a href="" target="_blank" rel="noreferrer">
        <img className="iconButton" src={Spotify} alt="Spotify icon" />
      </a>
      <a href="" target="_blank" rel="noreferrer">
        <img className="iconButton" src={Tidal} alt="Tidal icon" />
      </a>
      <a href="" target="_blank" rel="noreferrer">
        <img className="iconButton" src={TikTok} alt="TikTok icon" />
      </a>
      <a href="" target="_blank" rel="noreferrer">
        <img
          className="iconButton"
          src={YouTubeMusic}
          alt="YoutTube Music icon"
        />
      </a>
    </div>
  );
}
