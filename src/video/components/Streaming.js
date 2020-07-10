import React, { useState } from "react";

import "./Streaming.css";
import ImageVertical from "./VerticalImage";

const Streaming = () => {
  const [liveVideo, setLiveVideo] = useState(
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
  );
  return (
    <React.Fragment>
      <div className="d-flex">
        <div className="col-10">
          <div className="myStreaming pr-5 pt-2">
            <div className="mr-auto ml-auto embed-responsive embed-responsive-16by9 col-12 col-lg-10">
              <video controls>
                <source src={liveVideo} type="video/mp4"></source>
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
        <div className="col-2">
          <ImageVertical />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Streaming;
