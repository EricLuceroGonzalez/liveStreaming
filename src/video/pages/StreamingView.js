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
        <div className="d-flex justify-content-center">
          <div className="col-7 justify-content-end">
            <Streaming />
          </div>
          <div className="col-2">
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
