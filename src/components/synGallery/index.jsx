import React from "react";
import { NewSlider } from "./newSlider";

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
  {
    id: 3,
    isVideo: false,
    src: "https://wallpaperaccess.com/full/3985814.jpg",
    // src: "https://images.unsplash.com/photo-1422568374078-27d3842ba676?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  },
  {
    id: 4,
    isVideo: false,
    src: "https://i0.wp.com/zeeoii.com/wp-content/uploads/2020/08/Amazing-Nature-4K-Wallpapper-3840-x-2160-8.jpg?resize=1536%2C864&ssl=1",
    // src: "https://images.unsplash.com/photo-1422568374078-27d3842ba676?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  },
  {
    id: 5,
    isVideo: false,
    src: "https://images.unsplash.com/photo-1422568374078-27d3842ba676?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  },
  {
    id: 6,
    isVideo: false,
    src: "https://images.unsplash.com/photo-1422568374078-27d3842ba676?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  },
  {
    id: 7,
    isVideo: false,
    src: "https://images.unsplash.com/photo-1422568374078-27d3842ba676?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  },
  {
    // id: 8,
    // isVideo: false,
    // src: "https://i.picsum.photos/id/243/536/354.jpg?hmac=LfqhpnBszg-pS8BQHemVFexSLyoiFYP8Pw14oAiPpE4",
  },
  {
    id: 9,
    isVideo: false,
    src: "https://i.picsum.photos/id/243/536/354.jpg?hmac=LfqhpnBszg-pS8BQHemVFexSLyoiFYP8Pw14oAiPpE4",
  },
];

export const SynGallery = () => {
  return (
    <NewSlider autoDelay={2000} autoPlay={false} media={slides} range={2} />
  );
};
