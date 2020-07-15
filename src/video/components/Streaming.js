import React, { useState } from "react";

import "./Streaming.css";

const Streaming = () => {
  const [liveVideo, setLiveVideo] = useState(
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
  );

  
  // const vapp = new VappController(
  //   {
  //     use_div: "dplayer_flash_3ojwirdhlzs4",
  //     player_width: "720",
  //     player_height: "800",
  //   },
  //   {
  //     clip_id: "2690740",
  //     player_id: "46DIIE2FICI3GGC",
  //     playlist_id: "1682",
  //     transparent: "1",
  //     uk: "7b09d9855c88f93326d9b03ca949d985",
  //     live_id: "3ojwirdhlzs4",
  //     sel_playlist: "",
  //     sel_multiplaylist: "",
  //     use_html5: "true",
  //     layout: "default",
  //     theme: "light",
  //     is_responsive: "1",
  //     is_inversed: "",
  //     is_vertical: "",
  //     one_thumb_per_row: "",
  //     thumbs_size: "medium",
  //     disable_hash: "",
  //     widget_height_behavior: "0",
  //     hide_playlist: "1",
  //     hide_live_chat: "",
  //     hide_description: "",
  //     playlist_position: "",
  //     chat_position: "",
  //     description_position: "",
  //   }
  // );

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
