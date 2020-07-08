import React, { useState } from "react";

import "./Streaming.css";

const Streaming = () => {
  const [liveVideo, setLiveVideo] = useState(
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
  );
  return (
    <React.Fragment>
      {/*
          <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={liveVideo} title='hello'></iframe>
      </div>
 */}
      <div className="row flex mr-auto ml-auto justify-content-around col-11 myStreaming pr-5">
        <div className="embed-responsive embed-responsive-16by9 col-12 col-lg-8">
          <video controls>
            <source src={liveVideo} type="video/mp4"></source>
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Streaming;
