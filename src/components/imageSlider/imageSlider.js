import React, { useState, useEffect } from "react";

import { ServicesImageArray } from "../dataArrays/servicesImageArray";
//Arrow Icons
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import "./imageSlider.css";

export default function ImageSlider({ autoPlayTime = 6500 }) {
  //State used for determining and setting current image in slideshow
  const [currentImage, setCurrentImage] = useState(0);

  //Timer
  useEffect(() => {
    const timer = setTimeout(() => {
      const newImgIndex =
        currentImage >= ServicesImageArray.length - 1 ? 0 : currentImage + 1;

      setCurrentImage(newImgIndex);
    }, autoPlayTime);
    return () => clearTimeout(timer);
  });

  return (
    <div className="imageSlideWrapper">
      <div
        className="singleSlide"
        style={{
          backgroundImage: `url(${ServicesImageArray[currentImage].img})`,
        }}
      >
        <div
          className="leftButton"
          onClick={() => {
            currentImage > 0 && setCurrentImage(currentImage - 1);
          }}
        >
          <IoIosArrowBack />
        </div>
        <div className="center">
          <h1 className="title">{ServicesImageArray[currentImage].title}</h1>
          <h3 className="subTitle">
            {ServicesImageArray[currentImage].subtitle}
          </h3>
        </div>
        <div
          className="rightButton"
          onClick={() => {
            currentImage < ServicesImageArray.length - 1 &&
              setCurrentImage(currentImage + 1);
          }}
        >
          <IoIosArrowForward />
        </div>
      </div>
    </div>
  );
}
