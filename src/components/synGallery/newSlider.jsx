// @flow
import React, { useState, useEffect } from "react";
import { Slide } from "./slide";

export const NewSlider = (props) => {
  const { media = [], autoPlay = false, autoDelay = 3000 } = props;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isShowImage, setIsShowImage] = useState(false);

  const next = () => {
    console.log("currentSlide lin 11", currentSlide);
    setCurrentSlide((currentSlide) => {
      if (currentSlide < media.length) {
        if (currentSlide === media.length - 1) {
          return 0;
        }
        return currentSlide + 1;
      } else {
        return 0;
      }
    });
  };

  useEffect(() => {
    if (autoPlay) {
      let interval = setInterval(() => {
        next();
      }, autoDelay);
      return () => clearInterval(interval);
    }
  }, []);

  const prev = () => {
    setCurrentSlide((currentSlide) => {
      if (currentSlide > 0) {
        return currentSlide - 1;
      } else {
        return media.length - 1;
      }
    });
    console.log("prev", currentSlide);
  };

  const zoomIn = () => {
    setIsShowImage(!isShowImage);
  };

  console.log("currentSlide lin 53", currentSlide, isShowImage);

  return (
    <>
      <div className="mainDiv">
        <Slide
          zoomIn={() => zoomIn()}
          isShowImage={isShowImage}
          slide={media[currentSlide]}
        />
      </div>
      <div style={{ textAlign: "center" }}>
        <a href className="prev" onClick={prev}>
          &#10094;
        </a>
        <a href className="next" onClick={next}>
          &#10095;
        </a>
      </div>
    </>
  );
};
