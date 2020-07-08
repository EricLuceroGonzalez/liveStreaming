import React from "react";
import ButtonBox from "../components/ButtonBox";
import Streaming from "../components/Streaming";
import ImageBar from "../components/ImageBar";

const StreamingView = () => {
  return (
    <React.Fragment>
      <div className="mt-4 p-3">
        <ImageBar />
        <Streaming />
        <ButtonBox />
      </div>
    </React.Fragment>
  );
};

export default StreamingView;
