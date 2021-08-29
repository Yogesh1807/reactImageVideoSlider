import styled from "styled-components";

export const Wrapper = styled.div`
  /* text-align: center; */
  /* margin: 10px; */
  margin: 10px calc(20em / ${(props) => props.slides});
`;
export const MainDiv = styled.div`
  background-color: #0e1318;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 400px;
  /* overflow-x: hidden; */
  /* overflow-y: hidden; */
  display: grid;
  grid-template-columns: repeat(${(props) => props.slides}, auto);
  grid-gap: ${(props) =>
    props.slides === 3 && props.mediaLength === 3 ? "0px" : "10px"};
  /* padding: 30px 30px 0; */
  /* margin: auto; */
  /* padding: 10px; */
  border-radius: 10px;
  .leftSlide {
    transition: 1s;
    left: -535px;
    position: absolute;
    width: 50%;
    height: 400px;
    background: blue;
  }
  .rightSlide {
    transition: 1s;
    right: -535px;
    position: absolute;
    width: 50%;
    height: 400px;
    background: blue;
  }
  /* &:hover > .slide {
    transition: ${(props) => (props.isHover ? "1s" : "none")};
    left: ${(props) => (props.isHover ? "-535px" : 0)};
  }
  &:hover > .slide1 {
    transition: ${(props) => (props.isHover ? "1s" : "none")};
    right: ${(props) => (props.isHover ? "-535px" : 0)};
  } */

  .slide {
    position: absolute;
    left: 0px;
    width: 50%;
    height: 400px;
    background: blue;
    transition: 1s;
  }
  .slide1 {
    position: absolute;
    right: 0px;
    width: 50%;
    height: 400px;
    background: blue;
    transition: 1s;
  }

  h3,
  h2 {
    color: white;
    margin: 0;
    padding: 0px;
  }

  .fade {
    padding: ${(props) =>
      props.slides === 3 && props.mediaLength === 3 ? "0px" : "10px"};
    -webkit-animation-name: fade;
    -webkit-animation-duration: 1.5s;
    animation-name: fade;
    animation-duration: 1.5s;
  }

  img:hover {
    cursor: zoom-in;
  }

  .noData {
    color: white;
    text-align: center;
    font-size: 3vw;
    font-weight: bold;
    margin: 130px auto;
    width: 100%;
  }

  @keyframes fade {
    from {
      opacity: 0.4;
    }

    to {
      opacity: 1;
    }
  }

  /* @media screen and (max-width: 600px) and (orientation: landscape) {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: hidden;
    transform: rotate(90deg);
  } */
  @media screen and (max-width: 460px) {
    /* width: 100vw;
    height: 100%;
    transform: rotate(90deg);
    overflow-x: hidden;
    overflow-y: hidden;
    display: grid;
    grid-template-columns: repeat(${(props) => props.slides}, auto);
    grid-gap: 0 40px;
    padding: 30px 30px 0;
    margin: 0 auto;
    border-radius: 10px; */
  }
`;

export const ButtonsDiv = styled.div`
  display: inline-flex;
  justify-content: space-evenly;
  white-space: nowrap;
  width: 100%;
  margin: 10px;
  .button {
    padding: 15px 25px;
    font-size: 24px;
    text-align: center;
    cursor: pointer;
    outline: none;
    color: #fff;
    background-color: #04aa6d;
    border: none;
    border-radius: 5px;
    box-shadow: 0 9px #999;
  }
  .button:hover {
    background-color: #3e8e41;
  }

  .button:active {
    background-color: #3e8e41;
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
  .rangebutton {
    padding: 15px 25px;
    font-size: 24px;
    text-align: center;
    cursor: pointer;
    outline: none;
    color: #fff;
    background-color: #04aa6d;
    border: none;
    border-radius: 5px;
  }
  .rangebutton:hover {
    background-color: #3e8e41;
  }
`;
export const ActionDiv = styled.div`
  text-align: "center";
  .prev,
  .next {
    cursor: pointer;
    position: fixed;
    top: 30%;
    width: auto;
    padding: 16px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
    user-select: none;
  }

  .next {
    right: calc(26% / ${(props) => props.slides});
    border-radius: 3px 0 0 3px;
  }

  .prev {
    left: calc(26% / ${(props) => props.slides});
    border-radius: 3px 0 0 3px;
  }

  .prev:hover,
  .next:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;
