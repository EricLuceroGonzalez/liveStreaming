import React from "react";
import ButtonBox from "../components/ButtonBox";
import Streaming from "../components/Streaming";
import ImageBar from "../components/ImageBar";
import ImageVertical from "../components/VerticalImage";

const StreamingView = () => {
  return (
    <React.Fragment>
      <div className="col-12 mt-3">
        <ImageBar />
        <div
          className="d-flex justify-content-center"
          style={{ border: "2px dashed gray" }}
        >
          <div
            className="col-10 justify-content-end"
            style={{ border: "1px dashed blue" }}
          >
            <Streaming />
          </div>
          <div className="col-2" style={{ border: "2px dashed green" }}>
            <ImageVertical />
            <ButtonBox />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default StreamingView;

// <div className="col-2">
// <ImageVertical />
// </div>
// 
