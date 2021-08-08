/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
// @flow
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Slide } from "./slide";

export const NewSlider = (props) => {
  const { media = [], autoPlay = false, autoDelay = 3000, range = 1 } = props;
  const [activeSlides, setActiveSlides] = useState([]);
  const [isShowImage, setIsShowImage] = useState(false);
  const [zoomInImage, setZoomInImage] = useState("");
  const [currentFirstSlide, setCurrentFirstSlide] = useState(0);
  const [currentLastSlide, setCurrentLastSlide] = useState(range);

  useEffect(() => {
    setCurrentFirstSlide(0);
    setCurrentLastSlide(range);
    setActiveSlides(media.slice(0, range));
    if (autoPlay) {
      let interval = setInterval(() => {
        next();
      }, autoDelay);
      return () => clearInterval(interval);
    }
    console.log("default", media.slice(0, range), autoPlay);
  }, []);

  const next = () => {
    let slides = [];
    let length = media.length;
    let temp1 = currentFirstSlide + range; // 3 - 6
    let temp2 = currentLastSlide + range; // 6 - 9
    if (temp1 >= length) {
      temp1 = temp1 % length;
    }
    if (temp2 >= length) {
      temp2 = temp2 % length;
      let arr1 = media.slice(temp1, length); // getting last items
      let arr2 = media.slice(0, temp2); // getting first items in serialy
      slides = arr1.concat(arr2);
    } else {
      slides = media.slice(temp1, temp2);
    }

    setCurrentFirstSlide(() => {
      return temp1;
    }); // 3-
    setCurrentLastSlide(() => {
      return temp2;
    }); // 6-
    // setActiveSlides(slides);

    setActiveSlides(() => {
      return slides;
    });
  };

  const prev = () => {
    let slides = [];
    let length = media.length;
    let temp1 = currentFirstSlide - range; //-3
    let temp2 = currentLastSlide - range; // -6

    if (temp2 < 0) {
      temp2 = temp2 + length; // 3
    }
    if (temp1 < 0) {
      temp1 = temp1 + length;
      let arr1 = media.slice(temp1, length);
      let arr2 = media.slice(0, temp2);
      slides = arr1.concat(arr2);
    } else {
      slides = media.slice(temp1, temp2);
    }
    setCurrentFirstSlide(temp1);
    setCurrentLastSlide(temp2);
    setActiveSlides(slides);
  };

  // useEffect(() => {
  //   if (autoPlay) {
  //     let interval = setInterval(() => {
  //       next();
  //     }, autoDelay);
  //     return () => clearInterval(interval);
  //   }
  // }, [autoPlay]);

  const zoomIn = (val) => {
    console.log("current slide", val);
    setZoomInImage(val.src);
    setIsShowImage(!isShowImage);
  };

  console.log("53=>", props, isShowImage, activeSlides);

  return (
    <>
      <MainDiv data-testid="slidediv" slides={range}>
        {activeSlides.map((slide) => (
          <Slide
            zoomIn={(val) => zoomIn(val)}
            isShowImage={isShowImage}
            zoomInImage={zoomInImage}
            slide={slide}
            key={slide.id}
          />
        ))}
      </MainDiv>
      <div style={{ textAlign: "center" }}>
        <a className="prev" data-testid="prevbutton" onClick={prev}>
          &#10094;
        </a>
        <a className="next" data-testid="nextbutton" onClick={next}>
          &#10095;
        </a>
      </div>
    </>
  );
};

export const MainDiv = styled.div`
  background-color: #0e1318;
  width: 650px;
  height: 400px;

  overflow-x: hidden;
  overflow-y: hidden;

  display: grid;
  grid-template-columns: repeat(${(props) => props.slides}, auto);
  grid-gap: 0 40px;

  padding: 30px 30px 0;

  margin: 0 auto;
  border-radius: 10px;
`;
