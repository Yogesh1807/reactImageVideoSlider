// these imports are something you'd normally configure Jest to import for you
// automatically. Learn more in the setup docs: https://testing-library.com/docs/react-testing-library/setup#cleanup
// import '@testing-library/jest-dom'
// NOTE: jest-dom adds handy assertions to Jest and is recommended, but not required

import * as React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { NewSlider } from "../components/synGallery/newSlider";
import { Slide } from "../components/synGallery/slide";

const slides = [
  {
    id: 1,
    isVideo: true,
    src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
    // src: "https://images.unsplash.com/photo-1422568374078-27d3842ba676?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  },
  {
    id: 2,
    isVideo: false,
    src: "https://i.pinimg.com/originals/2c/1d/b1/2c1db1248b475e8ea7ff1bb534fa8884.jpg",
    // src: "https://images.unsplash.com/photo-1422568374078-27d3842ba676?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  },
];

/** NewSlider Component */

test("shows slide show", () => {
  render(<NewSlider autoDelay={3000} autoPlay={false} media={slides} />);

  expect(screen.getByText(1)).toBeInTheDocument();
  expect(screen.getByTestId("slidediv")).toHaveClass("mainDiv");
  const nextbutton = screen.getByTestId("nextbutton");
  fireEvent.click(nextbutton);
  expect(screen.getByText(2)).toBeInTheDocument();

  const prevbutton = screen.getByTestId("prevbutton");
  fireEvent.click(prevbutton);
  expect(screen.getByText(1)).toBeInTheDocument();
});

/** Slide Component */

test("slide related test cases", () => {
  render(<Slide zoomIn={() => {}} isShowImage={true} slide={slides[1]} />);

  /** onImgClick full view of image */
  fireEvent.click(screen.getByTestId("imageid"));
  expect(screen.getByTestId("zoominView")).toHaveStyle(`
    cursor: zoom-out;
    `);
});
