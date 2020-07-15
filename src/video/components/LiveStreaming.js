import React, { useEffect } from "react";
import ReactDOM from "react-dom";

const VideoOverlay = (props) => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://play.streamingvideoprovider.com/js/vapp.js";
    script.async = true;

    document.body.appendChild(script);

    console.log(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
//   var vapp = window.VappController(
//       {
//         use_div: "dplayer_flash_3ojwirdhlzs4",
//         player_width: "720",
//         player_height: "800",
//       },
//       {
//         clip_id: "2690740",
//         player_id: "46DIIE2FICI3GGC",
//         playlist_id: "1682",
//         transparent: "1",
//         uk: "7b09d9855c88f93326d9b03ca949d985",
//         live_id: "3ojwirdhlzs4",
//         sel_playlist: "",
//         sel_multiplaylist: "",
//         use_html5: "true",
//         layout: "default",
//         theme: "light",
//         is_responsive: "1",
//         is_inversed: "",
//         is_vertical: "",
//         one_thumb_per_row: "",
//         thumbs_size: "medium",
//         disable_hash: "",
//         widget_height_behavior: "0",
//         hide_playlist: "1",
//         hide_live_chat: "",
//         hide_description: "",
//         playlist_position: "",
//         chat_position: "",
//         description_position: "",
//       })
  const content = (
    <div style={{ border: "2px solid red", height: "400px" }}>
      <header className="col-8">
        <h5>Title here</h5>
        <div>{props.children}</div>
        <div
        id="svp_player7gakq63hnog0"
      ></div>

      </header>
    </div>
  );
  return ReactDOM.createPortal(
    content,
    document.getElementById("div-stream")
  );
};

const LiveStreaming = () => {
  return (
    <React.Fragment>
    <div
    //   id="svp_player7gakq63hnog0"
    //   style="width: 720px; height: 810px; position: relative;"
    ></div>
<VideoOverlay />

    </React.Fragment>
  );
};

export default LiveStreaming;
