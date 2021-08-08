import React from "react";

export const Slide = (props) => {
  const { slide, isShowImage, zoomInImage, zoomIn } = props;
  return (
    <>
      <div className="fade" key={slide.id}>
        {Object.keys(slide).length > 0 ? (
          <>
            {slide.isVideo ? (
              <video height={350} width={"100%"} controls>
                <source src={slide.src} type="video/mp4" />
              </video>
            ) : (
              <img
                data-testid="imageid"
                onClick={() => zoomIn(slide)}
                height={350}
                width={"100%"}
                alt={slide.id}
                src={slide.src}
              />
            )}
            <h3 style={{ color: "white" }}>{slide.id}</h3>
          </>
        ) : (
          <div className="noData">No data</div>
        )}
      </div>
      {isShowImage && (
        <div
          data-testid="zoominView"
          onClick={zoomIn}
          style={{
            background:
              "RGBA(0,0,0,.5) url(" + zoomInImage + ") no-repeat center",
            backgroundSize: "contain",
            width: "100%",
            height: "100%",
            position: "fixed",
            zIndex: "10000",
            top: "0",
            left: "0",
            cursor: "zoom-out",
          }}
          className="zoomIn"
        />
      )}
    </>
  );
};
