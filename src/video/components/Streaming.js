import React, { useState } from "react";

import "./Streaming.css";

const Streaming = () => {
  const [liveVideo, setLiveVideo] = useState(
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
  );
  return (
    <React.Fragment>
      <div className="myStreaming ">
        <div className="ml-auto embed-responsive embed-responsive-16by9">
          <video controls autoPlay>
            <source src={liveVideo} type="video/mp4"></source>
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Streaming;
