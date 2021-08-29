/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import update from "immutability-helper";
import { AiOutlineCaretRight, AiOutlinePause } from "react-icons/ai";

import { Slide } from "./slide";
import { Wrapper, MainDiv, ActionDiv, ButtonsDiv } from "./style";

import GreenIMg from "../../images/green.png";
import OrangeIMg from "../../images/orange.png";
import WhiteIMg from "../../images/white.png";

export const SynGallery = (props) => {
  const {
    media = [
      {
        id: 1,
        isVideo: false,
        src: OrangeIMg,
      },
      {
        id: 2,
        isVideo: false,
        src: WhiteIMg,
      },
      {
        id: 3,
        isVideo: false,
        src: GreenIMg,
      },
    ],
    autoSlide = false,
    autoSlideDelay = 3000,
    slideRange = 3,
  } = props;
  const [range, setRange] = useState(slideRange);
  const [autoPlay, setAutoPlay] = useState(autoSlide);
  const [isHover, setIsHover] = useState(false);

  const [currentAllState, setCurrentAllState] = useState({
    firstSlide: 0,
    lastSlide: range,
    activeSlides: media.slice(0, range),
    zoomInImage: "",
    isShowImage: false,
    template: {
      slideOne: ({ ...params }) => <Slide {...params} />,
    },
  });
  const {
    firstSlide,
    lastSlide,
    activeSlides,
    zoomInImage,
    isShowImage,
    template,
  } = currentAllState;

  useEffect(() => {
    if (autoPlay) {
      let interval = setTimeout(() => {
        next();
      }, autoSlideDelay);
      return () => clearTimeout(interval);
    }
  }, [currentAllState, autoPlay]);

  const next = () => {
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
  console.log("props 136=>", props, activeSlides);
  return (
    <Wrapper slides={range}>
      {Object.keys(currentAllState).length > 0 && (
        <MainDiv
          className="mainDiv"
          data-testid="slidediv"
          slides={range}
          mediaLength={media.length}
          isHover={isHover}
        >
          <div
            className={isHover ? "leftSlide" : "slide"}
            // src="http://lorempixel.com/output/cats-q-c-100-100-4.jpg"
            // alt="slide"
          >
            <h2 style={{ textAlign: "right", margin: " 185px 0" }}>Wel -</h2>
          </div>
          <div
            className={isHover ? "rightSlide" : "slide1"}
            // src="http://lorempixel.com/output/cats-q-c-100-100-4.jpg"
            // alt="slide1"
          >
            <h2 style={{ marginLeft: "-3px", margin: " 185px -3px 0" }}>
              - Come
            </h2>
          </div>
          {activeSlides.map((slide) => {
            let args = {
              zoomIn,
              isShowImage,
              zoomInImage,
              slide,
              key: slide.id,
            };
            return template.slideOne({ ...args });
          })}
        </MainDiv>
      )}
      <ButtonsDiv>
        <button
          onClick={() => setIsHover(!isHover)}
          title="range"
          className="rangebutton"
        >
          {range}
        </button>
        <button className="button" onClick={() => setAutoPlay(!autoPlay)}>
          {!autoPlay ? (
            <AiOutlineCaretRight color="white" title="Play" />
          ) : (
            <AiOutlinePause title="Pause" />
          )}
        </button>
      </ButtonsDiv>
      <ActionDiv slides={range}>
        <label className="prev" data-testid="prevbutton" onClick={prev}>
          &#10094;
        </label>
        <label className="next" data-testid="nextbutton" onClick={next}>
          &#10095;
        </label>
      </ActionDiv>
    </Wrapper>
  );
};
