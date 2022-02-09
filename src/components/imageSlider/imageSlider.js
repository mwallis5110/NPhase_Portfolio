import React, { useState, useEffect } from "react";

//Images
import Mixing from "../../assets/images/mixing.png";
import Recording from "../../assets/images/recording.png";
import General from "../../assets/images/general.png";

//Arrow Icons
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import "./imageSlider.css";

export default function ImageSlider({ autoPlayTime = 6500 }) {
  const images = [
    {
      img: Mixing,
      alt: "Mixing services",
      title: "Mixing",
      subtitle:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
    },
    {
      img: Recording,
      alt: "Recording services",
      title: "Recording",
      subtitle:
        "Maecenas in cursus libero, a mollis elit. Vivamus tempor tincidunt.",
    },
    {
      img: General,
      alt: "Production services",
      title: "Production",
      subtitle:
        "Integer tincidunt lectus leo, vitae congue lacus ullamcorper quis. Sed.",
    },
    {
      img: General,
      alt: "Pricing",
      title: "Pricing",
      subtitle:
        "Integer tincidunt lectus leo, vitae congue lacus ullamcorper quis. Sed.",
    },
  ];

  //State used for determining and setting current image in slideshow
  const [currentImage, setCurrentImage] = useState(0);

  //Timer
  useEffect(() => {
    const timer = setTimeout(() => {
      const newImgIndex =
        currentImage >= images.length - 1 ? 0 : currentImage + 1;

      setCurrentImage(newImgIndex);
    }, autoPlayTime);
    return () => clearTimeout(timer);
  }, [currentImage]);

  return (
    <div className="wrapper">
      <div
        className="slide"
        style={{ backgroundImage: `url(${images[currentImage].img})` }}
      >
        <div
          className="left"
          onClick={() => {
            currentImage > 0 && setCurrentImage(currentImage - 1);
          }}
        >
          <IoIosArrowBack />
        </div>
        <div className="center">
          <h1 className="title">{images[currentImage].title}</h1>
          <h3 className="subTitle">{images[currentImage].subtitle}</h3>
        </div>
        <div
          className="right"
          onClick={() => {
            currentImage < images.length - 1 &&
              setCurrentImage(currentImage + 1);
          }}
        >
          <IoIosArrowForward />
        </div>
      </div>
      </div>
  );
}
