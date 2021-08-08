import React, { useState, useEffect } from "react";
import styled from "styled-components";
import update from "immutability-helper";
import { Slide } from "./slide";

export const NewSlider = (props) => {
  const { media = [], autoPlay = false, autoDelay = 3000, range = 1 } = props;
  const [currentAllState, setCurrentAllState] = useState({
    firstSlide: 0,
    lastSlide: range,
    activeSlides: media.slice(0, range),
    zoomInImage: "",
    isShowImage: false,
  });
  const { activeSlides, isShowImage, zoomInImage } = currentAllState;
  useEffect(() => {
    if (autoPlay) {
      let interval = setTimeout(() => {
        next();
      }, autoDelay);
      return () => clearTimeout(interval);
    }
  }, [currentAllState]);
  const next = () => {
    const { firstSlide, lastSlide } = currentAllState;
    let slides = [];
    let length = media.length;
    let first = firstSlide + range; // 3 - 6
    let last = lastSlide + range; // 6 - 9
    if (first >= length) {
      first = first % length;
    }
    if (last >= length) {
      last = last % length;
      let arr1 = media.slice(first, length); // getting first items
      let arr2 = media.slice(0, last); // getting last items
      slides = arr1.concat(arr2);
    } else {
      slides = media.slice(first, last);
    }
    let temp = update(currentAllState, {
      $merge: { firstSlide: first, lastSlide: last, activeSlides: slides },
    });
    setCurrentAllState(temp);
  };
  const prev = () => {
    let slides = [];
    let length = media.length;
    let first = currentAllState.firstSlide - range; //-3
    let last = currentAllState.lastSlide - range; // -6

    if (last < 0) {
      last = last + length; // 3
    }
    if (first < 0) {
      first = first + length;
      let arr1 = media.slice(first, length);
      let arr2 = media.slice(0, last);
      slides = arr1.concat(arr2);
    } else {
      slides = media.slice(first, last);
    }

    let temp = update(currentAllState, {
      $merge: { firstSlide: first, lastSlide: last, activeSlides: slides },
    });
    setCurrentAllState(temp);
  };
  const zoomIn = (val) => {
    let { isShowImage } = currentAllState;
    let temp = update(currentAllState, {
      $merge: { zoomInImage: val.src, isShowImage: !isShowImage },
    });
    setCurrentAllState(temp);
  };
  return (
    <>
      {Object.keys(currentAllState).length > 0 && (
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
      )}
      <div style={{ textAlign: "center" }}>
        <label className="prev" data-testid="prevbutton" onClick={prev}>
          &#10094;
        </label>
        <label className="next" data-testid="nextbutton" onClick={next}>
          &#10095;
        </label>
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
  /* @media screen and (max-width: 600px) and (orientation: landscape) {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: hidden;
    transform: rotate(90deg);
  } */
  @media screen and (max-width: 460px) {
    width: 100vw;
    height: 100%;
    transform: rotate(90deg);
    overflow-x: hidden;
    overflow-y: hidden;
    display: grid;
    grid-template-columns: repeat(${(props) => props.slides}, auto);
    grid-gap: 0 40px;
    padding: 30px 30px 0;
    margin: 0 auto;
    border-radius: 10px;
  }
`;
