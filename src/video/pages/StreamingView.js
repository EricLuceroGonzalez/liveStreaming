import React from "react";
import ButtonBox from "../components/ButtonBox";
import Streaming from "../components/Streaming";
import ImageBar from "../components/ImageBar";

const StreamingView = () => {
  return (
    <React.Fragment>
      <div className="col-12 mt-4 p-1">
        <ImageBar />
<div className='col-10 justify-content-start'>
<Streaming />
<ButtonBox />
</div>
      </div>
    </React.Fragment>
  );
};

export default StreamingView;
